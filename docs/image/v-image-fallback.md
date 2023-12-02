<script setup> 
import ImageFallback from "../../src/examples/image/ImageFallback.vue"
</script>

# Image Fallback Directive

The `v-image-fallback` directive is used to display a fallback image if the original image fails to load. It can also loop through a list of fallback images until one of them loads successfully.

## Usage

<ImageFallback/>

::: details View Code
<<< ../../src/examples/image/ImageFallback.vue
:::

## Arguments

The `v-image-fallback` does not take any arguments.

## Modifiers

The `v-image-fallback` does not take any modifiers.

## Source Code

<<< ../../code/image/v-image-fallback.js
