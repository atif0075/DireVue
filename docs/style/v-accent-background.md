<script setup> 
import AccentBackground from "../../src/examples/style/AccentBackground.vue"
</script>

# Accent Bacground Directive

The `v-accent-background` directive is used to add `hover` and `active` background color to any element. It is useful when you want to add hover and active background color to any element without writing any css. Furthermore, you can also customize the background color.

## Usage

```vue
<template>
  <button
    class="px-4 py-2 rounded-full bg-red-600 text-white"
    v-accent-background
  >
    Click me
  </button>
</template>
```

<AccentBackground/>

::: details View Code
<<< ../../src/examples/style/AccentBackground.vue
:::

## Customization

You can customize the background color of both `hover` and `active` state by passing the colors in an object to the directive.

```vue
<template>
  <div v-accent-background="{ hover: 'red', active: 'blue' }">Click me</div>
  <button
    v-accent-background="{
      hover: '#16A34A', // you can use any valid css color value
      active: '#14532D', // you can use any valid css color value
    }"
  >
    Click me
  </button>
</template>
```

## Arguments

The `v-accent-background` directive does not accept any arguments.

## Modifiers

The `v-accent-background` directive does not accept any modifiers.

## Source Code

<<< ../../code/style/v-accent-background.js
