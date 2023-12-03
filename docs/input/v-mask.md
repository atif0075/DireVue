<script setup> 
import Mask from "../../src/examples/input/Mask.vue"
</script>

# Mask Directive

The `v-mask` directive use to mask input value.

## Usage

<Mask />
::: details View Code
<<< ../../src/examples/input/Mask.vue
:::


| Input       | Mask                  | Output                |
| ----------- | --------------------- | --------------------- |
| credit-card | `v-mask=''credit-card''` | `1234 5678 9012 3456` |
| date        | `v-mask=''date''`          | `12/31/2020`          |
| time        | `v-mask=''time''`            | `03/24/55`            |
| number      | `v-mask=''number''`        | `Only Numbers`        |
| string      | `v-mask=''string''`         | `Only String`         |



## Arguments

The `v-mask` directive does not accept any arguments.

## Modifiers

The `v-mask` directive does not accept any modifiers.

## Source Code

<<< ../../code/input/v-mask.js
