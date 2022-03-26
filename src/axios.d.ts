/// <reference types="vite/client" />

import { AxiosInstance } from "axios";

declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
  interface VueConstructor {
    $axios: AxiosInstance;
  }
}