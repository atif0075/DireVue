<script setup>
const images = [
  {
    src: "https://images.pexels.com/photos/1123757/pexels-photo-1123757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "AD",
  },
  {
    src: "failed",
    alt: "FM",
    className: "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-medium text-2xl rounded-full",
  },
  {
    src: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "JL",
  },
  {
    src: "Failed",
    alt: "GM",
    className: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 font-medium text-2xl",
  },
];
</script>
<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    <img
      v-for="(image, index) in images"
      :key="index"
      v-avatar:[image.className]
      :src="image.src"
      :alt="image.alt"
      :class="image.className"
      class="w-32 h-32 rounded-2xl"
    />
  </div>
</template>
<style scoped></style>
