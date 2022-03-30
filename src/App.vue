<!--
 * @Author: Quarter
 * @Date: 2022-03-16 03:34:42
 * @LastEditTime: 2022-03-30 02:59:09
 * @LastEditors: Quarter
 * @Description: 主应用入口
 * @FilePath: /vue2-template/src/App.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Application",
})
export default class Application extends Vue { }
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>