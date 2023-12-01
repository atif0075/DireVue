<script setup>
import { ref } from "vue";
const images = ref([
  "https://images.pexels.com/photos/2334005/pexels-photo-2334005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4895059/pexels-photo-4895059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4952563/pexels-photo-4952563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]);
const images2 = ref([
  "https://images.pexels.com/photos/15073537/pexels-photo-15073537/free-photo-of-redhead-woman-near-white-horse-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15073540/pexels-photo-15073540/free-photo-of-redhead-woman-sitting-on-white-horse-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2334005/pexels-photo-2334005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4895059/pexels-photo-4895059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4952563/pexels-photo-4952563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4952561/pexels-photo-4952561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4527203/pexels-photo-4527203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
    <div v-image-gallery="images" v-image-view="images"></div>
    <div v-image-gallery="images2" v-image-view="images2"></div>
  </div>
</template>
