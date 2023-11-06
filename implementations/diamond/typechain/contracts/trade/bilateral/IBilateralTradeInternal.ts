/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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

export interface IBilateralTradeInternalInterface extends Interface {
  getEvent(nameOrSignatureOrTopic: "NotifyTrade"): EventFragment;
}

export namespace NotifyTradeEvent {
  export type InputTuple = [
    seller: AddressLike,
    buyer: AddressLike,
    status: BigNumberish,
    quantity: BigNumberish
  ];
  export type OutputTuple = [
    seller: string,
    buyer: string,
    status: bigint,
    quantity: bigint
  ];
  export interface OutputObject {
    seller: string;
    buyer: string;
    status: bigint;
    quantity: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IBilateralTradeInternal extends BaseContract {
  connect(runner?: ContractRunner | null): IBilateralTradeInternal;
  waitForDeployment(): Promise<this>;

  interface: IBilateralTradeInternalInterface;

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
    key: "NotifyTrade"
  ): TypedContractEvent<
    NotifyTradeEvent.InputTuple,
    NotifyTradeEvent.OutputTuple,
    NotifyTradeEvent.OutputObject
  >;

  filters: {
    "NotifyTrade(address,address,uint8,uint256)": TypedContractEvent<
      NotifyTradeEvent.InputTuple,
      NotifyTradeEvent.OutputTuple,
      NotifyTradeEvent.OutputObject
    >;
    NotifyTrade: TypedContractEvent<
      NotifyTradeEvent.InputTuple,
      NotifyTradeEvent.OutputTuple,
      NotifyTradeEvent.OutputObject
    >;
  };
}
