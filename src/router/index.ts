/*
 * @Author: Quarter
 * @Date: 2022-03-16 03:40:15
 * @LastEditTime: 2022-05-31 05:48:30
 * @LastEditors: Quarter
 * @Description: vue-router 入口
 * @FilePath: /vue2-template/src/router/index.ts
 */
import Vue from "vue";
import Component from "vue-class-component";
import VueRouter, { RouteConfig } from "vue-router";

Component.registerHooks([
  "beforeRouteEnter", // 进入路由之前
  "beforeRouteLeave", // 离开路由之前
  "beforeRouteUpdate", // 路由更新之前
]);

Vue.use(VueRouter);

const routes: RouteConfig[] = [];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
