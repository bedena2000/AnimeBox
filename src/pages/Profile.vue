<script setup>
import {useAnimeStore} from "@/store/index.js";
const store = useAnimeStore();
</script>

<template>
  <div class="home"
       :style="{ background: store.theme === 'Light' ? '#EEEEEE' : 'black', color: store.theme === 'Light' ? 'black' : 'white'}"
  >
    <RouterView />
    <p class="authentication ">
      Authentication will be added soon
    </p>
  </div>
</template>

<style scoped>
.home {
  padding: 24px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEEEEE;
  border-top-left-radius: 100px;
  position: relative;
}

.authentication {
  position: absolute;
  top: 25px;
  font-weight: bold;
}
</style>