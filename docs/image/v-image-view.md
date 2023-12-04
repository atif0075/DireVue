<script setup> 
import ImageViewer from "../../src/examples/image/ImageView.vue"
</script>

# Image Viewer Directive

The `v-image-view` component is used to display images with optional thumbnails.

## Usage

<ImageViewer/>

::: details View Code
<<< ../../src/examples/image/ImageView.vue
:::

## Arguments

The `v-image-view` directive does not accept any arguments.

## Modifiers

The `v-image-view` takes the following modifiers:

| Modifier     | Description                       |
| ------------ | --------------------------------- |
| `thumbnails` | The thumbnails will be displayed. |
| `loop`       | The images will repeat in a loop. |

## Source Code

<<< ../../code/image/v-image-view.js
