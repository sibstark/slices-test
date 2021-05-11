import { createContext, useContext } from "react";
import { IAuthStore, IRootStore } from "./types";

export const StorageContext = createContext<IRootStore>({
  auth: {} as IAuthStore
});
export const StorageConsumer = StorageContext.Consumer;
export const StorageProvider = StorageContext.Provider;

export const useStorageContext = (): IRootStore =>
  useContext<IRootStore>(StorageContext);
