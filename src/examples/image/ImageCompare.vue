<script setup>
const compareData = [
  {
    name: "horizontal compare",
    before:
      "https://images.pexels.com/photos/4344259/pexels-photo-4344259.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    after:
      "https://images.pexels.com/photos/4344267/pexels-photo-4344267.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    sliderValue: 50,
  },
  {
    name: "vertical compare",
    before:
      "https://images.pexels.com/photos/3754814/pexels-photo-3754814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    after:
      "https://images.pexels.com/photos/3754814/pexels-photo-3754814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sliderValue: 30,
    direction: "vertical", // default is horizontal
    customClassSuffix: "gray", // => before-gray and after-gray, just to add some styles
  },
];
</script>

<template>
  <main class="grid grid-cols-1 items-center justify-center">
    <div v-for="(item, index) in compareData" :key="index">
      <h3 class="capitalize pb-2">{{ item.name }}</h3>
      <div
        class="rounded-2xl overflow-hidden"
        v-image-compare="{
          before: item.before,
          after: item.after,
          sliderValue: item.sliderValue,
          direction: item.direction,
          customClassSuffix: item.customClassSuffix,
        }"
      ></div>
    </div>
  </main>
</template>

<style>
.image-compare-container {
  box-sizing: border-box;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  overflow: hidden;
  width: 100%;
}

.after {
  display: flex;
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.before,
.after {
  user-select: none;
}

.handle-vertical {
  rotate: 90deg;
  transform: translateX(-50%);
}
.after-gray {
  filter: grayscale(100%);
}
</style>
