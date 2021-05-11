import React from "react";
import { Summ } from "@slices/utils";
import { Text } from "@slices/ui";
import { SearchPage } from "@slices/pages";
import { useStore, StorageProvider } from "@slices/infrastructure";
import logo from "../logo.svg";
import "./app.scss";

export const Application = (): React.ReactElement => {
  const s = Summ(1, 2);
  const store = useStore();
  return (
    <StorageProvider value={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>{s}</div>
          <Text />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <SearchPage />
        </header>
      </div>
    </StorageProvider>
  );
};
