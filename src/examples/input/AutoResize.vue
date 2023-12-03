<script setup></script>
<template>
  <div class="w-full p-5 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
    <p>
      <code>Textarea</code> will automatically resize itself to fit the content, but you can also set min and max height
    </p>
    <textarea
      v-auto-resize
      class="w-full h-10 ring-[1px] ring-indigo-600 bg-zinc-50 dark:bg-zinc-700 resize-none outline-none rounded-xl p-2"
    ></textarea>
  </div>
</template>
<style scoped></style>
