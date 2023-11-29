<script setup> 
import Disable from "../../src/examples/general/Disable.vue"
</script>

# Disable Directive

The `v-disable` directive can be used to disable or enable an element based on a binding value.

## Usage

The `v-disable` directive can be used as follows:

<div class="space-x-2">
  <button v-disable
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg">
  Disabled
  </button>
  <button v-disable="false" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg">
  Enabled
  </button>
</div>

```vue
<template>
  <div class="space-x-2">
    <button v-disable>Disabled</button>
    <button>Enabled</button>
  </div>
</template>
```

## Conditional Disable

The `v-disable` directive can be used to conditionally disable an element. This is useful when you want to disable an element only when a certain condition is met.

<Disable/>

::: details View Code
<<< ../../src/examples/general/Disable.vue
:::

## Arguments

The `v-disable` directive does not accept any arguments.

## Modifiers

The `v-disable` directive does not accept any modifiers.

## Source Code

<<< ../../code/general/v-disable.js