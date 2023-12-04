<script setup> 
import SVG from "../../src/examples/image/SVG.vue"
</script>

# SVG Directive

The `v-svg` directive allows you to dynamically import SVG files from your `assets` directory. This is useful when you want to use inline SVGs in your templates. The directive will automatically import the SVG file and inline it in your template. There are few customizations you can make to the SVG before it is rendered.

## Usage

<SVG/>

::: details View Code
<<< ../../src/examples/image/SVG.vue
:::