import { useMemo } from "react";
import { IAuthStore, IBaseStore, IRootStore } from "./types";
import { AuthStore } from "./auth";

type Class<T> = new (...args: any[]) => T;
export function createStorage<T extends IBaseStore>(
  theClass: Class<T>,
  ...args: any[]
): T {
  return new theClass(args);
}

export class RootStore implements IRootStore {
  auth = createStorage<IAuthStore>(AuthStore, this);
}
let store: IRootStore;

function initializeStore(): IRootStore {
  const s = store ?? new RootStore();
  // Create the store once in the client
  if (!store) store = s;
  return s;
}

export const useStore = (): IRootStore => {
  return useMemo(() => initializeStore(), []);
};
