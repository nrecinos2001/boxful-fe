import { ChangeEvent } from "react";

export function getValue(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
  return event.target.value;
}