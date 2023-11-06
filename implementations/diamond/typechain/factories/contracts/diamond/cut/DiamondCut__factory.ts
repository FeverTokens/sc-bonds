/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  DiamondCut,
  DiamondCutInterface,
} from "../../../../contracts/diamond/cut/DiamondCut";

const _abi = [
  {
    inputs: [],
    name: "DiamondCut__InvalidInitializationParameters",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondCut__RemoveTargetNotZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondCut__ReplaceTargetIsIdentical",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondCut__SelectorAlreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondCut__SelectorIsImmutable",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondCut__SelectorNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondCut__SelectorNotSpecified",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondCut__TargetHasNoCode",
    type: "error",
  },
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
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "enum IDiamondCutInternal.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCutInternal.FacetCut[]",
        name: "facetCuts",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "enum IDiamondCutInternal.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCutInternal.FacetCut[]",
        name: "facetCuts",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class DiamondCut__factory {
  static readonly abi = _abi;
  static createInterface(): DiamondCutInterface {
    return new Interface(_abi) as DiamondCutInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DiamondCut {
    return new Contract(address, _abi, runner) as unknown as DiamondCut;
  }
}
