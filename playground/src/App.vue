<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <Ellipsis
      content="测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字"
      :rows="3"
      fold-text="全文>"
      ellipsis-text="..."
    />
  </div>
</template>

<style scoped>
.wrapper{
  font-size:20px;
}
</style>
