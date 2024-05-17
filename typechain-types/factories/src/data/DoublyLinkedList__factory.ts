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
  DoublyLinkedList,
  DoublyLinkedListInterface,
} from "../../../src/data/DoublyLinkedList";

const _abi = [
  {
    inputs: [],
    name: "DoublyLinkedList__InvalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "DoublyLinkedList__NonExistentEntry",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220bb518d00edbb8321d765a0339d9885c501ed7fec15b59bc2f9ce0de09de705f964736f6c63430008140033";

type DoublyLinkedListConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoublyLinkedListConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoublyLinkedList__factory extends ContractFactory {
  constructor(...args: DoublyLinkedListConstructorParams) {
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
      DoublyLinkedList & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DoublyLinkedList__factory {
    return super.connect(runner) as DoublyLinkedList__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoublyLinkedListInterface {
    return new Interface(_abi) as DoublyLinkedListInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DoublyLinkedList {
    return new Contract(address, _abi, runner) as unknown as DoublyLinkedList;
  }
}