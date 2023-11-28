<script setup>
import vFocus from "../../src/examples/general/v-focus.vue"
import ConditionaFocus from "../../src/examples/general/Focus/ConditionaFocus.vue"
</script>

# Focus Directive

The `v-focus` directive is used to automatically focus an input element when the page is loaded or a component is created. It is also used to focus an element when it is dynamically added to the DOM (using `v-if` or `v-for`).

## Usage

```html
<input v-focus />
```

## Focus on Mount

The `v-focus` directive is used to focus an element when the page is loaded or a component is created. It is also used to focus an element when it is dynamically added to the DOM (using `v-if` or `v-for`).

```vue
<template>
  <input v-focus />
</template>
```

## Focus Lock

The `v-focus:lock` directive is used to lock the focus to an element. This is useful when you want to prevent the user from tabbing out of an input element.

```vue
<template>
  <input v-focus:lock />
</template>
```

## Lock on Focus

The `v-focus:lockonFocus` directive is used to lock the focus to an element when it is focused. This is useful when you want to prevent the user from tabbing out of an input element.

```vue
<template>
  <input v-focus:lockonFocus />
</template>
```

## Conditional Focus Lock

The `v-focus` directive can be used to conditionally focus an element. This is useful when you want to focus an element only when a certain condition is met.

<div class="w-full h-auto py-5 flex flex-col ">
<ConditionaFocus />
</div>

::: details View Code
<<< ../../src/examples/general/Focus/ConditionaFocus.vue
:::

## Arguments

The `v-focus` directive accepts three arguments `lockonFocus`, `lock` and `lockonCondition`.

## Modifiers

The `v-focus` directive does not accept any modifiers.

## Source Code

<<< ../../code/general/v-focus.js
