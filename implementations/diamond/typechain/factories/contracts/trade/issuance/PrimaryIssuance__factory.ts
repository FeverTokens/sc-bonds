/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  PrimaryIssuance,
  PrimaryIssuanceInterface,
} from "../../../../contracts/trade/issuance/PrimaryIssuance";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IRegister",
        name: "_register",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_offerPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum ITrade.Status",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "NotifyTrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "PrimaryIssuanceCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "account",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyerAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tradeDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "valueDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct ITrade.TradeDetail",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "offerPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paymentID",
    outputs: [
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "register",
    outputs: [
      {
        internalType: "contract IRegister",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sellerAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum ITrade.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "validate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801562000010575f80fd5b5060405162000ffb38038062000ffb833981016040819052620000339162000312565b60015f556040516314aa469760e31b81523360048201526001600160a01b0383169063a55234b890602401602060405180830381865afa1580156200007a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000a0919062000341565b620000f15760405162461bcd60e51b815260206004820152601460248201527f53656e646572206d757374206265206120422644000000000000000000000000604482015260640160405180910390fd5b600180546001600160a01b0384166001600160a01b03199182168117835560028054909216331790915560048381556005805460ff1916909317909255604080516310f09fe360e31b8152905191926370a08231928492638784ff1892818101926020929091908290030181865afa15801562000170573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019062000196919062000369565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015620001d9573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620001ff919062000387565b6003556001600254600154604080516310f09fe360e31b815290516001600160a01b039384169390921691638784ff18916004808201926020929091908290030181865afa15801562000254573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200027a919062000369565b6001600160a01b03167fb04efa95c2e317d8afba4237350a971f1ce59ef6fbbf2eb3f1a7e3f3f106a8f4600354604051620002b791815260200190565b60405180910390a46040513081527ff3907ebf6f6c38d243f9cbf61f50741cad6bf3507e2be4526ee2a5e1d1e454919060200160405180910390a150506200039f565b6001600160a01b03811681146200030f575f80fd5b50565b5f806040838503121562000324575f80fd5b82516200033181620002fa565b6020939093015192949293505050565b5f6020828403121562000352575f80fd5b8151801515811462000362575f80fd5b9392505050565b5f602082840312156200037a575f80fd5b81516200036281620002fa565b5f6020828403121562000398575f80fd5b5051919050565b610c4e80620003ad5f395ff3fe608060405234801561000f575f80fd5b50600436106100b9575f3560e01c80634dc415de116100725780636901f668116100585780636901f6681461014d578063d84ffb4114610155578063fbbf93a014610188575f80fd5b80634dc415de146101305780635dab24201461013a575f80fd5b8063200d2ed2116100a2578063200d2ed2146100f55780633bf19e2914610108578063489147d71461011f575f80fd5b806310547851146100bd5780631aa3a008146100e2575b5f80fd5b6100c56101da565b6040516001600160a01b0390911681526020015b60405180910390f35b6001546100c5906001600160a01b031681565b60055460ff166040516100d99190610b8f565b61011160045481565b6040519081526020016100d9565b6002546001600160a01b03166100c5565b61013861024a565b005b6002546100c5906001600160a01b031681565b6101386104a1565b6040517fffffffffffffffff0000000000000000000000000000000000000000000000003060c01b1681526020016100d9565b6101906109ca565b6040516100d991905f60a082019050825182526001600160a01b03602084015116602083015260408301516040830152606083015160608301526080830151608083015292915050565b600154604080516310f09fe360e31b815290515f926001600160a01b031691638784ff189160048083019260209291908290030181865afa158015610221573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102459190610bb5565b905090565b6002546001600160a01b031633146102cf5760405162461bcd60e51b815260206004820152602360248201527f6f6e6c79207468652062656e6566696369617279204226442063616e2072657660448201527f657274000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6005805460ff19166002179055600154604080516310f09fe360e31b815290516001600160a01b03909216916370a08231918391638784ff18916004808201926020929091908290030181865afa15801561032c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103509190610bb5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156103aa573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103ce9190610be2565b6003556005805460ff16908111156103e8576103e8610b7b565b600254600154604080516310f09fe360e31b815290516001600160a01b039384169390921691638784ff18916004808201926020929091908290030181865afa158015610437573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061045b9190610bb5565b6001600160a01b03167fb04efa95c2e317d8afba4237350a971f1ce59ef6fbbf2eb3f1a7e3f3f106a8f460035460405161049791815260200190565b60405180910390a4565b6104a9610b3a565b6001546040517fa55234b80000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b039091169063a55234b890602401602060405180830381865afa158015610508573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061052c9190610bf9565b6105785760405162461bcd60e51b815260206004820152601460248201527f53656e646572206d75737420626520612042264400000000000000000000000060448201526064016102c6565b6002546001600160a01b031633146105f85760405162461bcd60e51b815260206004820152602860248201527f6f6e6c79207468652062656e6566696369617279204226442073686f756c642060448201527f66696e616c697a6500000000000000000000000000000000000000000000000060648201526084016102c6565b60036005805460ff169081111561061157610611610b7b565b14158015610636575060046005805460ff169081111561063357610633610b7b565b14155b6106a85760405162461bcd60e51b815260206004820152603160248201527f546865207072696d61727920636f6e74726163742073686f756c64206265206960448201527f6e20696e6974696174656420737461746500000000000000000000000000000060648201526084016102c6565b600154604080516310f09fe360e31b815290516001600160a01b03909216916370a08231918391638784ff18916004808201926020929091908290030181865afa1580156106f8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071c9190610bb5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610776573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061079a9190610be2565b6003819055156109bf57600154604080516310f09fe360e31b815290516001600160a01b03909216916323b872dd918391638784ff18916004808201926020929091908290030181865afa1580156107f4573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108189190610bb5565b60025460035460405160e085901b7fffffffff000000000000000000000000000000000000000000000000000000001681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303815f875af1158015610887573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108ab9190610bf9565b6108f75760405162461bcd60e51b815260206004820152601760248201527f746865207472616e7366657220686173206661696c656400000000000000000060448201526064016102c6565b6005805460ff19166003908117909155600254600154604080516310f09fe360e31b815290516001600160a01b039384169390921691638784ff18916004808201926020929091908290030181865afa158015610956573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061097a9190610bb5565b6001600160a01b03167fb04efa95c2e317d8afba4237350a971f1ce59ef6fbbf2eb3f1a7e3f3f106a8f46003546040516109b691815260200190565b60405180910390a45b6109c860015f55565b565b610a006040518060a001604052805f81526020015f6001600160a01b031681526020015f81526020015f81526020015f81525090565b6040805160a08101825260035481526002546001600160a01b0390811660208084019190915260015484517fb90c1dbb00000000000000000000000000000000000000000000000000000000815285515f96860194929092169263b90c1dbb926004808401938290030181865afa158015610a7d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aa19190610be2565b8152600154604080517f2877d47300000000000000000000000000000000000000000000000000000000815290516020938401936001600160a01b0390931692632877d47392600480820193918290030181865afa158015610b05573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b299190610be2565b815260045460209091015292915050565b60025f5403610b75576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f55565b634e487b7160e01b5f52602160045260245ffd5b6020810160068310610baf57634e487b7160e01b5f52602160045260245ffd5b91905290565b5f60208284031215610bc5575f80fd5b81516001600160a01b0381168114610bdb575f80fd5b9392505050565b5f60208284031215610bf2575f80fd5b5051919050565b5f60208284031215610c09575f80fd5b81518015158114610bdb575f80fdfea264697066735822122010b0d344462ad9fc167064ce7ca7d21ef93642f17ccdd7f10f69b75fe8da516464736f6c63430008140033";

type PrimaryIssuanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrimaryIssuanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrimaryIssuance__factory extends ContractFactory {
  constructor(...args: PrimaryIssuanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _register: AddressLike,
    _offerPrice: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_register, _offerPrice, overrides || {});
  }
  override deploy(
    _register: AddressLike,
    _offerPrice: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_register, _offerPrice, overrides || {}) as Promise<
      PrimaryIssuance & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PrimaryIssuance__factory {
    return super.connect(runner) as PrimaryIssuance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrimaryIssuanceInterface {
    return new Interface(_abi) as PrimaryIssuanceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PrimaryIssuance {
    return new Contract(address, _abi, runner) as unknown as PrimaryIssuance;
  }
}
