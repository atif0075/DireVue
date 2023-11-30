<script setup> 
import ToolTip from "../../src/examples/general/ToolTip.vue"
import ToolTipVideo from "../../src/examples/general/ToolTip/ToolTipVideos.vue"
</script>

# Tooltip Directive

The `v-tooltip` directive is used to display a tooltip when the user hovers over an element.

## Usage

Both light and dark variants are available for the tooltip. toggle the dark mode to see the difference.

Video preview of the tooltip directive because of css issues in the docs.
<ToolTipVideo/>

::: details View Code
<<< ../../src/examples/general/ToolTip.vue
:::

## Arguments

The `v-tooltip` directive does not accept any arguments.

## Modifiers

The `v-tooltip` directive takes the following modifiers:

| Modifier | Description                                       |
| -------- | ------------------------------------------------- |
| `left`   | Displays the tooltip to the left of the element.  |
| `right`  | Displays the tooltip to the right of the element. |
| `top`    | Displays the tooltip above the element.           |
| `bottom` | Displays the tooltip below the element.           |

## Source Code

<<< ../../code/general/v-tooltip.js
