import { createDomain } from "effector";

export const daysDomain = createDomain();

export const $days = daysDomain.store<number>(0);

export const setDay = daysDomain.event<number>();
export const nextDay = daysDomain.event();
export const previousDay = daysDomain.event();
