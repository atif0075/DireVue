<template>
  <button
    @click="toggleDropdown"
    class="px-2 py-1 w-full bg-blue-500 text-white rounded-lg max-w-xs"
    type="button"
  >
    Dropdown button
  </button>

  <!-- Dropdown menu -->
  <div
    v-if="showDropdown"
    v-click-outside="closeDropdown"
    class="w-full max-w-xs z-10 bg-white divide-y divide-zinc-100 rounded-lg border dark:border-zinc-700 dark:bg-zinc-700"
  >
    <div class="py-2 text-sm text-zinc-700 dark:text-zinc-200 list-none">
      <li
        class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
      >
        Dashboard
      </li>

      <li
        class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
      >
        Settings
      </li>

      <li
        class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
      >
        Earnings
      </li>
      <li
        class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
      >
        Sign out
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showDropdown = ref(false);
const toggleDropdown = () => (showDropdown.value = !showDropdown.value);
const closeDropdown = () => (showDropdown.value = false);
</script>
