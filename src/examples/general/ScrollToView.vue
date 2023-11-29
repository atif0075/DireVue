<script setup></script>
<template>
  <main
    class="w-full h-56 p-5 rounded-2xl bg-gray-50 dark:bg-zinc-800 overflow-auto"
  >
    <div class="h-screen flex justify-between flex-col items-center">
      <button
        v-scroll-to-view="'scroll-to-view'"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <span>Scroll to view</span>
      </button>
      <p
        id="scroll-to-view"
        class="text-2xl font-bold text-center bg-gray-200 dark:bg-zinc-700 rounded-2xl p-5"
      >
        You scrolled to me
      </p>
    </div>
  </main>
</template>
<style scoped></style>
