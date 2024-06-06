<script setup>
  import { ref } from "vue";
  import Header from "@/components/Header.vue";

  const headerSize = ref('1fr 10fr');

  const changeHeaderSize = () => {
    headerSize.value = '3fr 10fr';
  }


</script>

<template>

  <div :style="{ gridTemplateColumns: headerSize }" class="main">
    <Header />

  </div>

</template>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main {
  min-height: 100vh;
  background: #100101;
  display: grid;
}

</style>
