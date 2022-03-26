<!--
 * @Author: Quarter
 * @Date: 2022-03-18 07:00:32
 * @LastEditTime: 2022-03-26 05:42:42
 * @LastEditors: Quarter
 * @Description: 纯路由
 * @FilePath: /vue2-template/src/components/common-router/index.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "CommonRouter",
});
</script>