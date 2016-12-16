/**
 * Fraction is used by a client to specify what specific part of the model client is interested in (to load partial model).
 */
export type Fraction<T> = {
    [P in keyof T]?: Fraction<T[P]>|boolean;
}