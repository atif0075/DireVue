# Copy Directive

The `v-copy` directive is used to copy text to the clipboard. It is useful for copying text from a `<textarea>` or `<input>` element.

## Usage

```html
<textarea v-model="text"></textarea> <button v-copy="text">Copy</button>
```

## Arguments

The `v-copy` directive accepts a string value that will be copied to the clipboard when the element is clicked.

## Modifiers

The `v-copy` directive does not accept any modifiers.

## Examples

### Basic Example

```vue
<template>
  <div>
    <textarea v-model="text"></textarea>
    <button v-copy="text">Copy</button>
  </div>

  <div>
    <input v-model="text" />
    <button v-copy="text">Copy</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
</script>
```

### Code

<<< ../../code/general/v-copy.js
