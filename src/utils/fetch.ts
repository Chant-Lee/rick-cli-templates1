import { generateRequestUrlWithParams } from "./utils";

export function myFetchGet(url: string, data: any = {}, options: any = {}) {
  const newUrl = generateRequestUrlWithParams(url, data);
  return myFetch(newUrl, { ...options, method: "GET" });
}
export function myFetchPost(url: string, data: any = {}, options: any = {}) {
  return myFetch(url, {
    ...options,
    ...{ body: JSON.stringify(data) },
    method: "POST"
  });
}
export function myFetchPut(url: string, data: any = {}, options: any = {}) {
  return myFetch(url, {
    ...options,
    ...{ body: JSON.stringify(data) },
    method: "PUT"
  });
}
export function myFetchDelete(url: string, data: any = {}, options: any = {}) {
  return myFetch(url, {
    ...options,
    ...{ body: JSON.stringify(data) },
    method: "DELETE"
  });
}
export function myFetchUpload(url: string, data: any = {}, options: any = {}) {
  const newUrl = generateRequestUrlWithParams(url, data);
  return myFetch(newUrl, { ...options, method: "GET", type: "upload" });
}

const HTTP_ERROR_CODES = [400, 402, 403, 404, 405, 406, 5];

export function myFetch(url: string, configOptions: any = {}) {
  const options = Object.assign(
    {
      timeout: 40 * 1000,
      headers: new Headers({ "content-type": "application/json" })
    },
    configOptions
  );
  const { timeout } = options;
  return new Promise((resolve, reject) => {
    // 超时异常处理
    const timer = setTimeout(() => {
      reject(new Error(`ERROR_TIMEOUT:${timeout}`));
    }, timeout);
    fetch(url, options)
      .then((data: any) => {
        if (data.status && HTTP_ERROR_CODES.includes(data.status)) {
          throw new Error(
            `invalid response from server, status: ${data.status}`
          );
        }

        clearTimeout(timer);
        resolve(data);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  })
    .then((response: any) => {
      // 服务器异常处理
      if (response.ok) {
        return (
          response
            .json()
            // 接口数据解码异常处理
            .catch((err: any) => Promise.reject(new Error("ERROR_DECODE_JSON")))
        );
      } else {
        return response
          .json()
          .then(err => Promise.reject(err.message || "Internal Server Error"));
        // return Promise.reject(
        //   new Error(`ERROR_STATUS_CODE:${response.status}`)
        // );
      }
    })
    .then(v => {
      // 业务逻辑异常处理
      if (v.code !== 0) {
        return Promise.reject(new Error(`ERROR_LOGIC_CODE:${v.code}`));
      } else {
        return v.data;
      }
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export const $fetch = {
  get: myFetchGet,
  post: myFetchPost,
  put: myFetchPut,
  del: myFetchDelete,
  upload: myFetchUpload
};
