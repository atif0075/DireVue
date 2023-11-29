<script setup> 
import ScrollToView from "../../src/examples/general/ScrollToView.vue"
</script>

# Scroll To View Directive

The `v-scroll-to` directive is used to scroll to an element when it is clicked. It is also used to scroll to an element when it is dynamically added to the DOM (using `v-if` or `v-for`).

## Usage

```vue
<template>
  <button v-scroll-to-view="'targetId'">
    <span>Scroll to view</span>
  </button>
</template>
```

<ScrollToView/>

::: details View Code
<<< ../../src/examples/general/ScrollToView.vue
:::

## Arguments

The `v-scroll-to` directive does not accept any arguments.

## Modifiers

The `v-scroll-to` directive does not accept any modifiers.

## Source Code

<<< ../../code/general/v-scroll-to-view.js
