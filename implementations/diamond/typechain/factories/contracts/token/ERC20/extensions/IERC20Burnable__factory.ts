/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC20Burnable,
  IERC20BurnableInterface,
} from "../../../../../contracts/token/ERC20/extensions/IERC20Burnable";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC20Burnable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20BurnableInterface {
    return new Interface(_abi) as IERC20BurnableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC20Burnable {
    return new Contract(address, _abi, runner) as unknown as IERC20Burnable;
  }
}
