<script setup>
import { ref } from "vue";

const images2 = ref([
  "https://images.pexels.com/photos/15073537/pexels-photo-15073537/free-photo-of-redhead-woman-near-white-horse-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/15073540/pexels-photo-15073540/free-photo-of-redhead-woman-sitting-on-white-horse-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/2334005/pexels-photo-2334005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/4895059/pexels-photo-4895059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/4952563/pexels-photo-4952563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/4952561/pexels-photo-4952561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/4527203/pexels-photo-4527203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]);
</script>
<template>
  <!-- <div class="h-screen w-full flex justify-center items-center">
    <div class="h-full w-[80%]">
      <img
        v-image-zoom
        :src="images2[0]"
        alt=""
        class="w-full h-full object-cover rounded-xl shadow-xl"
      />
    </div>
  </div> -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
    <img
      v-for="(item, index) in images2"
      :key="index"
      :src="item"
      v-image-zoom
      class="w-72 h-72 object-cover rounded-xl shadow-xl"
    />
  </div>
</template>
<style scoped></style>
