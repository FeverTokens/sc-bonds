/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICouponInternal,
  ICouponInternalInterface,
} from "../../../../contracts/register/coupon/ICouponInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "couponDate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum ICouponInternal.CouponStatus",
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
        internalType: "enum ICouponInternal.PaymentStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ICouponInternal.PaymentStatus",
        name: "previousStatus",
        type: "uint8",
      },
    ],
    name: "CouponPaymentStatusChanged",
    type: "event",
  },
] as const;

export class ICouponInternal__factory {
  static readonly abi = _abi;
  static createInterface(): ICouponInternalInterface {
    return new Interface(_abi) as ICouponInternalInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICouponInternal {
    return new Contract(address, _abi, runner) as unknown as ICouponInternal;
  }
}
