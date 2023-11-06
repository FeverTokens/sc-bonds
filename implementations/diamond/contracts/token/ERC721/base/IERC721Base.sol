// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.20;

import { IERC721 } from "../IERC721.sol";
import { IERC721BaseInternal } from "./IERC721BaseInternal.sol";

/**
 * @title ERC721 base interface
 */
interface IERC721Base is IERC721BaseInternal, IERC721 {

}
