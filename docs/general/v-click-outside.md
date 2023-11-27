# Click-Outside Directive

The `v-click-outside` directive is used to detect clicks outside of an element. It is useful for closing dropdowns, modals, and other components that require a click outside to close.

## Usage

```html
<div v-click-outside="onClickOutside">
  <!-- Your content here -->
</div>
```

## Arguments

The `v-click-outside` directive does not accept any arguments.

## Modifiers

The `v-click-outside` directive does not accept any modifiers.

## Examples

### Basic Example

```vue
<template>
  <div v-click-outside="onClickOutside">
    <button @click="showDropdown = !showDropdown">Toggle Dropdown</button>
    <ul v-if="showDropdown">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showDropdown = ref(false);

const onClickOutside = () => {
  showDropdown.value = false;
};
</script>
```

### Code

<<< ../../code/general/v-click-outside.js