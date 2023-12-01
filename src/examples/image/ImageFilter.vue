<template>
  <div
    class="flex justify-start flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 py-5"
  >
    <div v-for="(item, index) in images" :key="index">
      <img
        v-image-filter:[item.arg]="{
          filter: item.filter,
          value: item.value,
        }"
        :src="item.src"
        class="w-64 h-64 object-cover rounded-xl shadow-xl"
      />
      <p class="text-xs">
        {{ item.arg === "hover" ? "Hover" : "Click(Dbl Cick to remove)" }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  {
    src: "https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    filter: "blur",
    value: "1",
    arg: "hover",
  },
  {
    src: "https://images.pexels.com/photos/2189666/pexels-photo-2189666.jpeg?auto=compress&cs=tinysrgb&w=800",
    filter: "blur",
    value: "3",
    arg: "hover",
  },
  {
    src: "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    filter: "grayscale",
    value: "100",
    arg: "click",
  },
]);
</script>

<style scoped></style>
