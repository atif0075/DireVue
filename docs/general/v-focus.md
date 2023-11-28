# Focus Directive

The `v-focus` directive is used to automatically focus an input element when the page is loaded or a component is created. It is also used to focus an element when it is dynamically added to the DOM (using `v-if` or `v-for`).

## Usage

```html
<input v-focus />
```

```js
  mounted(el, binding) {
    if (binding.value) {
      el.focus();
    }
    // lock focus to the element
    else if (binding.value === "lock") {
      el.onblur = () => el.focus();
    }
    // on certain condition, focus the element
    else if (binding.value) {
      el.focus();
    }
  },
```

## Arguments

The `v-focus` directive does not accept any arguments.

## Modifiers

The `v-focus` directive does not accept any modifiers.

## Examples

### Basic Example

```vue
<template>
  <input v-focus />
</template>
```

### Example with `v-if`

```vue
<template>
  <div>
    <button @click="showInput = !showInput">Toggle Input</button>
    <input v-if="showInput" v-focus />
  </div>
</template>

<script setup>
import { ref } from "vue";
const showInput = ref(false);

// ...
</script>
```

### Code

<<< ../../code/general/v-focus.js
