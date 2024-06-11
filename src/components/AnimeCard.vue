<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
})

</script>

<template>

  <router-link :to="`/anime/${id}`" class="anime-list-item">
    <img :src="image" alt="title">
    <p>{{ title }}</p>
  </router-link>

</template>

<style scoped>
.anime-list-item {
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
}

.anime-list-item:hover {
  filter: brightness(0.8);
}

.anime-list-item > img {
  width: 100%;
}

.anime-list-item > p {
  color: black;
  margin-top: 22px;
  font-size: 24px;
  font-weight: bold;
}
</style>