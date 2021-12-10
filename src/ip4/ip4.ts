import { Byte } from "@app/byte";
import { hole } from "@app/hole";
import { Option } from "@app/option";
import { Ordering } from "@app/ord";

export type IP4BitMask =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32;

export type IP4 = {
  readonly octet1: Byte;
  readonly octet2: Byte;
  readonly octet3: Byte;
  readonly octet4: Byte;
};

export type IP4Cidr = IP4 & {
  readonly bitMask: IP4BitMask;
};

export type IP4Range = {
  readonly start: IP4;
  readonly end: IP4;
};

/**
 * Converts IPv4 to number.
 */
export const ip4ToNumber: (ip: IP4) => number = hole();

/**
 * Converts number to IPv4.
 */
export const ip4FromNumber: (value: number) => Option<IP4> = hole();

/**
 * Extracts the first IP from CIDR notation.
 */
export const ip4CidrStartIp: (cidr: IP4Cidr) => IP4 = hole();

/**
 * Extracts the last IP from CIDR notation.
 */
export const ip4CidrEndIp: (cidr: IP4Cidr) => IP4 = hole();

/**
 * Converts IPv4 CIDR notation to IPv4 range.
 */
export const ip4CidrToRange: (cidr: IP4Cidr) => IP4Range = hole();

/**
 * Calculates next IPv4 address from given address.
 */
export const ip4NextIp: (ip: IP4) => IP4 = hole();

/**
 * Calculates previous IPv4 address from given address.
 */
export const ip4PreviousIp: (ip: IP4) => IP4 = hole();

/**
 * Comparer function for IPv4 which can be used for sorting.
 */
export const ip4Ord: (a: IP4) => (b: IP4) => Ordering = hole();

/**
 * Comparer function for IPv4 CIDR notation which can be used for sorting.
 */
export const ip4CidrOrd: (a: IP4Cidr) => (b: IP4Cidr) => Ordering = hole();

/**
 * Converts IPv4 range to CIDR notation.
 */
export const ip4RangeToCidr: (range: IP4Range) => readonly IP4Cidr[] = hole();

/**
 * Pretty print IPv4.
 */
export const ip4ToString: (ip: IP4, shortNotation: boolean) => string = hole();

/**
 * Pretty print IPv4 CIDR notation.
 */
export const ip4CidrToString: (ip: IP4, shortNotation: boolean) => string =
  hole();
