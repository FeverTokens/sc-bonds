/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC721BaseInternal,
  IERC721BaseInternalInterface,
} from "../../../../../contracts/token/ERC721/base/IERC721BaseInternal";

const _abi = [
  {
    inputs: [],
    name: "ERC721Base__BalanceQueryZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__ERC721ReceiverNotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__InvalidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__NonExistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__NotTokenOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__SelfApproval",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__TokenAlreadyMinted",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721Base__TransferToZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
] as const;

export class IERC721BaseInternal__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721BaseInternalInterface {
    return new Interface(_abi) as IERC721BaseInternalInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC721BaseInternal {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IERC721BaseInternal;
  }
}
