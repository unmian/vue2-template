/*
 * @Author: Quarter
 * @Date: 2022-03-16 03:04:20
 * @LastEditTime: 2022-03-26 06:19:46
 * @LastEditors: Quarter
 * @Description: 主程序
 * @FilePath: /vue2-template/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "router";
import store from "store";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");