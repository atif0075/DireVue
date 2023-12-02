<script setup>
import { ref } from "vue";
const value = `<svg id='vLoader' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><filter id="svgSpinnersGooeyBalls20"><feGaussianBlur in="SourceGraphic" result="y" stdDeviation="1"/><feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"/><feBlend in="SourceGraphic" in2="z"/></filter></defs><g filter="url(#svgSpinnersGooeyBalls20)"><circle cx="5" cy="12" r="4" fill="currentColor"><animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="5;8;5"/></circle><circle cx="19" cy="12" r="4" fill="currentColor"><animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="19;16;19"/></circle><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>`;
const images = ref([
  {
    loaderOptions: {
      width: "4rem",
      height: "4rem",
    },
    src: "https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fallbacks: [
      "https://images.pexels.com/photo/207789/pexels-photo-207789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "http://placeskull.com/202/202",
    ],
  },
  {
    loaderOptions: {
      width: "6rem",
      height: "6rem",
    },
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fallbacks: [
      "https://images.pexels.com/photo/207789/pexels-photo-207789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "http://placeskull.com/202/202",
    ],
  },
  {
    loaderOptions: {
      width: "3rem",
      height: "3rem",
      value: value,
    },
    src: "https://images.unsplash.com/photos-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbacks: [
      "https://images.pexels.com/photo/207789/pexels-photo-207789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://placehold.it/200x200?text=Fallback",
    ],
  },
]);
</script>
<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-32 h-32 flex justify-center items-center rounded-full object-cover object-center bg-gray-100 dark:bg-zinc-800"
      >
        <img
          v-image-fallback="{
            loaderOptions: image.loaderOptions,
            fallbacks: image.fallbacks,
          }"
          class="w-32 h-32 rounded-full object-cover object-center"
          :src="image.src"
          alt="Image"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
