import { hole } from "@app/hole";
import { IP4Range } from "./ip4";

/**
 * Merges given subnets.
 */
export const ip4MergeSubnets: (
  input: readonly IP4Range[]
) => readonly IP4Range[] = hole();
