/*
 * @Author: Quarter
 * @Date: 2022-03-16 03:40:15
 * @LastEditTime: 2022-03-26 05:22:42
 * @LastEditors: Quarter
 * @Description: vue-router 入口
 * @FilePath: /vue2-template/src/router/index.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;