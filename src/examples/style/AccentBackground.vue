<script setup></script>
<template>
  <div class="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 space-y-2">
    <p>
      Automatically set the background color of the element to the accent color.
    </p>
    <div class="space-x-1">
      <button
        class="px-4 py-2 rounded-full bg-red-600 text-white"
        v-accent-background
      >
        Red
      </button>
      <button
        class="px-4 py-2 rounded-full bg-blue-600 text-white"
        v-accent-background
      >
        Blue
      </button>
      <button
        class="px-4 py-2 rounded-full bg-green-600 text-white"
        v-accent-background
      >
        Green
      </button>
    </div>
    <p>
      You can also set the background color to a different color by passing the
      color name as a parameter.
    </p>
    <div class="space-x-1">
      <button
        class="px-4 py-2 rounded-full bg-red-400 text-white"
        v-accent-background="{
          hover: 'rgb(220,38,38)',
          active: 'rgb(127,29,29)',
        }"
      >
        Red
      </button>
      <button
        class="px-4 py-2 rounded-full bg-blue-400 text-white"
        v-accent-background="{
          hover: 'rgb(37,99,235)',
          active: 'rgb(30,58,138)',
        }"
      >
        Blue
      </button>
      <button
        class="px-4 py-2 rounded-full bg-green-400 text-white"
        v-accent-background="{
          hover: '#16A34A',
          active: '#14532D',
        }"
      >
        Green
      </button>
    </div>
  </div>
</template>
<style scoped></style>
