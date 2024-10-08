// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.17;

import { IPausable } from "./IPausable.sol";
import { PausableInternal } from "./PausableInternal.sol";

/**
 * @title Pausable security control module.
 */
abstract contract Pausable is IPausable, PausableInternal {
    /// @inheritdoc IPausable
    function paused() external view virtual returns (bool status) {
        status = _paused();
    }
}
