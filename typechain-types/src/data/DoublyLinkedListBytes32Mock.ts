/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface DoublyLinkedListBytes32MockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "contains"
      | "insertAfter"
      | "insertBefore"
      | "next"
      | "pop"
      | "prev"
      | "push"
      | "remove"
      | "replace"
      | "shift"
      | "unshift"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "contains", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "insertAfter",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "insertBefore",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "next", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "pop", values?: undefined): string;
  encodeFunctionData(functionFragment: "prev", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "push", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "remove", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "replace",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "shift", values?: undefined): string;
  encodeFunctionData(functionFragment: "unshift", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "insertAfter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insertBefore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "next", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "replace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shift", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unshift", data: BytesLike): Result;
}

export interface DoublyLinkedListBytes32Mock extends BaseContract {
  connect(runner?: ContractRunner | null): DoublyLinkedListBytes32Mock;
  waitForDeployment(): Promise<this>;

  interface: DoublyLinkedListBytes32MockInterface;

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

  contains: TypedContractMethod<[value: BytesLike], [boolean], "view">;

  insertAfter: TypedContractMethod<
    [prevValue: BytesLike, newValue: BytesLike],
    [boolean],
    "nonpayable"
  >;

  insertBefore: TypedContractMethod<
    [nextValue: BytesLike, newValue: BytesLike],
    [boolean],
    "nonpayable"
  >;

  next: TypedContractMethod<[value: BytesLike], [string], "view">;

  pop: TypedContractMethod<[], [string], "nonpayable">;

  prev: TypedContractMethod<[value: BytesLike], [string], "view">;

  push: TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;

  remove: TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;

  replace: TypedContractMethod<
    [oldValue: BytesLike, newValue: BytesLike],
    [boolean],
    "nonpayable"
  >;

  shift: TypedContractMethod<[], [string], "nonpayable">;

  unshift: TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contains"
  ): TypedContractMethod<[value: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "insertAfter"
  ): TypedContractMethod<
    [prevValue: BytesLike, newValue: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "insertBefore"
  ): TypedContractMethod<
    [nextValue: BytesLike, newValue: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "next"
  ): TypedContractMethod<[value: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "pop"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "prev"
  ): TypedContractMethod<[value: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "push"
  ): TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "remove"
  ): TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "replace"
  ): TypedContractMethod<
    [oldValue: BytesLike, newValue: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "shift"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "unshift"
  ): TypedContractMethod<[value: BytesLike], [boolean], "nonpayable">;

  filters: {};
}
