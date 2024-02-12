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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234620003125762001141803803806200001d8162000316565b928339810190604081830312620003125780516001600160401b03908181116200031257836200004f9184016200033c565b916020938482015183811162000312576200006b92016200033c565b825190828211620002fe575f8054926001958685811c95168015620002f3575b88861014620002df578190601f958681116200028c575b508890868311600114620002295784926200021d575b50505f19600383901b1c191690861b1781555b8151938411620002095784548581811c91168015620001fe575b87821014620001ea57838111620001a2575b50859284116001146200013e57839495509262000132575b50505f19600383901b1c191690821b1790555b604051610d949081620003ad8239f35b015190505f806200010f565b9190601f1984169585845280842093905b8782106200018a5750508385961062000171575b505050811b01905562000122565b01515f1960f88460031b161c191690555f808062000163565b8087859682949686015181550195019301906200014f565b8582528682208480870160051c820192898810620001e0575b0160051c019086905b828110620001d4575050620000f7565b838155018690620001c4565b92508192620001bb565b634e487b7160e01b82526022600452602482fd5b90607f1690620000e5565b634e487b7160e01b81526041600452602490fd5b015190505f80620000b8565b8480528985208994509190601f198416865b8c8282106200027557505084116200025c575b505050811b018155620000cb565b01515f1960f88460031b161c191690555f80806200024e565b8385015186558c979095019493840193016200023b565b9091508380528884208680850160051c8201928b8610620002d5575b918a91869594930160051c01915b828110620002c6575050620000a2565b8681558594508a9101620002b6565b92508192620002a8565b634e487b7160e01b83526022600452602483fd5b94607f16946200008b565b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b6040519190601f01601f191682016001600160401b03811183821017620002fe57604052565b919080601f84011215620003125782516001600160401b038111620002fe5760209062000372601f8201601f1916830162000316565b9281845282828701011162000312575f5b818110620003985750825f9394955001015290565b85810183015184820184015282016200038356fe6080604081815260049182361015610015575f80fd5b5f92833560e01c91826301ffc9a71461073a5750816306fdde0314610670578163081812fc14610650578163095ea7b3146104e257816323b872dd146104b857816342842e0e1461048f5781636352211e1461045e57816370a08231146103c857816395d89b41146102b0578163a22cb465146101e0578163b88d4fde14610152578163c87b56dd14610101575063e985e9c5146100b1575f80fd5b346100fd57806003193601126100fd5760ff816020936100cf6107e3565b6100d76107fd565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b8383346100fd5760203660031901126100fd5761012161014e9335610c1f565b81815161012d81610848565b5280519161013a83610848565b8252519182916020835260208301906107a5565b0390f35b919050346101dc5760803660031901126101dc5761016e6107e3565b6101766107fd565b846064359467ffffffffffffffff86116100fd57366023870112156100fd57850135946101ae6101a58761089a565b95519586610878565b85855236602487830101116100fd57856101d9966024602093018388013785010152604435916109ac565b80f35b8280fd5b919050346101dc57806003193601126101dc576101fb6107e3565b90602435918215158093036102ac576001600160a01b03169233841461026a5750338452600560205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b6020606492519162461bcd60e51b8352820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152fd5b8480fd5b8284346103c557806003193601126103c5578151918160019283549384811c918186169586156103bb575b60209687851081146103a8578899509688969785829a5291825f14610381575050600114610326575b50505061014e9291610317910385610878565b519282849384528301906107a5565b91908693508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b828410610369575050508201018161031761014e610304565b8054848a018601528895508794909301928101610350565b60ff19168782015293151560051b86019093019350849250610317915061014e9050610304565b634e487b7160e01b835260228a52602483fd5b92607f16926102db565b80fd5b839150346100fd5760203660031901126100fd576001600160a01b036103ec6107e3565b169081156104095760208480858581526003845220549051908152f35b608490602085519162461bcd60e51b8352820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152fd5b8284346103c55760203660031901126103c5575061047e60209235610902565b90516001600160a01b039091168152f35b5050346100fd576101d9906104a336610813565b919251926104b084610848565b8584526109ac565b83346103c5576101d96104ca36610813565b916104dd6104d88433610a47565b61094a565b610b0b565b9050346101dc57816003193601126101dc576104fc6107e3565b6024359290916001600160a01b039190828061051787610902565b16941693808514610603578033149081156105e4575b501561057c57848652602052842080546001600160a01b0319168317905561055483610902565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b6020608492519162461bcd60e51b8352820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152fd5b90508652600560205281862033875260205260ff82872054165f61052d565b506020608492519162461bcd60e51b8352820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152fd5b8284346103c55760203660031901126103c5575061047e60209235610927565b8284346103c557806003193601126103c55781519181825492600184811c91818616958615610730575b60209687851081146103a8578899509688969785829a5291825f146103815750506001146106d55750505061014e9291610317910385610878565b91908693508280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828410610718575050508201018161031761014e610304565b8054848a0186015288955087949093019281016106ff565b92607f169261069a565b8491346101dc5760203660031901126101dc573563ffffffff60e01b81168091036101dc57602092506380ac58cd60e01b8114908115610794575b8115610783575b5015158152f35b6301ffc9a760e01b1490508361077c565b635b5e139f60e01b81149150610775565b91908251928382525f5b8481106107cf575050825f602080949584010152601f8019910116010190565b6020818301810151848301820152016107af565b600435906001600160a01b03821682036107f957565b5f80fd5b602435906001600160a01b03821682036107f957565b60609060031901126107f9576001600160a01b039060043582811681036107f9579160243590811681036107f9579060443590565b6020810190811067ffffffffffffffff82111761086457604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761086457604052565b67ffffffffffffffff811161086457601f01601f191660200190565b156108bd57565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b5f908152600260205260409020546001600160a01b03166109248115156108b6565b90565b61093081610c1f565b5f908152600460205260409020546001600160a01b031690565b1561095157565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b906109d09392916109c06104d88433610a47565b6109cb838383610b0b565b610c43565b156109d757565b60405162461bcd60e51b8152806109f0600482016109f4565b0390fd5b60809060208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60608201520190565b906001600160a01b038080610a5b84610902565b16931691838314938415610a8e575b508315610a78575b50505090565b610a8491929350610927565b16145f8080610a72565b9093505f52600560205260405f20825f5260205260ff60405f205416925f610a6a565b15610ab857565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b90610b3391610b1984610902565b6001600160a01b0393918416928492909183168414610ab1565b16918215610bce5781610b5091610b4986610902565b1614610ab1565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f8481526004602052604081206bffffffffffffffffffffffff60a01b908181541690558382526003602052604082205f1981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b5f90815260026020526040902054610c41906001600160a01b031615156108b6565b565b92939190803b15610d5457610c95946040518092630a85bd0160e11b9485835233600484015260018060a01b03809816602484015260448301526080606483015281806020998a9560848301906107a5565b03915f988991165af1849181610d14575b50610d03575050503d5f14610cfb573d610cbf8161089a565b90610ccd6040519283610878565b81528091833d92013e5b80519182610cf85760405162461bcd60e51b8152806109f0600482016109f4565b01fd5b506060610cd7565b6001600160e01b0319161492509050565b9091508581813d8311610d4d575b610d2c8183610878565b810103126102ac57516001600160e01b0319811681036102ac57905f610ca6565b503d610d22565b505091505060019056fea2646970667358221220b221bf377fa7b540dbfa9c04b3f70a63ccba3c948fd49ba4d19145a995bb0db764736f6c63430008140033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<
      ERC721 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC721__factory {
    return super.connect(runner) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC721 {
    return new Contract(address, _abi, runner) as unknown as ERC721;
  }
}
