<script setup>
import { ref } from "vue";
const search = ref("");
const found = ref(null);
const matchFound = (e) => {
  found.value = e.detail;
};
</script>
<template>
  <div class="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-2xl">
    <div>
      <span class="font-semibold"> Matched Found:</span>
      {{ found }}
    </div>
    <input
      v-model="search"
      class="p-2 border w-full max-w-xs rounded-lg focus:outline-none ring-2 focus:ring-blue-600 focus:border-transparent"
    />
    <p
      v-highlight="search"
      @highlight="matchFound"
      class="text-gray-700 dark:text-gray-300 mt-4"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quaerat
      rerum. Beatae quidem, est pariatur, quaerat nobis accusamus odit optio
      tenetur fugiat laborum asperiores, quod ipsam! Fugit amet totam
      temporibus.
    </p>
  </div>
</template>
<style>
.highlight {
  /* background-color: yellow; */
  @apply bg-yellow-400 dark:bg-yellow-700;
}
</style>
