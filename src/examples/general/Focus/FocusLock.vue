<script setup>
import { ref } from "vue";
const count = ref(0);
</script>
<template>
  <div>
    <div class="space-y-2">
      <input
        v-focus="count === 5"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
      />
      <div class="space-x-2">
        <button class="btn btn-primary rounded-full" @click="count++">
          count {{ count }} +
        </button>
        <button class="btn btn-primary rounded-full" @click="count--">
          count {{ count }} -
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
