/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { Context, ContextInterface } from "../../../src/metatx/Context";

const _abi = [
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
] as const;

export class Context__factory {
  static readonly abi = _abi;
  static createInterface(): ContextInterface {
    return new Interface(_abi) as ContextInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Context {
    return new Contract(address, _abi, runner) as unknown as Context;
  }
}
