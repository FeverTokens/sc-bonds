/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  DiamondFallback,
  DiamondFallbackInterface,
} from "../../../../contracts/diamond/fallback/DiamondFallback";

const _abi = [
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Proxy__ImplementationIsNotContract",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getFallbackAddress",
    outputs: [
      {
        internalType: "address",
        name: "fallbackAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fallbackAddress",
        type: "address",
      },
    ],
    name: "setFallbackAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class DiamondFallback__factory {
  static readonly abi = _abi;
  static createInterface(): DiamondFallbackInterface {
    return new Interface(_abi) as DiamondFallbackInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DiamondFallback {
    return new Contract(address, _abi, runner) as unknown as DiamondFallback;
  }
}