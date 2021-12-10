import { Either } from "@app/either";
import { hole } from "@app/hole";
import { IP4Range } from "@app/ip4/ip4";
import { IP6Range } from "@app/ip6/ip6";

export const parseIPList: (
  input: string
) => Either<
  string,
  { readonly v4: readonly IP4Range[]; readonly v6: readonly IP6Range[] }
> = hole();
