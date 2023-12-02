<script setup>
const compareData = [
  {
    before:
      "https://images.pexels.com/photos/2928178/pexels-photo-2928178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    after:
      "https://images.pexels.com/photos/2928178/pexels-photo-2928178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sliderValue: 50,
  },
  {
    before:
      "https://images.pexels.com/photos/4895059/pexels-photo-4895059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    after:
      "https://images.pexels.com/photos/4895059/pexels-photo-4895059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    sliderValue: 30,
  },
];
</script>

<template>
  <main
    class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center"
  >
    <div
      v-for="(item, index) in compareData"
      :key="index"
      class="w-72 h-56 relative rounded-2xl overflow-hidden"
    >
      <div
        v-image-slider="{
          before: item.before,
          after: item.after,
          sliderValue: item.sliderValue,
        }"
      ></div>
    </div>
  </main>
</template>

<style>
.img-comparison-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.img-comparison-container,
.img-wrapper,
.slider,
.handle {
  box-sizing: border-box;
}
</style>
