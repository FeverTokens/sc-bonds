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
  DoublyLinkedListAddressMock,
  DoublyLinkedListAddressMockInterface,
} from "../../../contracts/data/DoublyLinkedListAddressMock";

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
        internalType: "address",
        name: "value",
        type: "address",
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
        internalType: "address",
        name: "prevValue",
        type: "address",
      },
      {
        internalType: "address",
        name: "newValue",
        type: "address",
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
        internalType: "address",
        name: "nextValue",
        type: "address",
      },
      {
        internalType: "address",
        name: "newValue",
        type: "address",
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
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "next",
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
    name: "pop",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
      },
    ],
    name: "prev",
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
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
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
        internalType: "address",
        name: "value",
        type: "address",
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
        internalType: "address",
        name: "oldValue",
        type: "address",
      },
      {
        internalType: "address",
        name: "newValue",
        type: "address",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "value",
        type: "address",
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
  "0x608060405234801561000f575f80fd5b5061063b8061001d5f395ff3fe608060405234801561000f575f80fd5b50600436106100c4575f3560e01c8063631de4d61161007d578063a4ece52c11610058578063a4ece52c14610182578063ab73e3161461018a578063dc712cfd1461019d575f80fd5b8063631de4d61461014957806380cea48a1461015c57806389b09de71461016f575f80fd5b806345788ce2116100ad57806345788ce2146101105780635dbe47e814610123578063622d77fb14610136575f80fd5b806312fc41ca146100c857806329092d0e146100ed575b5f80fd5b6100d06101b0565b6040516001600160a01b0390911681526020015b60405180910390f35b6101006100fb3660046105bb565b6101bf565b60405190151581526020016100e4565b6100d061011e3660046105bb565b6101d0565b6101006101313660046105bb565b6101db565b6101006101443660046105d4565b6101e6565b6101006101573660046105d4565b6101f9565b61010061016a3660046105d4565b610205565b61010061017d3660046105bb565b610211565b6100d061021c565b6100d06101983660046105bb565b610226565b6101006101ab3660046105bb565b610231565b5f6101ba5f61023c565b905090565b5f6101ca8183610246565b92915050565b5f6101ca818361025a565b5f6101ca818361026e565b5f6101f2818484610282565b9392505050565b5f6101f28184846102a2565b5f6101f28184846102ba565b5f6101ca81836102d2565b5f6101ba5f6102e6565b5f6101ca81836102f0565b5f6101ca8183610304565b5f6101ca82610318565b5f6101f2836001600160a01b038416610335565b5f6101f2836001600160a01b0384166103a0565b5f6101f2836001600160a01b0384166103f0565b5f61029a846001600160a01b03808616908516610429565b949350505050565b5f61029a846001600160a01b0380861690851661043f565b5f61029a846001600160a01b038086169085166104b0565b5f6101f2836001600160a01b0384166104c0565b5f6101ca826104d6565b5f6101f2836001600160a01b0384166104e1565b5f6101f2836001600160a01b03841661050e565b5f61032382826104e1565b905061032f8282610335565b50919050565b5f61034083836103f0565b156101ca5761037f8361035385856103a0565b61035d86866104e1565b5f82815260208481526040808320849055928252600190940190935290912055565b505f9081526001828101602090815260408084208490559390529181205590565b5f81815260018301602052604090205481158015906103bd575080155b80156103d25750816103cf84836104e1565b14155b156101ca57604051630f71d89360e11b815260040160405180910390fd5b5f81158015906101f257505f828152602084905260409020541515806101f25750505f8080526001929092016020526040909120541490565b5f61029a8461043886866103a0565b858561051e565b5f61044a84846103f0565b61046757604051630f71d89360e11b815260040160405180910390fd5b6104858461047586866103a0565b61047f87876104e1565b8561051e565b905080156101f2575f8381526001850160209081526040808320839055908690528120559392505050565b5f61029a848461047f87876104e1565b5f6101f2836104cf81846103a0565b5f8561051e565b5f61032382826103a0565b5f8181526020839052604090205481158015906104fc575080155b80156103d25750816103cf84836103a0565b5f6101f2838261047f82826104e1565b5f818103610558576040517f2ea5817800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056285836103f0565b61029a57505f838152602085815260408083208490558383526001808801808452828520979097559682528083208590559382529390935291205590565b80356001600160a01b03811681146105b6575f80fd5b919050565b5f602082840312156105cb575f80fd5b6101f2826105a0565b5f80604083850312156105e5575f80fd5b6105ee836105a0565b91506105fc602084016105a0565b9050925092905056fea264697066735822122041efab574829d2b94ef876fab7e99eac6f2616973c96b1fb19464e4b52be70b964736f6c63430008140033";

type DoublyLinkedListAddressMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoublyLinkedListAddressMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoublyLinkedListAddressMock__factory extends ContractFactory {
  constructor(...args: DoublyLinkedListAddressMockConstructorParams) {
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
      DoublyLinkedListAddressMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DoublyLinkedListAddressMock__factory {
    return super.connect(runner) as DoublyLinkedListAddressMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoublyLinkedListAddressMockInterface {
    return new Interface(_abi) as DoublyLinkedListAddressMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DoublyLinkedListAddressMock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DoublyLinkedListAddressMock;
  }
}
