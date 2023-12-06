<script setup> 
import Ripple from "../../src/examples/style/Ripple.vue"
</script>

# Ripple Directive

The `v-ripple` directive is used to add ripple effect to any element.

## Usage

```vue
<template>
<!-- by default the speed will be slow and color will be #f2f2f29e -->
  <div v-ripple>Click me</div>
  <!-- handle spread speed -->
  <div v-ripple.fast">Fast Spread</div>
  <div v-ripple.slow">Slow Spread</div>
  <!-- custom ripple color(any color value eg,red,#f6f6f7) -->
<div v-ripple="'red'">Red Ripple</div>
</template>
```

<Ripple/>

::: details View Code
<<< ../../src/examples/style/Ripple.vue
:::

## Arguments

The `v-ripple` directive does not accept any arguments.

## Modifiers

The `v-ripple` directive accepts the following modifiers:

| Modifier | Description                 |
| -------- | --------------------------- |
| `fast`   | The ripple will spread fast |
| `slow`   | The ripple will spread slow |

## Source Code

<<< ../../code/style/v-ripple.js
