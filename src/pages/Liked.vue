<script setup>

import { useAnimeStore } from "@/store/index.js";
const data = useAnimeStore();
import AnimeCard from "@/components/AnimeCard.vue";


</script>

<template>
  <div class="home"
       :style="{ background: data.theme === 'Light' ? '#EEEEEE' : 'black', color: data.theme === 'Light' ? 'black' : 'white'}"
  >
    <h2>Liked Animes:</h2>

    <div class="anime-list-wrapper" v-if="data.likedAnimes.length > 0">

      <AnimeCard
        v-for="anime in data.likedAnimes"
        :id="anime.value.data.mal_id"
        :title="anime.value.data.title"
        :image="anime.value.data.images.jpg['image_url']"
      />

    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 36px;
  color: black;
  background: #EEEEEE;
  border-top-left-radius: 100px;
}

.anime-list-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 42px;
}

@media (max-width: 700px) {
  .anime-list-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>