<script setup>
import { ref } from "vue";

const images = ref([
  "https:images.unsplash.com/photo-1682687982134-2ac563b2228b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  "https:images.unsplash.com/photo-1701221238491-d5247ff7abcc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
  "https:images.unsplash.com/photo-1682686579976-879b74d6d7ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
]);
</script>
<template>
  <div class="space-x-2">
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded-xl"
      v-image-view.thumbnails="images"
    >
      With thumbnails
    </button>
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded-xl"
      v-image-view="images"
    >
      Without thumbnails
    </button>
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded-xl"
      v-image-view.loop="images"
    >
      Loop Images
    </button>
  </div>
</template>
<style>
/* ... (other styles remain unchanged) */
</style>
