import qs from "qs";
import { Request } from "./types";

export const queryToString = (
  query: Record<string, any> | undefined
): string => {
  return query
    ? qs.stringify(query, { addQueryPrefix: true, encode: false })
    : "";
};

export const defaultHeaders = (headers: Headers): void => {
  if (!headers.has("accept")) {
    headers.set("accept", "application/json");
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
};

export const contentIs = (headers: Headers, type: string): boolean => {
  return headers.get("content-type")?.includes(type) ?? false;
};

export const authorizationHeader = (
  headers: Headers,
  token?: string | null
) => {
  if (token) {
    headers.set("authorization", token);
  }
};

export const makeRequest = ({
  path,
  method,
  body,
  headers,
  query,
  token
}: Request): Promise<Response> => {
  const q = queryToString(query);
  const h = new Headers(headers);
  const b =
    contentIs(h, "application/json") && body ? JSON.stringify(body) : body;
  defaultHeaders(h);
  authorizationHeader(h, token);
  return fetch(path + q, {
    method: method,
    headers: h,
    body: b,
    credentials: "same-origin"
  });
};
