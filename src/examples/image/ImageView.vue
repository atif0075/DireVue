<script setup>
import { ref } from "vue";

const images = ref([
  "https://images.pexels.com/photos/2334005/pexels-photo-2334005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4895059/pexels-photo-4895059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4952563/pexels-photo-4952563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]);
</script>
<template>
  <div class="md:space-x-2 flex flex-col md:flex-row space-y-2 md:space-y-0">
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
