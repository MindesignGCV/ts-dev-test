import * as O from "./option";
import * as E from "./either";
import { pipe } from "./pipe";
import { hole } from "./hole";

const parseArguments = (
  args: readonly string[]
): O.Option<{ readonly subnetsA: string; readonly subnetsB: string }> => {
  if (!args[0] || !args[1]) {
    return O.none;
  }

  return O.some({
    subnetsA: args[0],
    subnetsB: args[1],
  });
};

/**
 * Parses and excludes subnets `b` from subnets `a`, and returns a resulting list separated by new line.
 */
export const excludeSubnets: (
  subnetsB: string
) => (subnetsA: string) => string = hole();

pipe(
  process.argv.slice(2),
  parseArguments,
  O.fold(
    (): E.Either<string, string> =>
      E.left(
        "Wrong arguments, please provide exactly two arguments, both should be a list of subnets."
      ),
    ({ subnetsA, subnetsB }): E.Either<string, string> =>
      pipe(subnetsA, excludeSubnets(subnetsB), E.right)
  ),
  E.fold(
    (err) => process.stderr.write(err),
    (result) => process.stdout.write(result)
  )
);
