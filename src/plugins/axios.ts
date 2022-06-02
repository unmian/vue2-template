/*
 * @Author: Quarter
 * @Date: 2022-03-16 03:37:54
 * @LastEditTime: 2022-05-31 05:55:17
 * @LastEditors: Quarter
 * @Description:
 * @FilePath: /vue2-template/src/plugins/axios.ts
 */
import Vue, { PluginObject } from "vue";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL: string = __API__.base.toString() || "/api";

const config: AxiosRequestConfig<any> = {
  baseURL,
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (cfg: AxiosRequestConfig) => {
    // Do something before request is sent
    return cfg;
  },
  (err: AxiosError) => {
    // Do something with request error
    return Promise.reject(err);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // Do something with response data
    return res;
  },
  (err: AxiosError) => {
    // Do something with response error
    return Promise.reject(err);
  },
);

const Plugin: PluginObject<any> = {
  install: (vue: typeof Vue) => {
    // eslint-disable-next-line no-param-reassign
    vue.$axios = instance;
  },
};
Plugin.install = (vue) => {
  // eslint-disable-next-line no-param-reassign
  vue.$axios = instance;
  window.axios = instance;
  Object.defineProperties(vue.prototype, {
    $axios: {
      get() {
        return instance;
      },
    },
  });
};

export default Plugin;

export { instance };
