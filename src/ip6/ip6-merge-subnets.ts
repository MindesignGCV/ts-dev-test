import { hole } from "@app/hole";
import { IP6Range } from "./ip6";

/**
 * Excludes subnet `b` from subnet `a`.
 */
export const ip6MergeSubnets: (
  input: readonly IP6Range[]
) => readonly IP6Range[] = hole();
