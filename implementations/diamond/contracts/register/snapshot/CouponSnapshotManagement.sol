// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.20;

import { ICouponSnapshotManagement } from "./ICouponSnapshotManagement.sol";
import { CouponSnapshotManagementInternal, ERC20Metadata } from "./CouponSnapshotManagementInternal.sol";
import { IERC20, IERC20Base, ERC20Base } from "../../token/ERC20/base/ERC20Base.sol";

contract CouponSnapshotManagement is
    ICouponSnapshotManagement,
    CouponSnapshotManagementInternal
{
    /**
     * @inheritdoc ICouponSnapshotManagement
     */
    function balanceOfCoupon(
        address account,
        uint256 _couponDate
    ) external view virtual returns (uint256) {
        return _balanceOfCoupon(account, _couponDate);
    }

    /**
     * @inheritdoc ICouponSnapshotManagement
     */
    function totalSupplyAtCoupon(
        uint256 _couponDate
    ) public view virtual returns (uint256) {
        return _totalSupplyAtCoupon(_couponDate);
    }

    /**
     * @inheritdoc ICouponSnapshotManagement
     */
    function currentCouponDate() external view returns (uint256) {
        return _currentCouponDate();
    }

    /**
     * @inheritdoc ICouponSnapshotManagement
     */
    function currentSnapshotDatetime() external view returns (uint256) {
        return _currentSnapshotDatetime();
    }

    /**
     * @inheritdoc ICouponSnapshotManagement
     */
    function nextSnapshotDatetime() external view returns (uint256) {
        return _nextSnapshotDatetime();
    }

    /**
     * @inheritdoc ICouponSnapshotManagement
     */
    function getInvestorListAtCoupon(
        uint256 CouponDate
    ) public view override returns (address[] memory) {
        return _getInvestorListAtCoupon(CouponDate);
    }

    /**
     * @dev transfer is disabled
     */
    function transfer(
        address /*to_*/,
        uint256 /*amount_*/
    ) public virtual override(ERC20Base, IERC20) returns (bool) {
        revert("transfer is disabled");
    }

    /**
     * @dev approve is disabled
     */
    function approve(
        address /*spender_*/,
        uint256 /*amount_*/
    ) public virtual override(ERC20Base, IERC20) returns (bool) {
        revert("approve is disabled");
    }

    // /**

    /**
     * @inheritdoc IERC20
     *
     * @dev this function can be called by a CAK or an authorized smart contract (see mapping _contractsAllowed)
     *      if called by the CAK, then the transfer is done
     *      if called by an authorized smart contract, the transfer is done
     */
    function transferFrom(
        address from_,
        address to_,
        uint256 amount_
    ) public virtual override(ERC20Base, IERC20) returns (bool) {
        return _transferFrom(from_, to_, amount_);
    }

    /**
     * @dev increaseAllowance is disabled
     */
    function increaseAllowance(
        address /*spender_*/,
        uint256 /*addedValue_*/
    ) public virtual override(ERC20Base, IERC20Base) returns (bool) {
        revert("increaseAllowance is disabled");
    }

    /**
     * @dev decreaseAllowance is disabled
     */
    function decreaseAllowance(
        address /*spender_*/,
        uint256 /*subtractedValue_*/
    ) public virtual override(ERC20Base, IERC20Base) returns (bool) {
        revert("decreaseAllowance is disabled");
    }

    /**
     * @dev The aim of this function is to enable the CAK to mint some bond units
     */
    function mint(uint256 amount_) public {
        _mint(amount_);
    }

    function burn(uint256 amount_) public {
        _burn(_msgSender(), amount_);
    }

    /**
     * @notice Function to set the lock information.
     * @param _lockInfo The lock information.
     */
    function setLock(LockInfo memory _lockInfo) public {
        _setLock(_lockInfo);
    }

    /**
     * @notice Function to release the locked asset.
     * @param _from The sender address.
     * @param _to The receiver address.
     * @param _secret The secret of the standard release.
     * @param _paymentProof The proof of successful payment (e.g. hash of the pacs.002 positif response).
     */
    function release(
        address _from,
        address _to,
        bytes32 _secret,
        bytes32 _paymentProof
    ) public {
        _release(_from, _to, _secret, _paymentProof);
    }

    /**
     * @notice Function to force the release.
     * @param _from The sender address.
     * @param _to The receiver address.
     * @param _secretRelease The secret of the forced release.
     * @param _paymentProof The proof of successful payment (e.g. hash of the pacs.002 positif response).
     */
    function forceRelease(
        address _from,
        address _to,
        bytes32 _secretRelease,
        bytes32 _paymentProof
    ) public {
        _forceRelease(_from, _to, _secretRelease, _paymentProof);
    }

    /**
     * @notice Function to cancel the lock.
     * @param _from The sender address.
     * @param _to The receiver address.
     * @param _secretCancel The secret of the forced cancel.
     * @param _paymentProof The proof of failed payment (e.g. hash of the pacs.002 negative response).
     */
    function forceCancel(
        address _from,
        address _to,
        bytes32 _secretCancel,
        bytes32 _paymentProof
    ) public {
        forceCancel(_from, _to, _secretCancel, _paymentProof);
    }
}
