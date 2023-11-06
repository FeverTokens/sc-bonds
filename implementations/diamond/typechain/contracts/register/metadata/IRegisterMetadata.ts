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

export declare namespace IRegisterMetadataInternal {
  export type BondDataStruct = {
    name: string;
    isin: string;
    expectedSupply: BigNumberish;
    currency: BytesLike;
    unitValue: BigNumberish;
    couponRate: BigNumberish;
    creationDate: BigNumberish;
    issuanceDate: BigNumberish;
    maturityDate: BigNumberish;
    couponDates: BigNumberish[];
    cutOffTime: BigNumberish;
  };

  export type BondDataStructOutput = [
    name: string,
    isin: string,
    expectedSupply: bigint,
    currency: string,
    unitValue: bigint,
    couponRate: bigint,
    creationDate: bigint,
    issuanceDate: bigint,
    maturityDate: bigint,
    couponDates: bigint[],
    cutOffTime: bigint
  ] & {
    name: string;
    isin: string;
    expectedSupply: bigint;
    currency: string;
    unitValue: bigint;
    couponRate: bigint;
    creationDate: bigint;
    issuanceDate: bigint;
    maturityDate: bigint;
    couponDates: bigint[];
    cutOffTime: bigint;
  };
}

export interface IRegisterMetadataInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCouponDate"
      | "checkIfCouponDateExists"
      | "checkIfMaturityDateExists"
      | "delCouponDate"
      | "disableInvestorFromWhitelist"
      | "enableInvestorToWhitelist"
      | "getAllInvestors"
      | "getBondCouponRate"
      | "getBondData"
      | "getBondUnitValue"
      | "getCreationDate"
      | "getInvestorListAtCoupon"
      | "getIssuanceDate"
      | "investorCustodian"
      | "investorsAllowed"
      | "makeReady"
      | "primaryIssuanceAccount"
      | "publicMessage"
      | "returnBalanceToPrimaryIssuanceAccount"
      | "revertReady"
      | "setBondData"
      | "setCreationDate"
      | "setCurrency"
      | "setCurrentCouponDate"
      | "setExpectedSupply"
      | "setIsinSymbol"
      | "setIssuanceDate"
      | "status"
      | "toggleFrozen"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DisableInvestor"
      | "EnableInvestor"
      | "NewBondDrafted"
      | "PublicMessage"
      | "RegisterStatusChanged"
      | "WalletAddedToWhitelist"
      | "WalletDeletedFromWhitelist"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addCouponDate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkIfCouponDateExists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkIfMaturityDateExists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "delCouponDate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disableInvestorFromWhitelist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enableInvestorToWhitelist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllInvestors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBondCouponRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBondData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBondUnitValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInvestorListAtCoupon",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuanceDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investorCustodian",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "investorsAllowed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "makeReady", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "primaryIssuanceAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicMessage",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnBalanceToPrimaryIssuanceAccount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revertReady",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBondData",
    values: [
      string,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreationDate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrency",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentCouponDate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setExpectedSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsinSymbol",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIssuanceDate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "toggleFrozen",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addCouponDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkIfCouponDateExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkIfMaturityDateExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delCouponDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableInvestorFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableInvestorToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllInvestors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBondCouponRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBondData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBondUnitValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvestorListAtCoupon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuanceDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investorCustodian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investorsAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeReady", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "primaryIssuanceAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnBalanceToPrimaryIssuanceAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBondData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreationDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentCouponDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExpectedSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsinSymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIssuanceDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toggleFrozen",
    data: BytesLike
  ): Result;
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

