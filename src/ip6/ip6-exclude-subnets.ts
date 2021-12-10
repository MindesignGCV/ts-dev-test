import { hole } from "@app/hole";
import { IP6Range } from "./ip6";

/**
 * Excludes subnets `b` from subnets `a`.
 */
export const ip6ExcludeSubnets: (
  b: readonly IP6Range[]
) => (a: readonly IP6Range[]) => readonly IP6Range[] = hole();
