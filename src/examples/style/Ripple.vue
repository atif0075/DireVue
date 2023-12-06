<script setup></script>
<template>
  <div class="flex space-x-2">
    <button
      v-ripple.fast
      class="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-700"
    >
      Fast Ripple
    </button>
    <button
      v-ripple.slow
      class="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-700"
    >
      Slow Ripple
    </button>
  </div>
</template>
<style scoped></style>
