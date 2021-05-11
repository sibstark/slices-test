export interface IAjaxMode {
  fetching?: boolean;
  fetched?: boolean;
  error?: any;
}
export interface IBaseStore extends IAjaxMode {
  root?: IRootStore;
  inject?: (root: IRootStore) => void;
}
export interface IRootStore {
  auth: IAuthStore;
}
export type User = {
  name: string;
  isAuthorized: boolean;
  roles: string[];
};

export interface IAuthStore extends IBaseStore {
  user: User;
  assignUser: (user: User) => void;
}
