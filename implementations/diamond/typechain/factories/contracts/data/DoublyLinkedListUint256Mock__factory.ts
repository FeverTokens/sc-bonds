/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  DoublyLinkedListUint256Mock,
  DoublyLinkedListUint256MockInterface,
} from "../../../contracts/data/DoublyLinkedListUint256Mock";

const _abi = [
  {
    inputs: [],
    name: "DoublyLinkedList__InvalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "DoublyLinkedList__NonExistentEntry",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "contains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prevValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "insertAfter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nextValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "insertBefore",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "next",
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
    name: "pop",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "prev",
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
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oldValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "replace",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shift",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "unshift",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b506105a98061001d5f395ff3fe608060405234801561000f575f80fd5b50600436106100c4575f3560e01c8063a4ece52c1161007d578063e81cf24c11610058578063e81cf24c1461016d578063edd004e514610180578063f6b3e58514610193575f80fd5b8063a4ece52c1461013f578063c0f0eddc14610147578063c34052e01461015a575f80fd5b80634cc82215116100ad5780634cc82215146100f65780635e77a33c14610119578063959ac4841461012c575f80fd5b806312fc41ca146100c857806335671214146100e3575b5f80fd5b6100d06101a6565b6040519081526020015b60405180910390f35b6100d06100f136600461053c565b6101b5565b61010961010436600461053c565b6101c6565b60405190151581526020016100da565b610109610127366004610553565b6101d1565b61010961013a36600461053c565b6101e4565b6100d06101ef565b610109610155366004610553565b6101f9565b61010961016836600461053c565b610205565b61010961017b366004610553565b610210565b6100d061018e36600461053c565b61021c565b6101096101a136600461053c565b610227565b5f6101b05f610232565b905090565b5f6101c0818361023c565b92915050565b5f6101c08183610247565b5f6101dd818484610252565b9392505050565b5f6101c08183610266565b5f6101b05f610271565b5f6101dd81848461027b565b5f6101c08183610287565b5f6101dd818484610292565b5f6101c0818361029e565b5f6101c081836102a9565b5f6101c0826102b4565b5f6101dd83836102d1565b5f6101dd8383610321565b5f61025e84848461038c565b949350505050565b5f6101dd83836103a2565b5f6101c0826103b8565b5f61025e8484846103c3565b5f6101dd83836103d9565b5f61025e848484610412565b5f6101dd838361047d565b5f6101dd83836104aa565b5f6102bf828261047d565b90506102cb8282610321565b50919050565b5f81815260018301602052604090205481158015906102ee575080155b8015610303575081610300848361047d565b14155b156101c057604051630f71d89360e11b815260040160405180910390fd5b5f61032c83836103d9565b156101c05761036b8361033f85856102d1565b610349868661047d565b5f82815260208481526040808320849055928252600190940190935290912055565b505f9081526001828101602090815260408084208490559390529181205590565b5f61025e848461039c878761047d565b856104ba565b5f6101dd836103b181846102d1565b5f856104ba565b5f6102bf82826102d1565b5f61025e846103d286866102d1565b85856104ba565b5f81158015906101dd57505f828152602084905260409020541515806101dd5750505f8080526001929092016020526040909120541490565b5f61041d84846103d9565b61043a57604051630f71d89360e11b815260040160405180910390fd5b6104528461044886866102d1565b61039c878761047d565b905080156101dd575f8381526001850160209081526040808320839055908690528120559392505050565b5f818152602083905260409020548115801590610498575080155b801561030357508161030084836102d1565b5f6101dd838261039c828261047d565b5f8181036104f4576040517f2ea5817800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104fe85836103d9565b61025e57505f838152602085815260408083208490558383526001808801808452828520979097559682528083208590559382529390935291205590565b5f6020828403121561054c575f80fd5b5035919050565b5f8060408385031215610564575f80fd5b5050803592602090910135915056fea2646970667358221220e1186c4be49afc98185e7c39293d7c65e8fd159d9788cedd6716c21b6c3e141964736f6c63430008140033";

type DoublyLinkedListUint256MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoublyLinkedListUint256MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoublyLinkedListUint256Mock__factory extends ContractFactory {
  constructor(...args: DoublyLinkedListUint256MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DoublyLinkedListUint256Mock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DoublyLinkedListUint256Mock__factory {
    return super.connect(runner) as DoublyLinkedListUint256Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoublyLinkedListUint256MockInterface {
    return new Interface(_abi) as DoublyLinkedListUint256MockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DoublyLinkedListUint256Mock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DoublyLinkedListUint256Mock;
  }
}