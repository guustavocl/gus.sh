import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BRTimeFormatter = new Intl.DateTimeFormat(undefined, {
  timeZone: "America/Sao_Paulo",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
});
