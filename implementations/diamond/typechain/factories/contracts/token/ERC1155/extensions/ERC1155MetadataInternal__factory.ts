/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ERC1155MetadataInternal,
  ERC1155MetadataInternalInterface,
} from "../../../../../contracts/token/ERC1155/extensions/ERC1155MetadataInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "_uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ERC1155MetadataInternal__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1155MetadataInternalInterface {
    return new Interface(_abi) as ERC1155MetadataInternalInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC1155MetadataInternal {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ERC1155MetadataInternal;
  }
}