export namespace NewBondDraftedEvent {
  export type InputTuple = [creator: AddressLike, name: string, isin: string];
  export type OutputTuple = [creator: string, name: string, isin: string];
  export interface OutputObject {
    creator: string;
    name: string;
    isin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicMessageEvent {
  export type InputTuple = [
    sender: AddressLike,
    target: AddressLike,
    message: string
  ];
  export type OutputTuple = [sender: string, target: string, message: string];
  export interface OutputObject {
    sender: string;
    target: string;
    message: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegisterStatusChangedEvent {
  export type InputTuple = [
    emiter: AddressLike,
    name: string,
    isin: string,
    status: BigNumberish
  ];
  export type OutputTuple = [
    emiter: string,
    name: string,
    isin: string,
    status: bigint
  ];
  export interface OutputObject {
    emiter: string;
    name: string;
    isin: string;
    status: bigint;
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

export interface IRegisterMetadata extends BaseContract {
  connect(runner?: ContractRunner | null): IRegisterMetadata;
  waitForDeployment(): Promise<this>;

  interface: IRegisterMetadataInterface;

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

  addCouponDate: TypedContractMethod<
    [date: BigNumberish],
    [void],
    "nonpayable"
  >;

  checkIfCouponDateExists: TypedContractMethod<
    [_couponDate: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  checkIfMaturityDateExists: TypedContractMethod<
    [_maturityDate: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  delCouponDate: TypedContractMethod<
    [date: BigNumberish],
    [void],
    "nonpayable"
  >;

  disableInvestorFromWhitelist: TypedContractMethod<
    [investor: AddressLike],
    [void],
    "nonpayable"
  >;

  enableInvestorToWhitelist: TypedContractMethod<
    [investor: AddressLike],
    [void],
    "nonpayable"
  >;

  getAllInvestors: TypedContractMethod<[], [string[]], "view">;

  getBondCouponRate: TypedContractMethod<[], [bigint], "view">;

  getBondData: TypedContractMethod<
    [],
    [IRegisterMetadataInternal.BondDataStructOutput],
    "view"
  >;

  getBondUnitValue: TypedContractMethod<[], [bigint], "view">;

  getCreationDate: TypedContractMethod<[], [bigint], "view">;

  getInvestorListAtCoupon: TypedContractMethod<
    [CouponDate: BigNumberish],
    [string[]],
    "nonpayable"
  >;

  getIssuanceDate: TypedContractMethod<[], [bigint], "view">;

  investorCustodian: TypedContractMethod<
    [investor: AddressLike],
    [string],
    "view"
  >;

  investorsAllowed: TypedContractMethod<
    [investor: AddressLike],
    [boolean],
    "view"
  >;

  makeReady: TypedContractMethod<[], [void], "nonpayable">;

  primaryIssuanceAccount: TypedContractMethod<[], [string], "view">;

  publicMessage: TypedContractMethod<
    [to: AddressLike, message: string],
    [void],
    "nonpayable"
  >;

  returnBalanceToPrimaryIssuanceAccount: TypedContractMethod<
    [investor: AddressLike],
    [boolean],
    "nonpayable"
  >;

  revertReady: TypedContractMethod<[], [void], "nonpayable">;

  setBondData: TypedContractMethod<
    [
      name_: string,
      expectedSupply_: BigNumberish,
      currency_: BytesLike,
      unitVal_: BigNumberish,
      couponRate_: BigNumberish,
      issuanceDate_: BigNumberish,
      maturityDate_: BigNumberish,
      cutOffTime_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setCreationDate: TypedContractMethod<
    [creationDate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCurrency: TypedContractMethod<[currency: BytesLike], [void], "nonpayable">;

  setCurrentCouponDate: TypedContractMethod<
    [couponDate_: BigNumberish, recordDatetime_: BigNumberish],
    [void],
    "nonpayable"
  >;

  setExpectedSupply: TypedContractMethod<
    [expectedSupply: BigNumberish],
    [void],
    "nonpayable"
  >;

  setIsinSymbol: TypedContractMethod<
    [isinSymbol: string],
    [void],
    "nonpayable"
  >;

  setIssuanceDate: TypedContractMethod<
    [issuanceDate: BigNumberish],
    [void],
    "nonpayable"
  >;

  status: TypedContractMethod<[], [bigint], "view">;

  toggleFrozen: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCouponDate"
  ): TypedContractMethod<[date: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkIfCouponDateExists"
  ): TypedContractMethod<[_couponDate: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "checkIfMaturityDateExists"
  ): TypedContractMethod<
    [_maturityDate: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "delCouponDate"
  ): TypedContractMethod<[date: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "disableInvestorFromWhitelist"
  ): TypedContractMethod<[investor: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enableInvestorToWhitelist"
  ): TypedContractMethod<[investor: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllInvestors"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getBondCouponRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBondData"
  ): TypedContractMethod<
    [],
    [IRegisterMetadataInternal.BondDataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBondUnitValue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCreationDate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInvestorListAtCoupon"
  ): TypedContractMethod<[CouponDate: BigNumberish], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "getIssuanceDate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "investorCustodian"
  ): TypedContractMethod<[investor: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "investorsAllowed"
  ): TypedContractMethod<[investor: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "makeReady"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "primaryIssuanceAccount"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "publicMessage"
  ): TypedContractMethod<
    [to: AddressLike, message: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "returnBalanceToPrimaryIssuanceAccount"
  ): TypedContractMethod<[investor: AddressLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "revertReady"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBondData"
  ): TypedContractMethod<
    [
      name_: string,
      expectedSupply_: BigNumberish,
      currency_: BytesLike,
      unitVal_: BigNumberish,
      couponRate_: BigNumberish,
      issuanceDate_: BigNumberish,
      maturityDate_: BigNumberish,
      cutOffTime_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCreationDate"
  ): TypedContractMethod<[creationDate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCurrency"
  ): TypedContractMethod<[currency: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCurrentCouponDate"
  ): TypedContractMethod<
    [couponDate_: BigNumberish, recordDatetime_: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setExpectedSupply"
  ): TypedContractMethod<[expectedSupply: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIsinSymbol"
  ): TypedContractMethod<[isinSymbol: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setIssuanceDate"
  ): TypedContractMethod<[issuanceDate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "status"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "toggleFrozen"
  ): TypedContractMethod<[], [void], "nonpayable">;

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
    key: "NewBondDrafted"
  ): TypedContractEvent<
    NewBondDraftedEvent.InputTuple,
    NewBondDraftedEvent.OutputTuple,
    NewBondDraftedEvent.OutputObject
  >;
  getEvent(
    key: "PublicMessage"
  ): TypedContractEvent<
    PublicMessageEvent.InputTuple,
    PublicMessageEvent.OutputTuple,
    PublicMessageEvent.OutputObject
  >;
  getEvent(
    key: "RegisterStatusChanged"
  ): TypedContractEvent<
    RegisterStatusChangedEvent.InputTuple,
    RegisterStatusChangedEvent.OutputTuple,
    RegisterStatusChangedEvent.OutputObject
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

    "NewBondDrafted(address,string,string)": TypedContractEvent<
      NewBondDraftedEvent.InputTuple,
      NewBondDraftedEvent.OutputTuple,
      NewBondDraftedEvent.OutputObject
    >;
    NewBondDrafted: TypedContractEvent<
      NewBondDraftedEvent.InputTuple,
      NewBondDraftedEvent.OutputTuple,
      NewBondDraftedEvent.OutputObject
    >;

    "PublicMessage(address,address,string)": TypedContractEvent<
      PublicMessageEvent.InputTuple,
      PublicMessageEvent.OutputTuple,
      PublicMessageEvent.OutputObject
    >;
    PublicMessage: TypedContractEvent<
      PublicMessageEvent.InputTuple,
      PublicMessageEvent.OutputTuple,
      PublicMessageEvent.OutputObject
    >;

    "RegisterStatusChanged(address,string,string,uint8)": TypedContractEvent<
      RegisterStatusChangedEvent.InputTuple,
      RegisterStatusChangedEvent.OutputTuple,
      RegisterStatusChangedEvent.OutputObject
    >;
    RegisterStatusChanged: TypedContractEvent<
      RegisterStatusChangedEvent.InputTuple,
      RegisterStatusChangedEvent.OutputTuple,
      RegisterStatusChangedEvent.OutputObject
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
