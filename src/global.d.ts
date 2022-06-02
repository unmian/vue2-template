/*
 * @Author: Quarter
 * @Date: 2022-03-26 04:38:33
 * @LastEditTime: 2022-05-31 05:49:58
 * @LastEditors: Quarter
 * @Description: 全局类型
 * @FilePath: /vue2-template/src/global.d.ts
 */

import { AxiosInstance } from "axios";

declare global {
  interface Window {
    axios: AxiosInstance;
  }
}
