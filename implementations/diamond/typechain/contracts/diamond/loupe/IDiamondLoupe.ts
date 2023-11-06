/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
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
} from "../../../common";

export declare namespace IDiamondLoupe {
  export type FacetStruct = { target: AddressLike; selectors: BytesLike[] };

  export type FacetStructOutput = [target: string, selectors: string[]] & {
    target: string;
    selectors: string[];
  };
}

export interface IDiamondLoupeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "facetAddress"
      | "facetAddresses"
      | "facetFunctionSelectors"
      | "facets"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "facetAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "facets", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "facetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
}

export interface IDiamondLoupe extends BaseContract {
  connect(runner?: ContractRunner | null): IDiamondLoupe;
  waitForDeployment(): Promise<this>;

  interface: IDiamondLoupeInterface;

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

  facetAddress: TypedContractMethod<
    [_functionSelector: BytesLike],
    [string],
    "view"
  >;

  facetAddresses: TypedContractMethod<[], [string[]], "view">;

  facetFunctionSelectors: TypedContractMethod<
    [_facet: AddressLike],
    [string[]],
    "view"
  >;

  facets: TypedContractMethod<[], [IDiamondLoupe.FacetStructOutput[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "facetAddress"
  ): TypedContractMethod<[_functionSelector: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "facetAddresses"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "facetFunctionSelectors"
  ): TypedContractMethod<[_facet: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "facets"
  ): TypedContractMethod<[], [IDiamondLoupe.FacetStructOutput[]], "view">;

  filters: {};
}
