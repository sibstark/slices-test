import { Methods } from "./types";
import { contentIs, makeRequest } from "./common";

const checkStatus = async (response: Response): Promise<any> => {
  if (response?.status && response.status >= 200 && response.status < 300) {
    return contentIs(response.headers, "application/json")
      ? response.json()
      : response.text();
  } else if (response.status === 401) {
    /* logout action */
  } else {
    const responseError = await response.json();
    if (Array.isArray(responseError.error)) {
      throw responseError.error.map((error: any) => ({
        type: error.type,
        status: error.code,
        message: error.message
      }));
    } else {
      throw responseError;
    }
  }
};
export class Api {
  tokenProvider;
  constructor(tokenProvider: null | (() => string) | (() => Promise<string>)) {
    this.tokenProvider = tokenProvider;
  }

  getToken = async (): Promise<string | null> => {
    if (this.tokenProvider) {
      return Promise.resolve(this.tokenProvider());
    }

    return Promise.resolve(null);
  };

  public get = async (
    url: string,
    query: Record<string, unknown>,
    body?: any | null | Blob | FormData,
    headers?: Record<string, string>
  ): Promise<any> => {
    const token = await this.getToken();
    const response = await makeRequest({
      path: url,
      method: Methods.GET,
      body,
      headers,
      query,
      token: token
    });
    return checkStatus(response);
  };

  public post = async (
    url: string,
    body?: any | null | Blob | FormData,
    headers?: Record<string, string>
  ): Promise<any> => {
    const token = await this.getToken();
    const response = await makeRequest({
      path: url,
      method: Methods.POST,
      body,
      headers,
      token: token
    });
    return checkStatus(response);
  };

  public put = async (
    url: string,
    body?: any | null | Blob | FormData,
    headers?: Record<string, string>
  ): Promise<any> => {
    const token = await this.getToken();
    const response = await makeRequest({
      path: url,
      method: Methods.PUT,
      body,
      headers,
      token: token
    });
    return checkStatus(response);
  };

  public delete = async (
    url: string,
    body?: any | null | Blob | FormData,
    headers?: Record<string, string>
  ): Promise<any> => {
    const token = await this.getToken();
    const response = await makeRequest({
      path: url,
      method: Methods.DELETE,
      body,
      headers,
      token: token
    });
    return checkStatus(response);
  };
}
