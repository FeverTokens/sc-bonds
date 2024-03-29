// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.17;

import { ICoupon } from "./ICoupon.sol";
import { IRegister } from "../IRegister.sol";
import { ICouponSnapshotManagement } from "../snapshot/ICouponSnapshotManagement.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Coupon is ICoupon, ReentrancyGuard {
    uint256 public couponDate;
    uint256 public nbDays;
    uint256 public recordDate;
    uint256 public cutOfTime;
    address public payingAgent;
    uint256 internal actualTimestamp; // initialized at time of recording in the register

    IRegister public register;
    ICouponSnapshotManagement internal register2;

    CouponStatus public status;

    //TODO: struct {PaymentStatus ; PaymentID}
    mapping(address => PaymentStatus) public investorPayments;

    /**
     * @notice This contract must be authorized in the register to interact with it
     * The constructor cannot be checked by the register by looking ain the hash of
     * the runtime bytecode because this hash does not cover the constructor.
     * so controls in the constructors are to be replicated in the first interaction with a function
     */
    constructor(
        address _registerContract,
        uint256 _couponDate,
        uint256 _nbDays,
        uint256 _recordDate,
        uint256 _cutOfTime
    ) {
        register = IRegister(_registerContract);
        register2 = ICouponSnapshotManagement(_registerContract);
        // TODO : Activate  the pay role
        require(
            register.isPay(msg.sender),
            "Sender must be a Paying calculation agent"
        );

        require(
            register.checkIfCouponDateExists(_couponDate),
            "this couponDate does not exists"
        );
        couponDate = _couponDate;
        nbDays = _nbDays;
        recordDate = _recordDate - (_recordDate % (3600 * 24)); // remove the time if any
        cutOfTime = _cutOfTime % (3600 * 24); // remove the date part if any
        payingAgent = msg.sender;
        status = CouponStatus.Draft;
        emit CouponChanged(register, couponDate, status);
    }

    /**
     * @dev Throws if called by any account other than the PAY_ROLE.
     */
    modifier onlyPAY_ROLE() {
        // TODO: Manage the pay role
        require(
            register.isPay(msg.sender),
            "Sender must be a Paying calculation agent"
        );
        _;
    }

    modifier onlyCST_ROLE() {
        require(register.isCustodian(msg.sender), "Sender must be Custodian");
        _;
    }

    /**
     * @inheritdoc	ICoupon
     */
    function getInvestorPayments(
        address _investor
    ) public view returns (PaymentStatus) {
        return investorPayments[_investor];
    }

    /**
     * @inheritdoc	ICoupon
     */
    function paymentIdForInvest(
        address _investor
    ) external view returns (bytes8) {
        //TODO: could also be generated by the JS backend
        return bytes8(keccak256(abi.encodePacked(address(this), _investor)));
    }

    /**
     * @inheritdoc	ICoupon
     */
    function setDateAsCurrentCoupon() public nonReentrant onlyPAY_ROLE {
        //when PA validate the coupon
        require(
            status == CouponStatus.Draft,
            "The coupon date can be modified only if the contract status is Draft"
        );
        require(
            register.checkIfCouponDateExists(couponDate),
            "this couponDate does not exists"
        );

        register.setCurrentCouponDate(couponDate, recordDate + cutOfTime);
        // get the timestamp when the coupon period is passed
        actualTimestamp = register2.currentSnapshotDatetime();
        status = CouponStatus.Ready;
        emit CouponChanged(register, couponDate, status);
    }

    /**
     * @inheritdoc	ICoupon
     */
    function setNbDays(uint256 _nbDays) public onlyPAY_ROLE {
        require(
            status == CouponStatus.Draft,
            "The coupon date can be modified only if the contract status is Draft"
        );
        nbDays = _nbDays;
    }

    /**
     * @inheritdoc	ICoupon
     */
    function setCutOffTime(
        uint256 _recordDate,
        uint256 _cutOfTime
    ) public onlyPAY_ROLE {
        require(
            status == CouponStatus.Draft,
            "The coupon date can be modified only if the contract status is Draft"
        );
        recordDate = _recordDate - (_recordDate % (24 * 3600));
        cutOfTime = _cutOfTime % (24 * 3600);
    }

    function rejectCoupon() public onlyPAY_ROLE {
        status = CouponStatus.Cancelled;
        emit CouponChanged(register, couponDate, status);
    }

    /**
     * @inheritdoc	ICoupon
     */
    function getPaymentAmountForInvestor(
        address _investor
    ) public view returns (uint256 paymentAmount) {
        // Calculate coupon amount with Formula of Coupon Amount = unitValue * _totalSupply * couponRate * nbDays / 360
        // Step 2 on process - https://user-images.githubusercontent.com/26713092/172685832-b507fd58-fd50-466f-b91e-93e4d9f80c50.png

        uint256 unitValue = register.getBondUnitValue();
        uint256 couponRate = register.getBondCouponRate();
        uint256 balance = register2.balanceOfCoupon(_investor, couponDate);
        uint256 couponAmount = (unitValue * balance * couponRate * nbDays) /
            360;
        /** @dev
         * returns :
         * couponAmount : result of the calcul
         * decimals : always 4
         */
        return (couponAmount);
    }

    /**
     * @inheritdoc	ICoupon
     */
    function getTotalPaymentAmount()
        public
        view
        returns (uint256 paymentAmount)
    {
        // Calculate coupon amount with Formula of Coupon Amount = unitValue * _totalSupply * couponRate * nbDays / 360
        // Step 2 on process - https://user-images.githubusercontent.com/26713092/172685832-b507fd58-fd50-466f-b91e-93e4d9f80c50.png

        uint256 unitValue = register.getBondUnitValue();
        uint256 couponRate = register.getBondCouponRate();
        uint256 balance = register.totalSupply();
        uint256 couponAmount = (unitValue * balance * couponRate * nbDays) /
            360;
        /** @dev
         * returns :
         * couponAmount : result of the calcul
         * decimals : always 4
         */
        return (couponAmount);
    }

    /**
     * @inheritdoc	ICoupon
     */
    function toggleCouponPayment(address _investor) public {
        require(
            register.investorsAllowed(_investor),
            "This investor is not allowed"
        );

        // The status control is important here because the actualTimestamp is zero before the status gets Ready
        require(
            status == CouponStatus.Ready,
            "The status of the coupon should be Ready"
        );
        PaymentStatus initialStatus = investorPayments[_investor];

        if (register.isCAK(msg.sender)) {
            //CAK can make tobepaid to paid for all investors
            if (investorPayments[_investor] == PaymentStatus.ToBePaid) {
                require(
                    block.timestamp > actualTimestamp,
                    "the coupon cut of time has not passed"
                );
                investorPayments[_investor] = PaymentStatus.Paid;
            }
            //CAK peut faire passer de paid à tobepaid pour tous les investors
            else if ((investorPayments[_investor] == PaymentStatus.Paid)) {
                investorPayments[_investor] = PaymentStatus.ToBePaid;
            } else {
                revert(
                    "The status of this investor's payment should be Paid or ToBePaid"
                );
            }
        } else if (register.isCustodian(msg.sender)) {
            require(
                register.investorCustodian(_investor) == msg.sender,
                "You are not custodian of this investor"
            );
            //cust peut faire passer de paid à received pour ses investors
            if (investorPayments[_investor] == PaymentStatus.Paid) {
                investorPayments[_investor] = PaymentStatus.PaymentReceived;
            }
            //cust peut faire passer de received à paid pour ses investors
            else if (
                (investorPayments[_investor] == PaymentStatus.PaymentReceived)
            ) {
                investorPayments[_investor] = PaymentStatus.Paid;
            } else {
                revert("Invalid Coupon payment status");
            }
        } else {
            revert("sender must be Central Account Keeper or Custodian");
        }

        emit CouponPaymentStatusChanged(
            register,
            couponDate,
            _investor,
            investorPayments[_investor],
            initialStatus
        );
    }
}