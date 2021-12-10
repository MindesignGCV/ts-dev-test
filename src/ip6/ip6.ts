import { hole } from "@app/hole";
import { Option } from "@app/option";
import { Ordering } from "@app/ord";

export type IP6BitMask =
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
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99
  | 100
  | 101
  | 102
  | 103
  | 104
  | 105
  | 106
  | 107
  | 108
  | 109
  | 110
  | 111
  | 112
  | 113
  | 114
  | 115
  | 116
  | 117
  | 118
  | 119
  | 120
  | 121
  | 122
  | 123
  | 124
  | 125
  | 126
  | 127
  | 128;

export type IP6 = {
  readonly hextet1: number;
  readonly hextet2: number;
  readonly hextet3: number;
  readonly hextet4: number;
  readonly hextet5: number;
  readonly hextet6: number;
  readonly hextet7: number;
  readonly hextet8: number;
};

export type IP6Cidr = IP6 & {
  readonly bitMask: IP6BitMask;
};

export type IP6Range = {
  readonly start: IP6;
  readonly end: IP6;
};

/**
 * Converts IPv6 to number.
 */
export const ip6ToNumber: (ip: IP6) => number = hole();

/**
 * Converts number to IPv6.
 */
export const ip6FromNumber: (value: number) => Option<IP6> = hole();

/**
 * Extracts the first IP from CIDR notation.
 */
export const ip6CidrStartIp: (cidr: IP6Cidr) => IP6 = hole();

/**
 * Extracts the last IP from CIDR notation.
 */
export const ip6CidrEndIp: (cidr: IP6Cidr) => IP6 = hole();

/**
 * Converts IPv6 CIDR notation to IPv6 range.
 */
export const ip6CidrToRange: (cidr: IP6Cidr) => IP6Range = hole();

/**
 * Calculates next IPv6 address from given address.
 */
export const ip6NextIp: (ip: IP6) => IP6 = hole();

/**
 * Calculates previous IPv6 address from given address.
 */
export const ip6PreviousIp: (ip: IP6) => IP6 = hole();

/**
 * Comparer function for IPv6 which can be used for sorting.
 */
export const ip6Ord: (a: IP6) => (b: IP6) => Ordering = hole();

/**
 * Comparer function for IPv6 CIDR notation which can be used for sorting.
 */
export const ip6CidrOrd: (a: IP6Cidr) => (b: IP6Cidr) => Ordering = hole();

/**
 * Converts IPv6 range to CIDR notation.
 */
export const ip6RangeToCidr: (range: IP6Range) => readonly IP6Cidr[] = hole();

/**
 * Pretty print IPv6.
 */
export const ip6ToString: (ip: IP6, shortNotation: boolean) => string = hole();

/**
 * Pretty print IPv6 CIDR notation.
 */
export const ip6CidrToString: (ip: IP6, shortNotation: boolean) => string =
  hole();
