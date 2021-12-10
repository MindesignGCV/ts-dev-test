import { hole } from "@app/hole";
import { IP4Range } from "./ip4";

/**
 * Excludes subnets `b` from subnets `a`.
 */
export const ip4ExcludeSubnets: (
  b: readonly IP4Range[]
) => (a: readonly IP4Range[]) => readonly IP4Range[] = hole();
