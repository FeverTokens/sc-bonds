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
  MerkleProofMock,
  MerkleProofMockInterface,
} from "../../../src/cryptography/MerkleProofMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576101c9908161001c8239f35b600080fdfe6080600436101561000f57600080fd5b6000803560e01c635a9a49c71461002557600080fd5b3461015e57606036600319011261015e576004359067ffffffffffffffff80831161015a573660238401121561015a578260040135908082116101465760059382851b92603f8401601f191687019283118784101761013257604092835286526020926024848801918301019136831161012e576024859101915b83831061011e57505050506044355b85518410156101135783851b8601830151600191908082116100f057835190858201928352848201528381526100e481610161565b519020935b01926100af565b908351908582019283528482015283815261010a81610161565b519020936100e9565b905190602435148152f35b82358152918101918591016100a0565b8580fd5b634e487b7160e01b85526041600452602485fd5b634e487b7160e01b83526041600452602483fd5b5080fd5b80fd5b6060810190811067ffffffffffffffff82111761017d57604052565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ce06d3fa508926a679af7ad3d0dd97e2aeedcf7bdb0411c0bd4921bd560ce8f264736f6c63430008140033";

type MerkleProofMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleProofMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleProofMock__factory extends ContractFactory {
  constructor(...args: MerkleProofMockConstructorParams) {
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
      MerkleProofMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MerkleProofMock__factory {
    return super.connect(runner) as MerkleProofMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleProofMockInterface {
    return new Interface(_abi) as MerkleProofMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MerkleProofMock {
    return new Contract(address, _abi, runner) as unknown as MerkleProofMock;
  }
}
