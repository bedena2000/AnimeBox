<script setup>
import {computed, ref} from "vue";
  import Header from "@/components/Header.vue";

  const isOpen = ref(false);

  const changeHeaderSize = () => {
    isOpen.value = !isOpen.value;
  }

  const expandedStyling = computed(() => {
    if(isOpen.value) {
      return '3fr 10fr';
    } else {
      return '1fr 10fr'
    }
  });


</script>

<template>

  <div :style="{ gridTemplateColumns: expandedStyling }" class="main">
    <Header :isOpen="isOpen" @expand-menu="changeHeaderSize" />
    <RouterView />
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
  transition: grid-template-columns 0.3s ease;
  font-family: "Inter", sans-serif;
}

</style>
