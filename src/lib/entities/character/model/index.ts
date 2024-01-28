import { createDomain } from "effector";
export type Nullable<T> = T | null;
export type Character = {
  name: string;
};
export const characterDomain = createDomain();
export const character = characterDomain.store<Nullable<Character>>(null);
