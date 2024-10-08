// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.17;

import {ICouponSnapshotManagementInternal} from "./ICouponSnapshotManagementInternal.sol";
import {IERC20Snapshot} from "../../token/ERC20/extensions/IERC20Snapshot.sol";

interface ICouponSnapshotManagement is
    ICouponSnapshotManagementInternal,
    IERC20Snapshot
{
    /**
     * @notice Retrieve the balance of `account` at the coupon date that
     *          must have been set by the setCurrentCouponDate before.
     * @param account The address of the account to retrieve the balance of.
     */
    function balanceOfCoupon(
        address account,
        uint256 _couponDate
    ) external view returns (uint256);

    /**
     * @notice Retrieve the total supply at the coupon date that
     *          must have been set by the setCurrentCouponDate before.
     * @param _couponDate The coupon date to retrieve the total supply at.
     * @return The total supply at the coupon date.
     */
    function totalSupplyAtCoupon(
        uint256 _couponDate
    ) external view returns (uint256);

    /**
     * @notice Retrieve the current coupon date.
     * @return The current coupon date.
     */
    function currentCouponDate() external view returns (uint256);

    /**
     * @notice Retrieve the current snapshot datetime.
     * @return The current snapshot datetime.
     */
    function currentSnapshotDatetime() external view returns (uint256);

    /**
     * @notice Retrieve the next snapshot datetime.
     * @return The next snapshot datetime.
     */
    function nextSnapshotDatetime() external view returns (uint256);

    /**
     * @notice Get the investor list at a coupon date
     * @param CouponDate The coupon date
     * @return The list of investors
     */
    function getInvestorListAtCoupon(
        uint256 CouponDate
    ) external returns (address[] memory);

    /**
     * @notice Get balance of primary issuance account
     * @param investor The investor address
     * @return True if allowed
     */
    function returnBalanceToPrimaryIssuanceAccount(
        address investor
    ) external returns (bool);

    /**
     * @notice Mint `amount_` tokens to primary issuance account.
     * @param amount_ The amount of tokens to mint.
     *
     * @dev The aim of this function is to enable the CAK to mint some bond units
     */
    function mint(uint256 amount_) external;

    /**
     * @notice Burn `amount_` tokens from primary issuance account.
     * @param amount_ The amount of tokens to burn.
     *
     * @dev The aim of this function is to enable the CAK or IP to burn some bond units
     */
    function burn(uint256 amount_) external;

    /**
     * @notice Lock the amount of tokens from `from` to `to`.
     * @param from The address of the from.
     * @param to The address of the to.
     * @param amount The amount of tokens to lock.
     * @param transactionId The unique transaction id (e.g. uti).
     * @param hashLock The h of the secret which unlocks the contract.
     * @param hashRelease The h of the forced release.
     * @param hashCancel The h of the forced cancel.
     * @param paymentDate The timestamp of when the payment will be released to the from.
     * @param deliveryDate The timestamp of when the asset will be released to the to.
     * @param proof The artifacts of the HTLC.
     */
    function lock(
        address from,
        address to,
        uint256 amount,
        bytes32 transactionId,
        bytes32 hashLock,
        bytes32 hashRelease,
        bytes32 hashCancel,
        uint256 paymentDate,
        uint256 deliveryDate,
        bytes32 proof
    ) external;

    /**
     * @notice Release the locked amount of tokens.
     * @param transactionId The unique transaction id (e.g. uti).
     * @param secret The secret which unlocks the contract.
     * @param proof The artifacts of the HTLC.
     * @param status_ The status of the HTLC.
     */
    function release(
        bytes32 transactionId,
        bytes32 secret,
        bytes32 proof,
        LockStatus status_
    ) external;

    /**
     * @notice Get the lock information.
     * @param transactionId The unique transaction id (e.g. uti).
     */
    function getLock(bytes32 transactionId) external view returns (Lock memory);
}
