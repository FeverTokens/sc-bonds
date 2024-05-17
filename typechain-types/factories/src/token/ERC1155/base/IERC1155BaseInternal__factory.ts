/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC1155BaseInternal,
  IERC1155BaseInternalInterface,
} from "../../../../../src/token/ERC1155/base/IERC1155BaseInternal";

const _abi = [
  {
    inputs: [],
    name: "ERC1155Base__ArrayLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__BalanceQueryZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__BurnExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__BurnFromZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__ERC1155ReceiverNotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__ERC1155ReceiverRejected",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__SelfApproval",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__TransferExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155Base__TransferToZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
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
        name: "operator",
        type: "address",
      },
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
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
] as const;

export class IERC1155BaseInternal__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155BaseInternalInterface {
    return new Interface(_abi) as IERC1155BaseInternalInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC1155BaseInternal {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IERC1155BaseInternal;
  }
}