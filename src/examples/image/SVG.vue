<script setup>
const SVGs = [
  {
    path: "logo", // => src/assets/logo.svg
    style: "",
    class: "txt-green flip-x",
    width: 150,
    height: 150,
  },
  {
    path: "logo", // => src/assets/logo.svg
    style: "",
    class: "txt-indigo",
    width: 150,
    height: 150,
  },
  {
    path: "upload", // => src/assets/upload.svg
    style: "",
    class: "",
    width: 150,
    height: 150,
  },
  {
    path: "spin", // => src/assets/spin.svg
    style: "",
    class: "txt-yellow",
    width: 150,
    height: 150,
  },
  {
    path: "logo", // => src/assets/logo.svg
    style: "",
    class: "txt-green flip-x",
    width: 50,
    height: 50,
  },
  {
    path: "logo", // => src/assets/logo.svg
    style: "",
    class: "txt-indigo",
    width: 50,
    height: 50,
  },
  {
    path: "upload", // => src/assets/upload.svg
    style: "",
    class: "",
    width: 50,
    height: 50,
  },
  {
    path: "spin", // => src/assets/spin.svg
    style: "",
    class: "txt-yellow",
    width: 50,
    height: 50,
  },
];
</script>
<template>
  <main class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div v-for="(svg, index) in SVGs" :key="index">
      <span
        v-svg="svg.path"
        :svgStyle="svg.style"
        :svgClass="svg.class"
        :svgWidth="svg.width"
        :svgHeight="svg.height"
      />
    </div>
  </main>
</template>
<style scoped></style>
