<script setup>
import {ref, watch} from "vue";
import { useRoute } from "vue-router";
import services from "@/services/index.js";
import {onMounted} from "vue";
import AnimeCard from "@/components/AnimeCard.vue";
const route = useRoute();
const animeSearchParam = route.params.searchParam;
const animeList = ref([]);

onMounted(() => {
    services.getAnimeByName(animeSearchParam)
        .then((data) => {
          animeList.value = data.data;
        })
});

</script>

<template>

  <div class="wrapper">
    <h2>Result: </h2>

    <div class="result-wrapper" v-if="animeList.data && animeList.data.length > 0">
      <AnimeCard
          v-for="anime in animeList.data"
          :key="anime.mal_id"
          :id="anime.mal_id"
          :title="anime.title"
          :image="anime.images.jpg['image_url']"
      />
    </div>

  </div>

</template>


<style>
.wrapper {
  padding: 34px;
  background: #EEEEEE;
}

.result-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
  margin-top: 32px;
}
</style>