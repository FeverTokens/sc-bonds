// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.17;

import { IAccessControl } from "./IAccessControl.sol";
import { AccessControlInternal } from "./AccessControlInternal.sol";

/**
 * @title Role-based access control system
 * @dev derived from https://github.com/OpenZeppelin/openzeppelin-contracts (MIT license)
 */
abstract contract AccessControl is IAccessControl, AccessControlInternal {
    /**
     * @inheritdoc IAccessControl
     */
    function grantRole(
        bytes32 role,
        address account
    ) external virtual onlyRole(_getRoleAdmin(role)) {
        _grantRole(role, account);
    }

    /**
     * @inheritdoc IAccessControl
     */
    function hasRole(
        bytes32 role,
        address account
    ) external view virtual returns (bool) {
        return _hasRole(role, account);
    }

    /**
     * @inheritdoc IAccessControl
     */
    function getRoleAdmin(
        bytes32 role
    ) external view virtual returns (bytes32) {
        return _getRoleAdmin(role);
    }

    /**
     * @inheritdoc IAccessControl
     */
    function revokeRole(
        bytes32 role,
        address account
    ) external virtual onlyRole(_getRoleAdmin(role)) {
        _revokeRole(role, account);
    }

    /**
     * @inheritdoc IAccessControl
     */
    function renounceRole(bytes32 role) external virtual {
        _renounceRole(role);
    }

    /**
     * @inheritdoc IAccessControl
     */
    function getRoleMember(
        bytes32 role,
        uint256 index
    ) external view virtual returns (address) {
        return _getRoleMember(role, index);
    }

    /**
     * @inheritdoc IAccessControl
     */
    function getRoleMemberCount(
        bytes32 role
    ) external view virtual returns (uint256) {
        return _getRoleMemberCount(role);
    }
}
