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

export interface EnumerableSetBytes32MockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "add"
      | "at"
      | "contains"
      | "indexOf"
      | "length"
      | "remove"
      | "toArray"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "add", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "contains", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "indexOf", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(functionFragment: "remove", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "toArray", values?: undefined): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "indexOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toArray", data: BytesLike): Result;
}

export interface EnumerableSetBytes32Mock extends BaseContract {
  connect(runner?: ContractRunner | null): EnumerableSetBytes32Mock;
  waitForDeployment(): Promise<this>;

  interface: EnumerableSetBytes32MockInterface;

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

  add: TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;

  at: TypedContractMethod<[index: BigNumberish], [string], "view">;

  contains: TypedContractMethod<[value: BytesLike], [boolean], "view">;

  indexOf: TypedContractMethod<[value: BytesLike], [bigint], "view">;

  length: TypedContractMethod<[], [bigint], "view">;

  remove: TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;

  toArray: TypedContractMethod<[], [string[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "add"
  ): TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "at"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "contains"
  ): TypedContractMethod<[value: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "indexOf"
  ): TypedContractMethod<[value: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "length"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "remove"
  ): TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "toArray"
  ): TypedContractMethod<[], [string[]], "view">;

  filters: {};
}
