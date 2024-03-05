/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  EnumerableMap,
  EnumerableMapInterface,
} from "../../../contracts/data/EnumerableMap";

const _abi = [
  {
    inputs: [],
    name: "EnumerableMap__IndexOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "EnumerableMap__NonExistentKey",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea264697066735822122033e2284f0c4234b164a6cfec3ba4f78a0aea55a6da4b701bbf529c06eba295d464736f6c63430008140033";

type EnumerableMapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableMapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableMap__factory extends ContractFactory {
  constructor(...args: EnumerableMapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      EnumerableMap & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EnumerableMap__factory {
    return super.connect(runner) as EnumerableMap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableMapInterface {
    return new Interface(_abi) as EnumerableMapInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EnumerableMap {
    return new Contract(address, _abi, runner) as unknown as EnumerableMap;
  }
}