## Install and basic usage

```bash
$ npm install vue-next-ellipsis
```


Register the component

```js
import Vue from 'vue'
import VueNextEllipsis from 'vue-next-ellipsis'

// optionally import default styles
import 'vue-next-ellipsis/dist/style.css'

Vue.component('vue-next-ellipsis', VueNextEllipsis)
```

You may now use the component in your markup

```vue
<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
   <vue-next-ellipsis  
      content="测试文字测试文字测试文字测试文字测试文字测试文字测试文字"
      :rows="3"
      fold-text="全文>"
      ellipsis-text="...">
  </div>
</template>

<script>
import VueNextEllipsis from 'vue-next-ellipsis'

export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>
```

### Props
