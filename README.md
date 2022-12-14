# vue-next-ellipsis [![npm](https://img.shields.io/npm/v/vue-next-ellipsis.svg)](https://npmjs.com/package/vue-next-ellipsis)
## Install and basic usage

```bash
$ npm install vue-next-ellipsis
```
Register the component

```html
<script lang="ts" setup>
import { Ellipsis } from 'vue-next-ellipsis';
</script>
<template>
  <div style="font-size:20px">
    <Ellipsis
      content="测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字"
      :rows="3"
      fold-text="全文>"
      ellipsis-text="..."
      @fold-click="location.href = 'https://github.com/huogui'"
    />
  </div>
</template>
```
```ts
// main.ts
import { createApp } from 'vue'
import Ellipsis from 'vue-next-ellipsis'
import App from './App.vue'

const app = createApp(App)
app.use(Ellipsis)
app.mount('#app')

```

## Options

```ts
export const ellipsisProps = {
  content: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 3,
  },
  foldVisible: Boolean,
  foldText: {
    type: String,
    default: 'more>',
  },
  ellipsisText: {
    type: String,
    default: '...',
  },
}

```
## License

MIT


