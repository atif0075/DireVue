<script setup> 
import SVG from "../../src/examples/image/SVG.vue"
</script>

# SVG Directive

The `v-svg` directive allows you to dynamically import SVG files from your `assets` directory. This is useful when you want to use inline SVGs in your templates. The directive will automatically import the SVG file and inline it in your template. There are few customizations you can make to the SVG before it is rendered.

## Usage

::: warning
Your SVG files must be in your `public/assets` directory. The `v-svg` directive will not work if your SVG files are in your `src/assets` directory.
:::

```vue
<template>
  <div>
    <h1>SVG Directive</h1>
    <div v-svg="'logo'" />
    <!-- Renders the logo.svg file from public/assets -->
    <div v-svg="'svg/logo'" />
    <!-- Renders the logo.svg file from public/assets/svg -->
  </div>
</template>
```

<SVG/>

::: details View Code
<<< ../../src/examples/image/SVG.vue
:::

## Customization

The `v-svg` directive takes a few customizations that can be used to modify the SVG before it is rendered.

| Property        | Type      | Default | Description                                                                |
| --------------- | --------- | ------- | -------------------------------------------------------------------------- |
| `svgClass`      | `string`  | `''`    | Adds a class to the SVG element.                                           |
| `svgStyle`      | `string`  | `''`    | Adds inline styles to the SVG element.                                     |
| `svgWidth`      | `string`  | `''`    | Sets the width of the SVG element.                                         |
| `svgHeight`     | `string`  | `''`    | Sets the height of the SVG element.                                        |
| `svgKeepParent` | `boolean` | `false` | Wrap the SVG in its parent component, otherwise it will replace its parent |

## Arguments

The `v-svg` directive does not take any arguments.

## Modifiers

The `v-svg` directive does not take any modifiers.
