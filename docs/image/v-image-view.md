<script setup> 
import ImageViewer from "../../src/examples/general/ImageView.vue"
</script>

# Image Viewer Directive

The `v-image-viewer` component is used to display images with optional thumbnails.

## Usage

<ImageViewer/>

::: details View Code
<<< ../../src/examples/general/ImageView.vue
:::

## Arguments

The `v-image-viewer` directive does not accept any arguments.

## Modifiers

The `v-image-viewer` takes the following modifiers:

| Modifier     | Description                       |
| ------------ | --------------------------------- |
| `thumbnails` | The thumbnails will be displayed. |
| `loop`       | The images will repeat in a loop. |

## Source Code

<<< ../../code/image/v-image-view.js
