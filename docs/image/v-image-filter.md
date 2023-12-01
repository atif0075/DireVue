<script setup> 
import ImageFilter from "../../src/examples/image/ImageFilter.vue"
</script>

# Image Filter Directive

The `v-image-filter` directive is used to apply filters to images.

## Usage

<ImageFilter/>

::: details View Code
<<< ../../src/examples/image/ImageFilter.vue
:::

## Arguments

The `v-image-filter` takes the following arguments:

| Argument | Description                          |
| -------- | ------------------------------------ |
| `hover`  | The filter will be applied on hover. |
| `click`  | The filter will be applied on click. |

## Modifiers

The `v-image-filter` takes the following modifiers:

| Modifier      | Description                         |
| ------------- | ----------------------------------- |
| `blur`        | The image will be blurred.          |
| `brightness`  | The image will be brightened.       |
| `contrast`    | The image will be contrasted.       |
| `grayscale`   | The image will be grayscaled.       |
| `hue-rotate`  | The image will be hue-rotated.      |
| `invert`      | The image will be inverted.         |
| `opacity`     | The image will be opacity-adjusted. |
| `saturate`    | The image will be saturated.        |
| `sepia`       | The image will be sepia-toned.      |
| `drop-shadow` | The image will have a drop shadow.  |

## Source Code

<<< ../../code/image/v-image-filter.js
