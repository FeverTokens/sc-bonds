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

export interface SmartContractAccessManagementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BND_ROLE"
      | "CAK_ROLE"
      | "CST_ROLE"
      | "PAY_ROLE"
      | "atReturningHash"
      | "disableContractFromWhitelist"
      | "enableContractToWhitelist"
      | "getRoleAdmin"
      | "getRoleMember"
      | "getRoleMemberCount"
      | "grantRole"
      | "hasRole"
      | "isCallerApprovedSmartContract"
      | "isContractAllowed"
      | "renounceRole"
      | "revokeRole"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "DisableContract"
      | "EnableContract"
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(functionFragment: "BND_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAK_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "CST_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "PAY_ROLE", values?: undefined): string;
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
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isCallerApprovedSmartContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isContractAllowed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "BND_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAK_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CST_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PAY_ROLE", data: BytesLike): Result;
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
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isCallerApprovedSmartContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isContractAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [_addressForNewAdmin: AddressLike];
  export type OutputTuple = [_addressForNewAdmin: string];
  export interface OutputObject {
    _addressForNewAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
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

  BND_ROLE: TypedContractMethod<[], [string], "view">;

  CAK_ROLE: TypedContractMethod<[], [string], "view">;

  CST_ROLE: TypedContractMethod<[], [string], "view">;

  PAY_ROLE: TypedContractMethod<[], [string], "view">;

  atReturningHash: TypedContractMethod<[addr_: AddressLike], [string], "view">;

  disableContractFromWhitelist: TypedContractMethod<
    [contractHash: BytesLike],
    [void],
    "nonpayable"
  >;

  enableContractToWhitelist: TypedContractMethod<
    [contractHash: BytesLike],
    [void],
    "nonpayable"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getRoleMember: TypedContractMethod<
    [role: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;

  getRoleMemberCount: TypedContractMethod<[role: BytesLike], [bigint], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isCallerApprovedSmartContract: TypedContractMethod<[], [boolean], "view">;

  isContractAllowed: TypedContractMethod<
    [contractAddress_: AddressLike],
    [boolean],
    "view"
  >;

  renounceRole: TypedContractMethod<[role: BytesLike], [void], "nonpayable">;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BND_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CAK_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CST_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PAY_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "atReturningHash"
  ): TypedContractMethod<[addr_: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "disableContractFromWhitelist"
  ): TypedContractMethod<[contractHash: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enableContractToWhitelist"
  ): TypedContractMethod<[contractHash: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleMember"
  ): TypedContractMethod<
    [role: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleMemberCount"
  ): TypedContractMethod<[role: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isCallerApprovedSmartContract"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isContractAllowed"
  ): TypedContractMethod<[contractAddress_: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<[role: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
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
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

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

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}