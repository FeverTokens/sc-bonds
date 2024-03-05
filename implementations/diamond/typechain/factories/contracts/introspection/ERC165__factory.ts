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
  ERC165,
  ERC165Interface,
} from "../../../contracts/introspection/ERC165";

const _abi = [
  {
    inputs: [],
    name: "ERC165Base__InvalidInterfaceId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b506101188061001d5f395ff3fe6080604052348015600e575f80fd5b50600436106026575f3560e01c806301ffc9a714602a575b5f80fd5b608a6035366004609e565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fff923f4a67695a9cdd5da4b8580a5a20edf2183c42aa111dd7fc15dc7bed2640602052604090205460ff1690565b604051901515815260200160405180910390f35b5f6020828403121560ad575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811460db575f80fd5b939250505056fea26469706673582212200b4820800ece5418b1b8494de624b0afb0a1a88a0d6ce8d99973e59d146187db64736f6c63430008140033";

type ERC165ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC165ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC165__factory extends ContractFactory {
  constructor(...args: ERC165ConstructorParams) {
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
      ERC165 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC165__factory {
    return super.connect(runner) as ERC165__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC165Interface {
    return new Interface(_abi) as ERC165Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC165 {
    return new Contract(address, _abi, runner) as unknown as ERC165;
  }
}