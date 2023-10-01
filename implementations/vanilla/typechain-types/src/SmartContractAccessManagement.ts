/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface SmartContractAccessManagementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_contractsAllowed"
      | "atReturningHash"
      | "disableContractFromWhitelist"
      | "enableContractToWhitelist"
      | "isCallerApprovedSmartContract"
      | "isContractAllowed"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DisableContract" | "EnableContract"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_contractsAllowed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "atReturningHash",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disableContractFromWhitelist",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enableContractToWhitelist",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isCallerApprovedSmartContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isContractAllowed",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "_contractsAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "atReturningHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableContractFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableContractToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCallerApprovedSmartContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isContractAllowed",
    data: BytesLike
  ): Result;
}

export namespace DisableContractEvent {
  export type InputTuple = [contractHash: BytesLike];
  export type OutputTuple = [contractHash: string];
  export interface OutputObject {
    contractHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnableContractEvent {
  export type InputTuple = [contractHash: BytesLike];
  export type OutputTuple = [contractHash: string];
  export interface OutputObject {
    contractHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SmartContractAccessManagement extends BaseContract {
  connect(runner?: ContractRunner | null): SmartContractAccessManagement;
  waitForDeployment(): Promise<this>;

  interface: SmartContractAccessManagementInterface;

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

  _contractsAllowed: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  atReturningHash: TypedContractMethod<[addr_: AddressLike], [string], "view">;

  disableContractFromWhitelist: TypedContractMethod<
    [contractHash_: BytesLike],
    [void],
    "nonpayable"
  >;

  enableContractToWhitelist: TypedContractMethod<
    [contractHash_: BytesLike],
    [void],
    "nonpayable"
  >;

  isCallerApprovedSmartContract: TypedContractMethod<[], [boolean], "view">;

  isContractAllowed: TypedContractMethod<
    [contractAddress_: AddressLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_contractsAllowed"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "atReturningHash"
  ): TypedContractMethod<[addr_: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "disableContractFromWhitelist"
  ): TypedContractMethod<[contractHash_: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enableContractToWhitelist"
  ): TypedContractMethod<[contractHash_: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isCallerApprovedSmartContract"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isContractAllowed"
  ): TypedContractMethod<[contractAddress_: AddressLike], [boolean], "view">;

  getEvent(
    key: "DisableContract"
  ): TypedContractEvent<
    DisableContractEvent.InputTuple,
    DisableContractEvent.OutputTuple,
    DisableContractEvent.OutputObject
  >;
  getEvent(
    key: "EnableContract"
  ): TypedContractEvent<
    EnableContractEvent.InputTuple,
    EnableContractEvent.OutputTuple,
    EnableContractEvent.OutputObject
  >;

  filters: {
    "DisableContract(bytes32)": TypedContractEvent<
      DisableContractEvent.InputTuple,
      DisableContractEvent.OutputTuple,
      DisableContractEvent.OutputObject
    >;
    DisableContract: TypedContractEvent<
      DisableContractEvent.InputTuple,
      DisableContractEvent.OutputTuple,
      DisableContractEvent.OutputObject
    >;

    "EnableContract(bytes32)": TypedContractEvent<
      EnableContractEvent.InputTuple,
      EnableContractEvent.OutputTuple,
      EnableContractEvent.OutputObject
    >;
    EnableContract: TypedContractEvent<
      EnableContractEvent.InputTuple,
      EnableContractEvent.OutputTuple,
      EnableContractEvent.OutputObject
    >;
  };
}