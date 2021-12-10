import { Either } from "@app/either";
import { hole } from "@app/hole";
import { IP6Range } from "./ip6";

export const parseIP6List: (
  input: string
) => Either<string, readonly IP6Range[]> = hole();
