<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <button @click="count++">
      {{ count }}
    </button>
    <input v-focus="count === 10" type="text" name="" id="" />
  </div>
</template>
