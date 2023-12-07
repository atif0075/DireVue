<script setup> 
import Swipe from "../../src/examples/touch/Swipe.vue"
</script>

# Swipe Directive

The `v-swipe` directive is used to add Swipe effect to any element.

## Usage

```vue
<template>
  <div v-swipe="handleSwipeFunc"></div>
  <div v-swipe:left="handleSwipeFunc"></div>
  <div v-swipe:right="handleSwipeFunc"></div>
  <div v-swipe:up="handleSwipeFunc"></div>
  <div v-swipe:down="handleSwipeFunc"></div>
</template>
```

<Swipe/>

::: details View Code
<<< ../../src/examples/touch/Swipe.vue
:::

## Arguments

The `v-swipe` directive accepts following arguments:

| Argument | Type     | Default | Description                 |
| -------- | -------- | ------- | --------------------------- |
| `left`   | `String` | `null`  | The direction of the swipe. |
| `right`  | `String` | `null`  | The direction of the swipe. |
| `up`     | `String` | `null`  | The direction of the swipe. |
| `down`   | `String` | `null`  | The direction of the swipe. |

## Modifiers

The `v-swipe` directive does not accept any modifiers.

## Source Code

<<< ../../code/touch/v-swipe.js
