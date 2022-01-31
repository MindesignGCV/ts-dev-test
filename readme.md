<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [Test tasks for typescript developer](#test-tasks-for-typescript-developer)
  - [-](#-)
  - [rules](#rules)
  - [task 1 (`IPv4` parser)](#task-1-ipv4-parser)
  - [task 2 (`IPv6` parser)](#task-2-ipv6-parser)
  - [task 3 (combined `IPv4` and `IPv6` parser)](#task-3-combined-ipv4-and-ipv6-parser)
  - [task 4 (`IPv4` utility functions)](#task-4-ipv4-utility-functions)
  - [task 5 (`IPv6` utility functions)](#task-5-ipv6-utility-functions)
  - [task 6 (exclude `IPv4` subnets from `IPv4` subnets)](#task-6-exclude-ipv4-subnets-from-ipv4-subnets)
  - [task 7 (exclude `IPv6` subnet from `IPv6` subnet)](#task-7-exclude-ipv6-subnet-from-ipv6-subnet)
  - [task 8 (`CLI` program which excludes some subnets from given subnets, supports `IPv4` and `IPv6` mixed)](#task-8-cli-program-which-excludes-some-subnets-from-given-subnets-supports-ipv4-and-ipv6-mixed)
  - [(bonus) task 9 (merge `IPv4` subnets)](#bonus-task-9-merge-ipv4-subnets)
  - [(bonus) task 10 (merge `IPv6` subnets)](#bonus-task-10-merge-ipv6-subnets)
  - [(bonus) task 11 (multi-threaded version of `CLI` program which excludes some subnets from given subnets)](#bonus-task-11-multi-threaded-version-of-cli-program-which-excludes-some-subnets-from-given-subnets)

<!-- markdown-toc end -->

# Test tasks for typescript developer

#### -

#### rules

- Tasks related with each-other, so please do them step by step.
- When you done with some task, check if `eslint` is happy by running `npm run lint`.
- It is not required to do all tasks, you can stop in any point and send results - it is fine.
- You can use any libraries, we recommend `fp-ts`, `effect-ts` and `parser-ts`.
- The weight of libraries is not critical for these tasks.
- On every task, there are one or more in-completed functions.
  In-completed functions has `hole()`, your task is to implement appropriate logic instead of `hole()`.

#### task 1 (`IPv4` parser)

Write `IPv4` parser, by finalizing implementation of the `parseIP4List` function in [./src/ip4/ip4-parser.ts](./src/ip4/ip4-parser.ts).

Requirements:

- any lines starting by hashtag `#` should be treated as comment, and should not influence the result.
- any lines starting by spaces followed by hashtag `#` should be treated as comments as well.
- empty lines should not influence the result.
- `IP`s could be separated by comments/new lines (`\n`)/spaces or backslash followed by letter `n` (it is `\\n` - don't confuse with new lines).
- in case of invalid symbols, return `Left<string>`.

Example input:

```
# Country: Madagascar (MG)
# IP version: IPv4
# Delegation status: Allocated || Assigned
# Mode: Aggregated
#
41.63.128.0/19
41.74.16.0/20
41.74.208.0/20
41.77.16.0/21
41.188.0.0/18
41.190.236.0/22
41.204.96.0/19
41.207.32.0/19
41.242.96.0/20
102.16.0.0/14
102.20.0.0/15
102.68.192.0/18
154.120.128.0/18
154.126.0.0/17
196.43.214.0/24
196.49.13.0/24
196.192.32.0/20
196.223.41.0/24
197.148.128.0/18
197.149.0.0/18
197.158.64.0/18
197.159.144.0/20
197.215.192.0/20 127.0.0.0/8 10.0.0.0/8 172.16.0.0/12 \n192.168.0.0/16
```

#### task 2 (`IPv6` parser)

Write `IPv6` parser, by finalizing implementation of the `parseIP6List` function in [./src/ip6/ip6-parser.ts](./src/ip6/ip6-parser.ts).

Requirements: same as in the previous task.

Example input:

```
# Country: Madagascar (MG)
# IP version: IPv6
# Delegation status: Allocated || Assigned
# Mode: Aggregated
#
2001:4398::/32
2001:43f8:290::/48
2001:43f8:a10::/47
2c0f:f1c8::/32 2c0f:f9f0::/32\n 2c0f:fa28::/32 fd00::/8
```

#### task 3 (combined `IPv4` and `IPv6` parser)

Write combined `IPv4` and `IPv6` parser, by finalizing implementation of the `parseIPList` function in [./src/ip/ip-parser.ts](./src/ip/ip-parser.ts).

Requirements: same as in the previous task.

Example input:

```
# Country: Madagascar (MG)
# IP version: IPv4
# Delegation status: Allocated || Assigned
# Mode: Aggregated
#
41.63.128.0/19
41.74.16.0/20
41.74.208.0/20
41.77.16.0/21
41.188.0.0/18
41.190.236.0/22
41.204.96.0/19
41.207.32.0/19
41.242.96.0/20
102.16.0.0/14
102.20.0.0/15
# Country: Madagascar (MG)
# IP version: IPv6
# Delegation status: Allocated || Assigned
# Mode: Aggregated
#
2001:4398::/32
2001:43f8:290::/48
2001:43f8:a10::/47
2c0f:f1c8::/32 2c0f:f9f0::/32\n 2c0f:fa28::/32 fd00::/8
102.68.192.0/18
154.120.128.0/18
154.126.0.0/17
196.43.214.0/24
196.49.13.0/24
196.192.32.0/20
196.223.41.0/24
197.148.128.0/18
197.149.0.0/18
197.158.64.0/18
197.159.144.0/20
197.215.192.0/20 127.0.0.0/8 10.0.0.0/8 172.16.0.0/12 \n192.168.0.0/16
```

#### task 4 (`IPv4` utility functions)

Write `IPv4` utility functions, by finalizing implementation of the functions in [./src/ip4/ip4.ts](./src/ip4/ip4.ts).

#### task 5 (`IPv6` utility functions)

Write `IPv6` utility functions, by finalizing implementation of the functions in [./src/ip6/ip6.ts](./src/ip6/ip6.ts).

#### task 6 (exclude `IPv4` subnets from `IPv4` subnets)

Write a function that excludes `IPv4` subnets from given `IPv4` subnets, by finalizing implementation of the `ip4ExcludeSubnets` in [./src/ip4/ip4-exclude-subnets.ts](./src/ip4/ip4-exclude-subnets.ts).

#### task 7 (exclude `IPv6` subnet from `IPv6` subnet)

Write a function that excludes `IPv6` subnets from given `IPv6` subnets, by finalizing implementation of the `ip6ExcludeSubnets` in [./src/ip6/ip6-exclude-subnets.ts](./src/ip6/ip6-exclude-subnets.ts).

#### task 8 (`CLI` program which excludes some subnets from given subnets, supports `IPv4` and `IPv6` mixed)

Write a `CLI` program which excludes some subnets from given subnets, by finalizing implementation of the `excludeSubnets` in [./src/cli.ts](./src/cli.ts).

#### (bonus) task 9 (merge `IPv4` subnets)

Write a function that merges `IPv4` subnets, by finalizing implementation of the `ip4MergeSubnets` in [./src/ip4/ip4-merge-subnets.ts](./src/ip4/ip4-merge-subnets.ts).

#### (bonus) task 10 (merge `IPv6` subnets)

Write a function that merges `IPv6` subnets, by finalizing implementation of the `ip6MergeSubnets` in [./src/ip6/ip6-merge-subnets.ts](./src/ip6/ip6-merge-subnets.ts).

#### (bonus) task 11 (multi-threaded version of `CLI` program which excludes some subnets from given subnets)

Write multi-threaded version of `CLI` program from `task 8`.
