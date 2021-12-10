import { Either } from "@app/either";
import { hole } from "@app/hole";
import { IP4Range } from "./ip4";

export const parseIP4List: (
  input: string
) => Either<string, readonly IP4Range[]> = hole();
