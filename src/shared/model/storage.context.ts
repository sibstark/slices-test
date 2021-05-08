import { createContext, useContext } from "react";

export const StorageContext = createContext({});
export const StorageConsumer = StorageContext.Consumer;
export const StorageProvider = StorageContext.Provider;

export const useStorageContext = useContext(StorageContext);
