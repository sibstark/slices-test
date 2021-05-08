export type Request = {
  path: string;
  method: Methods;
  body?: any | null | Blob | FormData;
  query?: Record<string, unknown>;
  headers?: Record<string, string>;
  token?: string | null;
};

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}
