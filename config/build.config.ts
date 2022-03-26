/*
 * @Author: Quarter
 * @Date: 2022-03-16 03:31:25
 * @LastEditTime: 2022-03-26 06:46:18
 * @LastEditors: Quarter
 * @Description: vite 配置
 * @FilePath: /vue2-template/config/build.config.ts
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  define: {
    OSS: { // 对象存储
      name: "local",
      url: "/oss",
    },
  },
  css: {
    postcss: {
      plugins: [
        require("autoprefixer"),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `$oss: "/oss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      api: resolve(__dirname, "../src/api"),
      components: resolve(__dirname, "../src/components"),
      config: resolve(__dirname, "../src/config"),
      constants: resolve(__dirname, "../src/constants"),
      data: resolve(__dirname, "../src/data"),
      directives: resolve(__dirname, "../src/directives"),
      filters: resolve(__dirname, "../src/filters"),
      lib: resolve(__dirname, "../src/lib"),
      router: resolve(__dirname, "../src/router"),
      store: resolve(__dirname, "../src/store"),
      utils: resolve(__dirname, "../src/utils"),
      views: resolve(__dirname, "../src/views"),
    },
  },
  plugins: [
    createVuePlugin({ include: [/\.vue$/] }), ,
  ],
});