<!--
 * @Author: Quarter
 * @Date: 2022-03-18 07:00:32
 * @LastEditTime: 2022-06-02 03:47:01
 * @LastEditors: Quarter
 * @Description: 纯路由界面
 * @FilePath: /vue2-template/src/views/framework/common-router.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "CommonRouter",
})
export default class CommonRouter extends Vue {}
</script>
