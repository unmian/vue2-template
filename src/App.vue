<!--
 * @Author: Quarter
 * @Date: 2022-03-16 03:34:42
 * @LastEditTime: 2022-03-26 06:30:34
 * @LastEditors: Quarter
 * @Description: 主应用入口
 * @FilePath: /vue2-template/src/App.vue
-->
<template>
  <!-- <router-view></router-view> -->
  <button @click="test">123</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "Application",
  data() {
    return {
      name: "123",
    };
  },
  methods: {
    test(): void {
      this.name = "456";
    },
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>