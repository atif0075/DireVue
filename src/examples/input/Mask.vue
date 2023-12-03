<script setup>
import { ref, watch } from "vue";
const mask = ref("credit-card");
const maskPatterns = ["credit-card", "date", "time", "number", "string"];
const inp = ref("");
watch(mask, () => {
  inp.value = "";
});
</script>
<template>
  <div class="w-full p-5 bg-zinc-100 dark:bg-zinc-800 rounded-2xl space-y-3">
    <p>
      <code>v-mask</code> will automatically format the input value based on the
      provided mask.
    </p>
    <div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Select a mask from the dropdown
      </p>
      <select
        class="w-full h-10 ring-[1px] ring-zinc-600 bg-zinc-50 dark:bg-zinc-700 resize-none outline-none rounded-xl p-2"
        v-model="mask"
      >
        <option v-for="pattern in maskPatterns" :key="pattern" :value="pattern">
          {{ pattern }}
        </option>
      </select>
    </div>
    <input
      v-mask="mask"
      placeholder="Mask"
      v-model="inp"
      :style="[
        mask === 'hex' && inp.length === 7
          ? `border: 1px solid ${inp}`
          : 'border: 1px solid #4f46e5',
      ]"
      class="w-full h-10 bg-zinc-50 dark:bg-zinc-700 resize-none outline-none rounded-xl p-2"
    />
  </div>
</template>
<style scoped></style>
