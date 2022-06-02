/*
 * @Author: Quarter
 * @Date: 2022-03-26 04:38:33
 * @LastEditTime: 2022-05-31 05:50:16
 * @LastEditors: Quarter
 * @Description: axios 类型声明
 * @FilePath: /vue2-template/src/axios.d.ts
 */

import { AxiosInstance } from "axios";

declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
  interface VueConstructor {
    $axios: AxiosInstance;
  }
}
