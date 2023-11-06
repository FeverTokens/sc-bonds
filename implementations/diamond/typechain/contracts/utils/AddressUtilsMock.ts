/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface AddressUtilsMockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "functionCall(address,bytes,string)"
      | "functionCall(address,bytes)"
      | "functionCallWithValue(address,bytes,uint256)"
      | "functionCallWithValue(address,bytes,uint256,string)"
      | "isContract"
      | "sendValue"
      | "toString"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "functionCall(address,bytes,string)",
    values: [AddressLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "functionCall(address,bytes)",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "functionCallWithValue(address,bytes,uint256)",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "functionCallWithValue(address,bytes,uint256,string)",
    values: [AddressLike, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendValue",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toString",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "functionCall(address,bytes,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "functionCall(address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "functionCallWithValue(address,bytes,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "functionCallWithValue(address,bytes,uint256,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isContract", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toString", data: BytesLike): Result;
}

export interface AddressUtilsMock extends BaseContract {
  connect(runner?: ContractRunner | null): AddressUtilsMock;
  waitForDeployment(): Promise<this>;

  interface: AddressUtilsMockInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "functionCall(address,bytes,string)": TypedContractMethod<
    [target: AddressLike, data: BytesLike, error: string],
    [string],
    "nonpayable"
  >;

  "functionCall(address,bytes)": TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "nonpayable"
  >;

  "functionCallWithValue(address,bytes,uint256)": TypedContractMethod<
    [target: AddressLike, data: BytesLike, value: BigNumberish],
    [string],
    "nonpayable"
  >;

  "functionCallWithValue(address,bytes,uint256,string)": TypedContractMethod<
    [target: AddressLike, data: BytesLike, value: BigNumberish, error: string],
    [string],
    "nonpayable"
  >;

  isContract: TypedContractMethod<[account: AddressLike], [boolean], "view">;

  sendValue: TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  toString: TypedContractMethod<[account: AddressLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "functionCall(address,bytes,string)"
  ): TypedContractMethod<
    [target: AddressLike, data: BytesLike, error: string],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "functionCall(address,bytes)"
  ): TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "functionCallWithValue(address,bytes,uint256)"
  ): TypedContractMethod<
    [target: AddressLike, data: BytesLike, value: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "functionCallWithValue(address,bytes,uint256,string)"
  ): TypedContractMethod<
    [target: AddressLike, data: BytesLike, value: BigNumberish, error: string],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isContract"
  ): TypedContractMethod<[account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "sendValue"
  ): TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "toString"
  ): TypedContractMethod<[account: AddressLike], [string], "view">;

  filters: {};
}
