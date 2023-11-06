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
  MulticallMock,
  MulticallMockInterface,
} from "../../../contracts/utils/MulticallMock";

const _abi = [
  {
    inputs: [],
    name: "callRevertTest",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "callTest",
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
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b506103b18061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c806321615e9c146100435780633c67684514610057578063ac9650d814610061575b5f80fd5b604051600181526020015b60405180910390f35b61005f610081565b005b61007461006f3660046101fb565b6100e7565b60405161004e919061026a565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f7265766572740000000000000000000000000000000000000000000000000000604482015260640160405180910390fd5b60608167ffffffffffffffff811115610102576101026102fa565b60405190808252806020026020018201604052801561013557816020015b60608152602001906001900390816101205790505b5090505f5b828110156101f4575f80308686858181106101575761015761030e565b90506020028101906101699190610322565b60405161017792919061036c565b5f60405180830381855af49150503d805f81146101af576040519150601f19603f3d011682016040523d82523d5f602084013e6101b4565b606091505b509150915081156101e257808484815181106101d2576101d261030e565b60200260200101819052506101ea565b3d5f803e3d5ffd5b505060010161013a565b5092915050565b5f806020838503121561020c575f80fd5b823567ffffffffffffffff80821115610223575f80fd5b818501915085601f830112610236575f80fd5b813581811115610244575f80fd5b8660208260051b8501011115610258575f80fd5b60209290920196919550909350505050565b5f602080830181845280855180835260408601915060408160051b87010192508387015f805b838110156102ec57888603603f1901855282518051808852835b818110156102c5578281018a01518982018b015289016102aa565b508781018901849052601f01601f1916909601870195509386019391860191600101610290565b509398975050505050505050565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b5f808335601e19843603018112610337575f80fd5b83018035915067ffffffffffffffff821115610351575f80fd5b602001915036819003821315610365575f80fd5b9250929050565b818382375f910190815291905056fea264697066735822122030ff26e32029d5823cd7837221a18b3b2a3d626d0493764dd2664adc88c20b5164736f6c63430008140033";

type MulticallMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MulticallMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MulticallMock__factory extends ContractFactory {
  constructor(...args: MulticallMockConstructorParams) {
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
      MulticallMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MulticallMock__factory {
    return super.connect(runner) as MulticallMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallMockInterface {
    return new Interface(_abi) as MulticallMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MulticallMock {
    return new Contract(address, _abi, runner) as unknown as MulticallMock;
  }
}
