import moment from "moment";

export function serializeParams(params: any) {
  if (!params) {
    return "";
  }
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
}

export function generateRequestUrlWithParams(url: string, params: any) {
  params = typeof params === "string" ? params : serializeParams(params);
  if (params) {
    url += (~url.indexOf("?") ? "&" : "?") + params;
  }
  url = url.replace("?&", "?");
  return url;
}

export function getUrlParams(url = "") {
  const params: any = {};
  url = url.replace(/#.*$/, "");
  const queryArray = url.split(/[?&]/).slice(1);
  queryArray.forEach(item => {
    const match = item.match(/([^=]+)=([^=]+)/);
    if (match != null) {
      params[match[1]] = decodeURIComponent(match[2]);
    }
  });
  return params;
}

export function debounce(fn: Function, wait: number = 500) {
  let timer: any = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, wait);
  };
}
