<script setup> 
import Highlight from "../../src/examples/general/Highlight.vue"
</script>

# Highlight Directive

The `v-highlight` directive can be used to highlight text within a block of text. It is useful for highlighting search results.

## Usage

The `v-highlight` directive can be used on any element. It accepts a string or an array of strings as its value. The directive will search the element's text content for the given string(s) and wrap them in a `span` element with the class `v-highlight`.

<Highlight/>

::: details View Code
<<< ../../src/examples/general/Highlight.vue
:::

## Arguments

The `v-highlight` directive does not accept any arguments.

## Modifiers

The `v-highlight` takes the following modifier:

| Modifier        | Description                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `caseSensitive` | The search will be case sensitive. By default, the search is case insensitive. |

## Emitting Events

The `v-highlight` directive emits the following event:

| Event Name  | Description                              |
| ----------- | ---------------------------------------- |
| `highlight` | It will emit the length of found records (e)=> e.detail |

## Source Code

<<< ../../code/general/v-highlight.js
