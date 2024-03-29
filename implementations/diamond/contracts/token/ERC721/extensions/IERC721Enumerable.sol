// SPDX-License-Identifier: MIT
// FeverTokens Contracts v1.0.0

pragma solidity ^0.8.17;

import { IERC721EnumerableInternal } from "./IERC721EnumerableInternal.sol";

interface IERC721Enumerable is IERC721EnumerableInternal {
    /**
     * @notice get total token supply
     * @return total supply
     */
    function totalSupply() external view returns (uint256);

    /**
     * @notice get token of given owner at given internal storage index
     * @param owner token holder to query
     * @param index position in owner's token list to query
     * @return tokenId id of retrieved token
     */
    function tokenOfOwnerByIndex(
        address owner,
        uint256 index
    ) external view returns (uint256 tokenId);

    /**
     * @notice get token at given internal storage index
     * @param index position in global token list to query
     * @return tokenId id of retrieved token
     */
    function tokenByIndex(
        uint256 index
    ) external view returns (uint256 tokenId);
}
