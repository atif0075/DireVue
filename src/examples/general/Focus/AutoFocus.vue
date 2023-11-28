<script setup></script>
<template>
  <div>
    <h1>Auto Focus</h1>
    <input
      v-focus:lock
      type="text"
      placeholder="Type here"
      class="input input-bordered input-primary w-full max-w-xs"
    />
  </div>
</template>
<style scoped></style>
