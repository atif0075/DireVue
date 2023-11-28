<script setup> 
import Copy from "../../src/examples/general/Copy.vue"
</script>

# Copy Directive

The `v-copy` directive is used to copy text to the clipboard. It is useful for copying text from a `<textarea>`, `<input>` or any other element.

## Usage

<Copy/>

::: details View Code
<<< ../../src/examples/general/Copy.vue
:::

### Dynamic Content

```vue
<template>
  <div>
    <textarea v-model="text"></textarea>
    <button v-copy="text">Copy</button>
  </div>

  <div>
    <input v-model="text2" />
    <button v-copy="text2">Copy</button>
  </div>
</template>
```

## Arguments

The `v-copy` directive accepts only one argument `id`. The `id` argument is used to copy the inner content of an element by it's id.

| Argument | Description                                 |
| -------- | ------------------------------------------- |
| id       | Copy the element's inner content by it's id |

### id

```vue
<template>
  <div>
    <p id="elemId">
      This content will be copied when you click the button, it is being copied
      by id
    </p>
    <button v-copy:id="'elemId'">Copy</button>
  </div>
</template>
```

## Modifiers

The `v-copy` directive accepts two modifiers `uppercase`, `lowercase`, `camelcase` and `pascalcase`. The `uppercase` modifier is used to convert the copied text to uppercase, the `lowercase` modifier is used to convert the copied text to lowercase, the `capitalize` modifier is used to convert the copied text to capitalize, and the `capitalizeAll` modifier is used to convert the copied text to capitalize all.

| Modifier  | Description                          |
| --------- | ------------------------------------ |
| uppercase | Convert the copied text to uppercase |
| lowercase | Convert the copied text to lowercase |
| capitalize | Convert the copied text to capitalize |
| capitalizeAll | Convert the copied text to capitalize all |

### uppercase

```vue
<template>
  <div v-copy.uppercase>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  </div>
</template>
```

## Source Code

<<< ../../code/general/v-copy.js
