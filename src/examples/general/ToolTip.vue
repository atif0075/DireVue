<script setup>
const tooltipText = "This is a tooltip";
const toggleDark = () => {
  document.documentElement.classList.toggle("dark");
};
</script>
<template>
  <main
    class="w-full rounded-2xl p-5 bg-gray-50 dark:bg-zinc-900 dark:text-white flex flex-col space-y-10 justify-center items-center"
  >
    <button @click="toggleDark">Dark</button>
    <div v-tooltip="tooltipText">Hover me for top tooltip</div>
    <div v-tooltip.right="tooltipText">Hover me for right tooltip</div>
    <div v-tooltip.left="tooltipText">Hover me for left tooltip</div>
    <div v-tooltip.bottom="tooltipText">Hover me for bottom tooltip</div>
    <div v-tooltip="tooltipText">Hover me for a tooltip (default top)</div>
  </main>
</template>
<style>
:root {
  --tooltip-arrow-size: 5px;
  --tooltip-arrow-bg: #f5f5f5;
  --tooltip-border: #e4e4e7;
}
/* dark */
.dark {
  --tooltip-arrow-bg: #27272a;
  --tooltip-border: #3d3d40;
}
.tooltip-top::after {
  content: " ";
  position: absolute;
  background-color: var(--tooltip-arrow-bg);
  border-right: 1px solid var(--tooltip-border);
  border-bottom: 1px solid var(--tooltip-border);
  width: 12px;
  height: 12px;
  left: 50%;
  margin-left: -5px;
  top: 100%;
  transform: rotate(45deg);
  translate: 0 -46%;
}
.tooltip-bottom::after {
  content: " ";
  position: absolute;
  background-color: var(--tooltip-arrow-bg);
  border-top: 1px solid var(--tooltip-border);
  border-left: 1px solid var(--tooltip-border);
  width: 12px;
  height: 12px;
  left: 50%;
  margin-left: -5px;
  bottom: 100%;
  transform: rotate(45deg);
  translate: 0 46%;
}

.tooltip-right::after {
  content: " ";
  position: absolute;
  background-color: var(--tooltip-arrow-bg);
  border-left: 1px solid var(--tooltip-border);
  border-bottom: 1px solid var(--tooltip-border);
  width: 12px;
  height: 12px;
  top: 50%;
  margin-top: -5px;
  right: 100%;
  transform: rotate(45deg);
  translate: 46% 0;
}

.tooltip-left::after {
  content: " ";
  position: absolute;
  background-color: var(--tooltip-arrow-bg);
  border-top: 1px solid var(--tooltip-border);
  border-right: 1px solid var(--tooltip-border);
  width: 12px;
  height: 12px;
  top: 50%;
  margin-top: -5px;
  left: 100%;
  transform: rotate(45deg);
  translate: -46% 0;
}
</style>
