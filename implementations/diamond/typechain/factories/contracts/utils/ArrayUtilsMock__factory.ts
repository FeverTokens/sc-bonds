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
  ArrayUtilsMock,
  ArrayUtilsMockInterface,
} from "../../../contracts/utils/ArrayUtilsMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "max",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "array",
        type: "bytes32[]",
      },
    ],
    name: "max",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
    ],
    name: "max",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "array",
        type: "bytes32[]",
      },
    ],
    name: "min",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
    ],
    name: "min",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "min",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b506105518061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061006f575f3560e01c806386d6e5941161004d57806386d6e594146100bf578063abf91ea4146100ea578063d834e619146100fd575f80fd5b80631bfe664d146100735780633bf6de961461009957806377c5ca71146100ac575b5f80fd5b6100866100813660046103e0565b610110565b6040519081526020015b60405180910390f35b6100866100a73660046103e0565b610120565b6100866100ba3660046103e0565b61012a565b6100d26100cd366004610471565b610134565b6040516001600160a01b039091168152602001610090565b6100d26100f8366004610471565b61013e565b61008661010b3660046103e0565b610148565b5f61011a82610152565b92915050565b5f61011a826101ad565b5f61011a82610200565b5f61011a82610253565b5f61011a826102b8565b5f61011a82610324565b5f5f19815b83518110156101a6578184828151811061017357610173610507565b6020026020010151101561019e5783818151811061019357610193610507565b602002602001015191505b600101610157565b5092915050565b5f80805b83518110156101a657818482815181106101cd576101cd610507565b602002602001015111156101f8578381815181106101ed576101ed610507565b602002602001015191505b6001016101b1565b5f80805b83518110156101a6578184828151811061022057610220610507565b6020026020010151111561024b5783818151811061024057610240610507565b602002602001015191505b600101610204565b5f80805b83518110156101a657816001600160a01b031684828151811061027c5761027c610507565b60200260200101516001600160a01b031611156102b0578381815181106102a5576102a5610507565b602002602001015191505b600101610257565b5f6001600160a01b03815b83518110156101a657816001600160a01b03168482815181106102e8576102e8610507565b60200260200101516001600160a01b0316101561031c5783818151811061031157610311610507565b602002602001015191505b6001016102c3565b5f5f19815b83518110156101a6578184828151811061034557610345610507565b602002602001015110156103705783818151811061036557610365610507565b602002602001015191505b600101610329565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103b5576103b5610378565b604052919050565b5f67ffffffffffffffff8211156103d6576103d6610378565b5060051b60200190565b5f60208083850312156103f1575f80fd5b823567ffffffffffffffff811115610407575f80fd5b8301601f81018513610417575f80fd5b803561042a610425826103bd565b61038c565b81815260059190911b82018301908381019087831115610448575f80fd5b928401925b828410156104665783358252928401929084019061044d565b979650505050505050565b5f6020808385031215610482575f80fd5b823567ffffffffffffffff811115610498575f80fd5b8301601f810185136104a8575f80fd5b80356104b6610425826103bd565b81815260059190911b820183019083810190878311156104d4575f80fd5b928401925b828410156104665783356001600160a01b03811681146104f8575f8081fd5b825292840192908401906104d9565b634e487b7160e01b5f52603260045260245ffdfea264697066735822122002e38f2dfd247463f48ad6056d7bb0fb0661fc1dd74eff77eec3506a5419f7fe64736f6c63430008140033";

type ArrayUtilsMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArrayUtilsMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArrayUtilsMock__factory extends ContractFactory {
  constructor(...args: ArrayUtilsMockConstructorParams) {
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
      ArrayUtilsMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ArrayUtilsMock__factory {
    return super.connect(runner) as ArrayUtilsMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArrayUtilsMockInterface {
    return new Interface(_abi) as ArrayUtilsMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArrayUtilsMock {
    return new Contract(address, _abi, runner) as unknown as ArrayUtilsMock;
  }
}