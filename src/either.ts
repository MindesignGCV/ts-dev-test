export type Right<T> = { readonly _tag: "right"; readonly right: T };
export type Left<T> = { readonly _tag: "left"; readonly left: T };

export type Either<L, R> = Left<L> | Right<R>;

export const left = <T>(value: T): Either<T, never> => ({
  _tag: "left",
  left: value,
});

export const right = <T>(value: T): Either<never, T> => ({
  _tag: "right",
  right: value,
});

export const fold =
  <L, R, B1, B2>(
    onLeft: (a: L) => B1,
    onRight: (a: R) => B2
  ): ((either: Either<L, R>) => B1 | B2) =>
  (either: Either<L, R>): B1 | B2 =>
    either._tag === "left" ? onLeft(either.left) : onRight(either.right);
