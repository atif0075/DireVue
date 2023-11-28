<script setup>
import { ref } from "vue";
const count = ref(0);
</script>
<template>
  <div>
    <div class="space-y-2">
      <div>
        <p>
          if count is odd, input will be focused and locked, otherwise input
          will not be
        </p>
        <div>
          <input
            type="number"
            v-focus:lockonCondition="count % 2 === 1"
            v-model="count"
            class="p-2 border w-full max-w-xs rounded-lg focus:outline-none ring-2 focus:ring-blue-600 focus:border-transparent"
            :placeholder="count % 2 === 1 ? 'Focus' : 'Not Focus'"
          />
        </div>
      </div>
      <div class="w-full">
        <button
          @click="count++"
          class="px-2 py-1 w-full bg-blue-500 text-white rounded-lg max-w-xs"
        >
          count+
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
