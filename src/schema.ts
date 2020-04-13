import { Module } from "vuex";

export function Schema<S extends Module<any, any>>(s: S): S {
  return s;
}
