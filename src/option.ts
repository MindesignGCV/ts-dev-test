export type None = { readonly _tag: "none" };
export type Some<T> = { readonly _tag: "some"; readonly value: T };

export type Option<T> = None | Some<T>;

export const none: None = { _tag: "none" };

export const some = <T>(value: T): Some<T> => ({ _tag: "some", value });

export const fold =
  <T, B1, B2>(onNone: () => B1, onSome: (a: T) => B2) =>
  (option: Option<T>): B1 | B2 =>
    option._tag === "none" ? onNone() : onSome(option.value);
