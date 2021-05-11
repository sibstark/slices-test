import { makeObservable, observable, action } from "mobx";
import { IAuthStore, IRootStore, User } from "../types";

export class AuthStore implements IAuthStore {
  root;
  @observable fetching = false;
  @observable fetched = false;
  @observable error = null;
  @observable user = {
    name: "",
    isAuthorized: false,
    roles: [] as string[]
  };
  constructor(root: IRootStore) {
    this.root = root;
    makeObservable(this);
  }

  @action assignUser = (user: User) => {
    this.user = user;
  };
}
