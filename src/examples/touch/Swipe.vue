<template>
  <div>
    <div
      v-swipe="handleSwipe"
      class="w-64 h-64 bg-indigo-600 flex justify-center items-center"
    >
      <span class="text-2xl text-white">
        {{ swipeDir }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vSwipe } from "../../../code/touch/v-swipe";
const swipeDir = ref("");
const handleSwipe = (direction) => {
  console.log(`Swiped ${direction}`);
  swipeDir.value = direction;
  // Handle the swipe direction as needed
};
</script>
