<!--
 * @Author: Quarter
 * @Date: 2022-03-16 03:34:42
 * @LastEditTime: 2022-03-26 11:56:18
 * @LastEditors: Quarter
 * @Description: 主应用入口
 * @FilePath: /vue2-template/src/App.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "Application",
});
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>