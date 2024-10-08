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

export declare namespace ITrade {
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

export interface IPrimaryIssuanceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "account"
      | "buyerAccount"
      | "getDetails"
      | "offerPrice"
      | "paymentID"
      | "register"
      | "reject"
      | "sellerAccount"
      | "status"
      | "validate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NotifyTrade" | "PrimaryIssuanceCreated"
  ): EventFragment;

  encodeFunctionData(functionFragment: "account", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyerAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paymentID", values?: undefined): string;
  encodeFunctionData(functionFragment: "register", values?: undefined): string;
  encodeFunctionData(functionFragment: "reject", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sellerAccount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;
  encodeFunctionData(functionFragment: "validate", values?: undefined): string;

  decodeFunctionResult(functionFragment: "account", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyerAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDetails", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "offerPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paymentID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reject", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellerAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
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

export namespace PrimaryIssuanceCreatedEvent {
  export type InputTuple = [contractAddress: AddressLike];
  export type OutputTuple = [contractAddress: string];
  export interface OutputObject {
    contractAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPrimaryIssuance extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimaryIssuance;
  waitForDeployment(): Promise<this>;

  interface: IPrimaryIssuanceInterface;

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

  account: TypedContractMethod<[], [string], "view">;

  buyerAccount: TypedContractMethod<[], [string], "view">;

  getDetails: TypedContractMethod<[], [ITrade.TradeDetailStructOutput], "view">;

  offerPrice: TypedContractMethod<[], [bigint], "view">;

  paymentID: TypedContractMethod<[], [string], "view">;

  register: TypedContractMethod<[], [string], "view">;

  reject: TypedContractMethod<[], [void], "nonpayable">;

  sellerAccount: TypedContractMethod<[], [string], "view">;

  status: TypedContractMethod<[], [bigint], "view">;

  validate: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "account"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buyerAccount"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getDetails"
  ): TypedContractMethod<[], [ITrade.TradeDetailStructOutput], "view">;
  getFunction(
    nameOrSignature: "offerPrice"
  ): TypedContractMethod<[], [bigint], "view">;
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
    nameOrSignature: "status"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validate"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "NotifyTrade"
  ): TypedContractEvent<
    NotifyTradeEvent.InputTuple,
    NotifyTradeEvent.OutputTuple,
    NotifyTradeEvent.OutputObject
  >;
  getEvent(
    key: "PrimaryIssuanceCreated"
  ): TypedContractEvent<
    PrimaryIssuanceCreatedEvent.InputTuple,
    PrimaryIssuanceCreatedEvent.OutputTuple,
    PrimaryIssuanceCreatedEvent.OutputObject
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

    "PrimaryIssuanceCreated(address)": TypedContractEvent<
      PrimaryIssuanceCreatedEvent.InputTuple,
      PrimaryIssuanceCreatedEvent.OutputTuple,
      PrimaryIssuanceCreatedEvent.OutputObject
    >;
    PrimaryIssuanceCreated: TypedContractEvent<
      PrimaryIssuanceCreatedEvent.InputTuple,
      PrimaryIssuanceCreatedEvent.OutputTuple,
      PrimaryIssuanceCreatedEvent.OutputObject
    >;
  };
}
