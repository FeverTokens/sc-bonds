/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  FunctionFragment,
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
} from "../../../common";

export interface IInvestorManagementInternalInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "DisableInvestor"
      | "EnableInvestor"
      | "WalletAddedToWhitelist"
      | "WalletDeletedFromWhitelist"
  ): EventFragment;
}

export namespace DisableInvestorEvent {
  export type InputTuple = [investor: AddressLike];
  export type OutputTuple = [investor: string];
  export interface OutputObject {
    investor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnableInvestorEvent {
  export type InputTuple = [investor: AddressLike];
  export type OutputTuple = [investor: string];
  export interface OutputObject {
    investor: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WalletAddedToWhitelistEvent {
  export type InputTuple = [toBeAdded: AddressLike];
  export type OutputTuple = [toBeAdded: string];
  export interface OutputObject {
    toBeAdded: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WalletDeletedFromWhitelistEvent {
  export type InputTuple = [toBeDeleted: AddressLike];
  export type OutputTuple = [toBeDeleted: string];
  export interface OutputObject {
    toBeDeleted: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IInvestorManagementInternal extends BaseContract {
  connect(runner?: ContractRunner | null): IInvestorManagementInternal;
  waitForDeployment(): Promise<this>;

  interface: IInvestorManagementInternalInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "DisableInvestor"
  ): TypedContractEvent<
    DisableInvestorEvent.InputTuple,
    DisableInvestorEvent.OutputTuple,
    DisableInvestorEvent.OutputObject
  >;
  getEvent(
    key: "EnableInvestor"
  ): TypedContractEvent<
    EnableInvestorEvent.InputTuple,
    EnableInvestorEvent.OutputTuple,
    EnableInvestorEvent.OutputObject
  >;
  getEvent(
    key: "WalletAddedToWhitelist"
  ): TypedContractEvent<
    WalletAddedToWhitelistEvent.InputTuple,
    WalletAddedToWhitelistEvent.OutputTuple,
    WalletAddedToWhitelistEvent.OutputObject
  >;
  getEvent(
    key: "WalletDeletedFromWhitelist"
  ): TypedContractEvent<
    WalletDeletedFromWhitelistEvent.InputTuple,
    WalletDeletedFromWhitelistEvent.OutputTuple,
    WalletDeletedFromWhitelistEvent.OutputObject
  >;

  filters: {
    "DisableInvestor(address)": TypedContractEvent<
      DisableInvestorEvent.InputTuple,
      DisableInvestorEvent.OutputTuple,
      DisableInvestorEvent.OutputObject
    >;
    DisableInvestor: TypedContractEvent<
      DisableInvestorEvent.InputTuple,
      DisableInvestorEvent.OutputTuple,
      DisableInvestorEvent.OutputObject
    >;

    "EnableInvestor(address)": TypedContractEvent<
      EnableInvestorEvent.InputTuple,
      EnableInvestorEvent.OutputTuple,
      EnableInvestorEvent.OutputObject
    >;
    EnableInvestor: TypedContractEvent<
      EnableInvestorEvent.InputTuple,
      EnableInvestorEvent.OutputTuple,
      EnableInvestorEvent.OutputObject
    >;

    "WalletAddedToWhitelist(address)": TypedContractEvent<
      WalletAddedToWhitelistEvent.InputTuple,
      WalletAddedToWhitelistEvent.OutputTuple,
      WalletAddedToWhitelistEvent.OutputObject
    >;
    WalletAddedToWhitelist: TypedContractEvent<
      WalletAddedToWhitelistEvent.InputTuple,
      WalletAddedToWhitelistEvent.OutputTuple,
      WalletAddedToWhitelistEvent.OutputObject
    >;

    "WalletDeletedFromWhitelist(address)": TypedContractEvent<
      WalletDeletedFromWhitelistEvent.InputTuple,
      WalletDeletedFromWhitelistEvent.OutputTuple,
      WalletDeletedFromWhitelistEvent.OutputObject
    >;
    WalletDeletedFromWhitelist: TypedContractEvent<
      WalletDeletedFromWhitelistEvent.InputTuple,
      WalletDeletedFromWhitelistEvent.OutputTuple,
      WalletDeletedFromWhitelistEvent.OutputObject
    >;
  };
}