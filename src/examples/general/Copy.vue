<template>
  <div class="w-full bg-white dark:bg-zinc-800 rounded-3xl p-5">
    <textarea
      v-model="text"
      class="w-full p-2 resize-none h-24 rounded-2xl bg-zinc-100 dark:bg-zinc-700"
    ></textarea>
    <button
      v-copy.lowercase="text"
      @copied="handleCopy"
      @copyerror="handleCopyError"
      class="px-4 py-2 bg-indigo-600 text-white rounded-lg"
    >
      {{ btnText }}
    </button>
    <p id="elem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem
      fugiat dolorum, aperiam repellat eos ipsam obcaecati modi, similique harum
      dignissimos reiciendis cum, nobis delectus soluta ut quae! Nobis,
      explicabo.
    </p>
    <button
      v-copy:id="'elem'"
      @copied="handleCopyPara"
      class="px-4 py-2 bg-indigo-600 text-white rounded-lg"
    >
      {{ elemBtn }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref(null);
const btnText = ref("Copy");
const elemBtn = ref("Copy paragraph");
const handleCopy = () => {
  btnText.value = "Copied";
  setTimeout(() => {
    btnText.value = "Copy";
  }, 1500);
  console.log("Text copied successfully");
};
const handleCopyPara = () => {
  elemBtn.value = "Copied";
  setTimeout(() => {
    elemBtn.value = "Copy paragraph";
  }, 1500);
  console.log("Text copied successfully");
};

const handleCopyError = () => {
  btnText.value = "Error";
  setTimeout(() => {
    btnText.value = "Copy";
  }, 1500);
  console.error("Error copying text");
};
</script>
