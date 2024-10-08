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

export interface CouponSnapshotManagementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BND_ROLE"
      | "CAK_ROLE"
      | "CST_ROLE"
      | "PAY_ROLE"
      | "_totalSupplyAtCoupon"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "balanceOfAt"
      | "balanceOfCoupon"
      | "burn"
      | "currentCouponDate"
      | "currentSnapshotDatetime"
      | "decreaseAllowance"
      | "getInvestorListAtCoupon"
      | "getRoleAdmin"
      | "getRoleMember"
      | "getRoleMemberCount"
      | "grantRole"
      | "hasRole"
      | "increaseAllowance"
      | "lock"
      | "mint"
      | "nextSnapshotDatetime"
      | "release"
      | "renounceRole"
      | "revokeRole"
      | "totalSupply"
      | "totalSupplyAt"
      | "totalSupplyAtCoupon"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "Approval"
      | "AssetHTLC"
      | "DisableContract"
      | "DisableInvestor"
      | "EnableContract"
      | "EnableInvestor"
      | "Initialized"
      | "NewBondDrafted"
      | "PublicMessage"
      | "RegisterStatusChanged"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Snapshot"
      | "SnapshotTimestampChange"
      | "Transfer"
      | "WalletAddedToWhitelist"
      | "WalletDeletedFromWhitelist"
  ): EventFragment;

  encodeFunctionData(functionFragment: "BND_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAK_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "CST_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "PAY_ROLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_totalSupplyAtCoupon",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfCoupon",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "currentCouponDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentSnapshotDatetime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInvestorListAtCoupon",
    values: [BigNumberish]
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
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "nextSnapshotDatetime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAtCoupon",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "BND_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAK_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CST_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PAY_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_totalSupplyAtCoupon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfCoupon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentCouponDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentSnapshotDatetime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvestorListAtCoupon",
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
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextSnapshotDatetime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAtCoupon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
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

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AssetHTLCEvent {
  export type InputTuple = [
    txId: BytesLike,
    from: AddressLike,
    to: AddressLike,
    hL: BytesLike,
    status: BigNumberish
  ];
  export type OutputTuple = [
    txId: string,
    from: string,
    to: string,
    hL: string,
    status: bigint
  ];
  export interface OutputObject {
    txId: string;
    from: string;
    to: string;
    hL: string;
    status: bigint;
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

export namespace SnapshotEvent {
  export type InputTuple = [id: BigNumberish];
  export type OutputTuple = [id: bigint];
  export interface OutputObject {
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SnapshotTimestampChangeEvent {
  export type InputTuple = [
    couponDate: BigNumberish,
    currentTimestamp: BigNumberish,
    nextTimestamp: BigNumberish
  ];
  export type OutputTuple = [
    couponDate: bigint,
    currentTimestamp: bigint,
    nextTimestamp: bigint
  ];
  export interface OutputObject {
    couponDate: bigint;
    currentTimestamp: bigint;
    nextTimestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
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

export interface CouponSnapshotManagement extends BaseContract {
  connect(runner?: ContractRunner | null): CouponSnapshotManagement;
  waitForDeployment(): Promise<this>;

  interface: CouponSnapshotManagementInterface;

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

  _totalSupplyAtCoupon: TypedContractMethod<
    [_couponDate: BigNumberish],
    [bigint],
    "view"
  >;

  allowance: TypedContractMethod<
    [holder: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  balanceOfAt: TypedContractMethod<
    [account: AddressLike, snapshotId: BigNumberish],
    [bigint],
    "view"
  >;

  balanceOfCoupon: TypedContractMethod<
    [account: AddressLike, _couponDate: BigNumberish],
    [bigint],
    "view"
  >;

  burn: TypedContractMethod<[amount_: BigNumberish], [void], "nonpayable">;

  currentCouponDate: TypedContractMethod<[], [bigint], "view">;

  currentSnapshotDatetime: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getInvestorListAtCoupon: TypedContractMethod<
    [CouponDate: BigNumberish],
    [string[]],
    "view"
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

  increaseAllowance: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  lock: TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      txId: BytesLike,
      hL: BytesLike,
      hR: BytesLike,
      hC: BytesLike,
      pDate: BigNumberish,
      dDate: BigNumberish,
      proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  mint: TypedContractMethod<[amount_: BigNumberish], [void], "nonpayable">;

  nextSnapshotDatetime: TypedContractMethod<[], [bigint], "view">;

  release: TypedContractMethod<
    [
      txId: BytesLike,
      secret: BytesLike,
      proof: BytesLike,
      status_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<[role: BytesLike], [void], "nonpayable">;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  totalSupplyAt: TypedContractMethod<
    [snapshotId: BigNumberish],
    [bigint],
    "view"
  >;

  totalSupplyAtCoupon: TypedContractMethod<
    [_couponDate: BigNumberish],
    [bigint],
    "view"
  >;

  transfer: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from_: AddressLike, to_: AddressLike, amount_: BigNumberish],
    [boolean],
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
    nameOrSignature: "_totalSupplyAtCoupon"
  ): TypedContractMethod<[_couponDate: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [holder: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "balanceOfAt"
  ): TypedContractMethod<
    [account: AddressLike, snapshotId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "balanceOfCoupon"
  ): TypedContractMethod<
    [account: AddressLike, _couponDate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<[amount_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "currentCouponDate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "currentSnapshotDatetime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getInvestorListAtCoupon"
  ): TypedContractMethod<[CouponDate: BigNumberish], [string[]], "view">;
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
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lock"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      txId: BytesLike,
      hL: BytesLike,
      hR: BytesLike,
      hC: BytesLike,
      pDate: BigNumberish,
      dDate: BigNumberish,
      proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<[amount_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "nextSnapshotDatetime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "release"
  ): TypedContractMethod<
    [
      txId: BytesLike,
      secret: BytesLike,
      proof: BytesLike,
      status_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
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
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupplyAt"
  ): TypedContractMethod<[snapshotId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupplyAtCoupon"
  ): TypedContractMethod<[_couponDate: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from_: AddressLike, to_: AddressLike, amount_: BigNumberish],
    [boolean],
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
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "AssetHTLC"
  ): TypedContractEvent<
    AssetHTLCEvent.InputTuple,
    AssetHTLCEvent.OutputTuple,
    AssetHTLCEvent.OutputObject
  >;
  getEvent(
    key: "DisableContract"
  ): TypedContractEvent<
    DisableContractEvent.InputTuple,
    DisableContractEvent.OutputTuple,
    DisableContractEvent.OutputObject
  >;
  getEvent(
    key: "DisableInvestor"
  ): TypedContractEvent<
    DisableInvestorEvent.InputTuple,
    DisableInvestorEvent.OutputTuple,
    DisableInvestorEvent.OutputObject
  >;
  getEvent(
    key: "EnableContract"
  ): TypedContractEvent<
    EnableContractEvent.InputTuple,
    EnableContractEvent.OutputTuple,
    EnableContractEvent.OutputObject
  >;
  getEvent(
    key: "EnableInvestor"
  ): TypedContractEvent<
    EnableInvestorEvent.InputTuple,
    EnableInvestorEvent.OutputTuple,
    EnableInvestorEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
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
  getEvent(
    key: "Snapshot"
  ): TypedContractEvent<
    SnapshotEvent.InputTuple,
    SnapshotEvent.OutputTuple,
    SnapshotEvent.OutputObject
  >;
  getEvent(
    key: "SnapshotTimestampChange"
  ): TypedContractEvent<
    SnapshotTimestampChangeEvent.InputTuple,
    SnapshotTimestampChangeEvent.OutputTuple,
    SnapshotTimestampChangeEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
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

    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "AssetHTLC(bytes32,address,address,bytes32,uint8)": TypedContractEvent<
      AssetHTLCEvent.InputTuple,
      AssetHTLCEvent.OutputTuple,
      AssetHTLCEvent.OutputObject
    >;
    AssetHTLC: TypedContractEvent<
      AssetHTLCEvent.InputTuple,
      AssetHTLCEvent.OutputTuple,
      AssetHTLCEvent.OutputObject
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

    "Snapshot(uint256)": TypedContractEvent<
      SnapshotEvent.InputTuple,
      SnapshotEvent.OutputTuple,
      SnapshotEvent.OutputObject
    >;
    Snapshot: TypedContractEvent<
      SnapshotEvent.InputTuple,
      SnapshotEvent.OutputTuple,
      SnapshotEvent.OutputObject
    >;

    "SnapshotTimestampChange(uint256,uint256,uint256)": TypedContractEvent<
      SnapshotTimestampChangeEvent.InputTuple,
      SnapshotTimestampChangeEvent.OutputTuple,
      SnapshotTimestampChangeEvent.OutputObject
    >;
    SnapshotTimestampChange: TypedContractEvent<
      SnapshotTimestampChangeEvent.InputTuple,
      SnapshotTimestampChangeEvent.OutputTuple,
      SnapshotTimestampChangeEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
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
