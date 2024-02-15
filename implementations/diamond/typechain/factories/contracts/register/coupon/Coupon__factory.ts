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
  Coupon,
  CouponInterface,
} from "../../../../contracts/register/coupon/Coupon";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registerContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_couponDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nbDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_recordDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cutOfTime",
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
        internalType: "contract IRegister",
        name: "register",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "couponDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum ICoupon.CouponStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "CouponChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IRegister",
        name: "register",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "couponDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "investor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ICoupon.PaymentStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ICoupon.PaymentStatus",
        name: "previousStatus",
        type: "uint8",
      },
    ],
    name: "CouponPaymentStatusChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "couponDate",
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
    name: "cutOfTime",
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
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "getInvestorPayments",
    outputs: [
      {
        internalType: "enum ICoupon.PaymentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "getPaymentAmountForInvestor",
    outputs: [
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalPaymentAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "paymentAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "investorPayments",
    outputs: [
      {
        internalType: "enum ICoupon.PaymentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nbDays",
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
    name: "payingAgent",
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
        name: "_investor",
        type: "address",
      },
    ],
    name: "paymentIdForInvest",
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
    name: "recordDate",
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
    name: "rejectCoupon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_recordDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cutOfTime",
        type: "uint256",
      },
    ],
    name: "setCutOffTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setDateAsCurrentCoupon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nbDays",
        type: "uint256",
      },
    ],
    name: "setNbDays",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum ICoupon.CouponStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
    ],
    name: "toggleCouponPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801562000010575f80fd5b5060405162001b1c38038062001b1c83398101604081905262000033916200029f565b60015f55600780546001600160a01b0387166001600160a01b0319918216811790925560088054909116821790556040516338e5975560e21b815233600482015263e3965d5490602401602060405180830381865afa15801562000099573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620000bf9190620002f1565b620001235760405162461bcd60e51b815260206004820152602960248201527f53656e646572206d757374206265206120506179696e672063616c63756c61746044820152681a5bdb881859d95b9d60ba1b60648201526084015b60405180910390fd5b6007546040516338e20fc560e11b8152600481018690526001600160a01b03909116906371c41f8a906024016020604051808303815f875af11580156200016c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190620001929190620002f1565b620001e05760405162461bcd60e51b815260206004820152601f60248201527f7468697320636f75706f6e4461746520646f6573206e6f74206578697374730060448201526064016200011a565b60018490556002839055620001f9620151808362000319565b62000205908362000339565b60035562000217620151808262000319565b6004908155600580546001600160a01b031916331790556008805460ff60a01b191690819055600160a01b900460ff16908111156200025a576200025a6200035f565b6001546007546040516001600160a01b03909116907fee1a084aa36acdbc1c32f808f87c6ef8ae26d4ad59293c32244b1b72466bb760905f90a4505050505062000373565b5f805f805f60a08688031215620002b4575f80fd5b85516001600160a01b0381168114620002cb575f80fd5b602087015160408801516060890151608090990151929a91995097965090945092505050565b5f6020828403121562000302575f80fd5b8151801515811462000312575f80fd5b9392505050565b5f826200033457634e487b7160e01b5f52601260045260245ffd5b500690565b818103818111156200035957634e487b7160e01b5f52601160045260245ffd5b92915050565b634e487b7160e01b5f52602160045260245ffd5b61179b80620003815f395ff3fe608060405234801561000f575f80fd5b5060043610610115575f3560e01c80637c610024116100ad578063d64c05871161007d578063f4bcf20911610063578063f4bcf209146102d3578063f68a3ab4146102db578063fd3b4442146102ee575f80fd5b8063d64c058714610295578063d927a606146102a8575f80fd5b80637c6100241461024157806386d49f7714610254578063c4fa96b01461025d578063ccc5d7e914610266575f80fd5b8063532e91cc116100e8578063532e91cc146101895780635e4795a9146102115780636969a06f1461022457806369fb125e1461022e575f80fd5b80631aa3a00814610119578063200d2ed21461014957806323bfa0f01461016a57806350cc453214610180575b5f80fd5b60075461012c906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60085461015d90600160a01b900460ff1681565b60405161014091906115bc565b6101726102f7565b604051908152602001610140565b61017260035481565b6101e06101973660046115ed565b6040516bffffffffffffffffffffffff1930606090811b8216602084015283901b1660348201525f90604801604051602081830303815290604052805190602001209050919050565b6040517fffffffffffffffff0000000000000000000000000000000000000000000000009091168152602001610140565b60055461012c906001600160a01b031681565b61022c610498565b005b61017261023c3660046115ed565b610861565b61022c61024f36600461160f565b610a20565b61017260025481565b61017260015481565b6102886102743660046115ed565b60096020525f908152604090205460ff1681565b604051610140919061163a565b61022c6102a33660046115ed565b610b8d565b6102886102b63660046115ed565b6001600160a01b03165f9081526009602052604090205460ff1690565b61022c61128c565b61022c6102e936600461164e565b6113d1565b61017260045481565b5f8060075f9054906101000a90046001600160a01b03166001600160a01b031663a7f2f6ec6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610349573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061036d919061166e565b90505f60075f9054906101000a90046001600160a01b03166001600160a01b03166339027f7c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103e4919061166e565b90505f60075f9054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610437573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061045b919061166e565b90505f6101686002548484876104719190611699565b61047b9190611699565b6104859190611699565b61048f91906116c4565b95945050505050565b6104a0611567565b6007546040516338e5975560e21b81523360048201526001600160a01b039091169063e3965d5490602401602060405180830381865afa1580156104e6573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061050a91906116d7565b61056d5760405162461bcd60e51b815260206004820152602960248201527f53656e646572206d757374206265206120506179696e672063616c63756c61746044820152681a5bdb881859d95b9d60ba1b60648201526084015b60405180910390fd5b5f600854600160a01b900460ff16600481111561058c5761058c6115a8565b1461060d5760405162461bcd60e51b8152602060048201526044602482018190527f54686520636f75706f6e20646174652063616e206265206d6f64696669656420908201527f6f6e6c792069662074686520636f6e74726163742073746174757320697320446064820152631c98599d60e21b608482015260a401610564565b6007546001546040517f71c41f8a0000000000000000000000000000000000000000000000000000000081526001600160a01b03909216916371c41f8a9161065b9160040190815260200190565b6020604051808303815f875af1158015610677573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061069b91906116d7565b6106e75760405162461bcd60e51b815260206004820152601f60248201527f7468697320636f75706f6e4461746520646f6573206e6f7420657869737473006044820152606401610564565b6007546001546004546003546001600160a01b0390931692633052974c929161070f916116f6565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925260248201526044015f604051808303815f87803b158015610762575f80fd5b505af1158015610774573d5f803e3d5ffd5b5050505060085f9054906101000a90046001600160a01b03166001600160a01b0316639ef986de6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107ec919061166e565b6006556008805460ff60a01b1916600160a01b90811791829055900460ff16600481111561081c5761081c6115a8565b6001546007546040516001600160a01b03909116907fee1a084aa36acdbc1c32f808f87c6ef8ae26d4ad59293c32244b1b72466bb760905f90a461085f60015f55565b565b5f8060075f9054906101000a90046001600160a01b03166001600160a01b031663a7f2f6ec6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108d7919061166e565b90505f60075f9054906101000a90046001600160a01b03166001600160a01b03166339027f7c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561092a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061094e919061166e565b6008546001546040517f07b2d9e30000000000000000000000000000000000000000000000000000000081526001600160a01b03888116600483015260248201929092529293505f929116906307b2d9e390604401602060405180830381865afa1580156109be573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109e2919061166e565b90505f6101686002548484876109f89190611699565b610a029190611699565b610a0c9190611699565b610a1691906116c4565b9695505050505050565b6007546040516338e5975560e21b81523360048201526001600160a01b039091169063e3965d5490602401602060405180830381865afa158015610a66573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a8a91906116d7565b610ae85760405162461bcd60e51b815260206004820152602960248201527f53656e646572206d757374206265206120506179696e672063616c63756c61746044820152681a5bdb881859d95b9d60ba1b6064820152608401610564565b5f600854600160a01b900460ff166004811115610b0757610b076115a8565b14610b885760405162461bcd60e51b8152602060048201526044602482018190527f54686520636f75706f6e20646174652063616e206265206d6f64696669656420908201527f6f6e6c792069662074686520636f6e74726163742073746174757320697320446064820152631c98599d60e21b608482015260a401610564565b600255565b6007546040517fc41251a10000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301529091169063c41251a190602401602060405180830381865afa158015610bee573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c1291906116d7565b610c5e5760405162461bcd60e51b815260206004820152601c60248201527f5468697320696e766573746f72206973206e6f7420616c6c6f776564000000006044820152606401610564565b6001600854600160a01b900460ff166004811115610c7e57610c7e6115a8565b14610cf15760405162461bcd60e51b815260206004820152602860248201527f54686520737461747573206f662074686520636f75706f6e2073686f756c642060448201527f62652052656164790000000000000000000000000000000000000000000000006064820152608401610564565b6001600160a01b038181165f90815260096020526040908190205460075491517f4361f92a00000000000000000000000000000000000000000000000000000000815233600482015260ff909116929190911690634361f92a90602401602060405180830381865afa158015610d69573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d8d91906116d7565b15610f2f576001600160a01b0382165f9081526009602052604081205460ff166002811115610dbe57610dbe6115a8565b03610e68576006544211610e3a5760405162461bcd60e51b815260206004820152602560248201527f74686520636f75706f6e20637574206f662074696d6520686173206e6f74207060448201527f61737365640000000000000000000000000000000000000000000000000000006064820152608401610564565b6001600160a01b0382165f90815260096020526040902080546001919060ff191682805b0217905550611225565b60016001600160a01b0383165f9081526009602052604090205460ff166002811115610e9657610e966115a8565b03610ebf576001600160a01b0382165f908152600960205260409020805460ff19169055611225565b6040805162461bcd60e51b81526020600482015260248101919091527f54686520737461747573206f66207468697320696e766573746f72277320706160448201527f796d656e742073686f756c642062652050616964206f7220546f4265506169646064820152608401610564565b6007546040517f35c80c8c0000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03909116906335c80c8c90602401602060405180830381865afa158015610f8e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fb291906116d7565b156111b7576007546040517f8f92f4900000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015233921690638f92f49090602401602060405180830381865afa158015611018573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061103c9190611709565b6001600160a01b0316146110b85760405162461bcd60e51b815260206004820152602660248201527f596f7520617265206e6f7420637573746f6469616e206f66207468697320696e60448201527f766573746f7200000000000000000000000000000000000000000000000000006064820152608401610564565b60016001600160a01b0383165f9081526009602052604090205460ff1660028111156110e6576110e66115a8565b03611114576001600160a01b0382165f90815260096020526040902080546002919060ff1916600183610e5e565b60026001600160a01b0383165f9081526009602052604090205460ff166002811115611142576111426115a8565b0361116f576001600160a01b0382165f90815260096020526040902080546001919060ff19168280610e5e565b60405162461bcd60e51b815260206004820152601d60248201527f496e76616c696420436f75706f6e207061796d656e74207374617475730000006044820152606401610564565b60405162461bcd60e51b815260206004820152603260248201527f73656e646572206d7573742062652043656e7472616c204163636f756e74204b60448201527f6565706572206f7220437573746f6469616e00000000000000000000000000006064820152608401610564565b6001546007546001600160a01b038085165f8181526009602052604090819020549051919493909216917f71a813fb36e2b43b4fcd5b541937f3501c4bb733759aa470d700efb9b7fd5b14916112809160ff16908790611724565b60405180910390a45050565b6007546040516338e5975560e21b81523360048201526001600160a01b039091169063e3965d5490602401602060405180830381865afa1580156112d2573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112f691906116d7565b6113545760405162461bcd60e51b815260206004820152602960248201527f53656e646572206d757374206265206120506179696e672063616c63756c61746044820152681a5bdb881859d95b9d60ba1b6064820152608401610564565b6008805460ff60a01b1916740200000000000000000000000000000000000000001790819055600160a01b900460ff166004811115611395576113956115a8565b6001546007546040516001600160a01b03909116907fee1a084aa36acdbc1c32f808f87c6ef8ae26d4ad59293c32244b1b72466bb760905f90a4565b6007546040516338e5975560e21b81523360048201526001600160a01b039091169063e3965d5490602401602060405180830381865afa158015611417573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061143b91906116d7565b6114995760405162461bcd60e51b815260206004820152602960248201527f53656e646572206d757374206265206120506179696e672063616c63756c61746044820152681a5bdb881859d95b9d60ba1b6064820152608401610564565b5f600854600160a01b900460ff1660048111156114b8576114b86115a8565b146115395760405162461bcd60e51b8152602060048201526044602482018190527f54686520636f75706f6e20646174652063616e206265206d6f64696669656420908201527f6f6e6c792069662074686520636f6e74726163742073746174757320697320446064820152631c98599d60e21b608482015260a401610564565b611546620151808361173f565b6115509083611752565b600355611560620151808261173f565b6004555050565b60025f54036115a2576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f55565b634e487b7160e01b5f52602160045260245ffd5b60208101600583106115d0576115d06115a8565b91905290565b6001600160a01b03811681146115ea575f80fd5b50565b5f602082840312156115fd575f80fd5b8135611608816115d6565b9392505050565b5f6020828403121561161f575f80fd5b5035919050565b60038110611636576116366115a8565b9052565b602081016116488284611626565b92915050565b5f806040838503121561165f575f80fd5b50508035926020909101359150565b5f6020828403121561167e575f80fd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761164857611648611685565b634e487b7160e01b5f52601260045260245ffd5b5f826116d2576116d26116b0565b500490565b5f602082840312156116e7575f80fd5b81518015158114611608575f80fd5b8082018082111561164857611648611685565b5f60208284031215611719575f80fd5b8151611608816115d6565b604081016117328285611626565b6116086020830184611626565b5f8261174d5761174d6116b0565b500690565b818103818111156116485761164861168556fea26469706673582212201e9962b99956fbf25b896ea277c783c1b4d1c681ac12fa31a4466734ef626b6d64736f6c63430008140033";

type CouponConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CouponConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Coupon__factory extends ContractFactory {
  constructor(...args: CouponConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _registerContract: AddressLike,
    _couponDate: BigNumberish,
    _nbDays: BigNumberish,
    _recordDate: BigNumberish,
    _cutOfTime: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _registerContract,
      _couponDate,
      _nbDays,
      _recordDate,
      _cutOfTime,
      overrides || {}
    );
  }
  override deploy(
    _registerContract: AddressLike,
    _couponDate: BigNumberish,
    _nbDays: BigNumberish,
    _recordDate: BigNumberish,
    _cutOfTime: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _registerContract,
      _couponDate,
      _nbDays,
      _recordDate,
      _cutOfTime,
      overrides || {}
    ) as Promise<
      Coupon & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Coupon__factory {
    return super.connect(runner) as Coupon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CouponInterface {
    return new Interface(_abi) as CouponInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Coupon {
    return new Contract(address, _abi, runner) as unknown as Coupon;
  }
}
