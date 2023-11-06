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
} from "../../../common";

export declare namespace ITradeInternal {
  export type TradeDetailStruct = {
    quantity: BigNumberish;
    buyer: AddressLike;
    tradeDate: BigNumberish;
    valueDate: BigNumberish;
    price: BigNumberish;
  };

  export type TradeDetailStructOutput = [
    quantity: bigint,
    buyer: string,
    tradeDate: bigint,
    valueDate: bigint,
    price: bigint
  ] & {
    quantity: bigint;
    buyer: string;
    tradeDate: bigint;
    valueDate: bigint;
    price: bigint;
  };
}

export interface BilateralTradeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "approve"
      | "buyerAccount"
      | "executeTransfer"
      | "getDetails"
      | "paymentID"
      | "register"
      | "reject"
      | "sellerAccount"
      | "setDetails"
      | "status"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "NotifyTrade"
  ): EventFragment;

  encodeFunctionData(functionFragment: "approve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyerAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDetails",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paymentID", values?: undefined): string;
  encodeFunctionData(functionFragment: "register", values?: undefined): string;
  encodeFunctionData(functionFragment: "reject", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sellerAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDetails",
    values: [ITradeInternal.TradeDetailStruct]
  ): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyerAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDetails", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paymentID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reject", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellerAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDetails", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export interface BilateralTrade extends BaseContract {
  connect(runner?: ContractRunner | null): BilateralTrade;
  waitForDeployment(): Promise<this>;

  interface: BilateralTradeInterface;

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

  approve: TypedContractMethod<[], [bigint], "nonpayable">;

  buyerAccount: TypedContractMethod<[], [string], "view">;

  executeTransfer: TypedContractMethod<[], [boolean], "nonpayable">;

  getDetails: TypedContractMethod<
    [],
    [ITradeInternal.TradeDetailStructOutput],
    "view"
  >;

  paymentID: TypedContractMethod<[], [string], "view">;

  register: TypedContractMethod<[], [string], "view">;

  reject: TypedContractMethod<[], [void], "nonpayable">;

  sellerAccount: TypedContractMethod<[], [string], "view">;

  setDetails: TypedContractMethod<
    [_details: ITradeInternal.TradeDetailStruct],
    [void],
    "nonpayable"
  >;

  status: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "buyerAccount"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executeTransfer"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "getDetails"
  ): TypedContractMethod<[], [ITradeInternal.TradeDetailStructOutput], "view">;
  getFunction(
    nameOrSignature: "paymentID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "reject"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sellerAccount"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setDetails"
  ): TypedContractMethod<
    [_details: ITradeInternal.TradeDetailStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "status"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "NotifyTrade"
  ): TypedContractEvent<
    NotifyTradeEvent.InputTuple,
    NotifyTradeEvent.OutputTuple,
    NotifyTradeEvent.OutputObject
  >;

  filters: {
    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

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
