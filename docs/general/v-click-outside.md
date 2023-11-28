<script setup> 
import ClickOutside from "../../src/examples/general/ClickOutside.vue"
</script>

# Click-Outside Directive

The `v-click-outside` directive is used to detect clicks outside of an element. It is useful for closing dropdowns, modals, and other components that require a click outside to close.

## Usage

```html
<div v-click-outside="onClickOutside">
  <!-- Your content here -->
</div>
```

<div class="w-full h-auto py-5 flex flex-col ">
<ClickOutside />
</div>

::: details View Code
<<< ../../src/examples/general/ClickOutside.vue
:::

## Arguments

The `v-click-outside` directive does not accept any arguments.

## Modifiers

The `v-click-outside` directive does not accept any modifiers.

## Source Code

<<< ../../code/general/v-click-outside.js
