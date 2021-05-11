import React from "react";
import { observer } from "mobx-react";
import { useStorageContext } from "@slices/infrastructure";

export const SearchPage: React.FC = observer(() => {
  const storage = useStorageContext();
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    storage.auth.assignUser({
      name: e.target.value,
      isAuthorized: true,
      roles: []
    });
  };
  return (
    <div>
      <input value={storage.auth.user.name} onChange={onChangeName} />
      {storage.auth.user.name}
    </div>
  );
});
