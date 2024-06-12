<script setup>

import { useRoute, useRouter } from "vue-router";
import {onMounted, ref} from "vue";
import services from "@/services/index.js";
import { useAnimeStore } from "@/store/index.js";

const route = useRoute();
const router = useRouter();
const store = useAnimeStore();

const loading = ref(false);
const error = ref(false);
const anime = ref(null);
const isTrailer = ref(false);

onMounted(async () => {
  if(route.params.id) {
    const id = Number(route.params.id);
    loading.value = true;

    try {
      const data = await services.getAnime(id);
      anime.value = data.data;
      error.value = false;
    } catch (e) {
      error.value = true;
    } finally {
      loading.value = false;
    }


  } else {
    router.push('/');
  }
});

const addToLiked = () => {
  store.updateLikedAnimes(anime);
};

const alreadyLiked = () => {
  const currentId = Number(route.params.id);
  const isExist = store.likedAnimes.find(item => item.value.data.mal_id === currentId);
  if(isExist) return true;

  return false;
};

const removedFromAlreadyLiked = () => {
  store.removedFromLiked(Number(route.params.id));
};

</script>

<template>

  <div class="anime-description" v-if="anime"
       :style="{ background: store.theme === 'Light' ? '#EEEEEE' : 'black', color: store.theme === 'Light' ? 'black' : 'white'}"

  >
    <div class="anime-info">
      <div>
        <img :src="anime.data.images.jpg['image_url']" alt="animeThumbnail">
      </div>

      <div class="anime-info-wrapper">
        <h2 class="title">{{ anime.data.title }}</h2>
        <p class="title-english" v-if="anime.data.title_english">
          {{ anime.data.title_english }}
        </p>
        <p v-if="anime.data.rating">
          Rating: {{ anime.data.rating }}
        </p>
        <a class="url" v-if="anime.data.url" :href="anime.data.url">
          MyAnimeList
        </a>
      </div>
    </div>

    <div class="buttons">
      <button v-if="!isTrailer" @click="isTrailer = true" class="trailer-button">Watch Trailer</button>
      <button v-if="isTrailer" @click="isTrailer = false" class="trailer-button">Close Trailer</button>
      <button v-if="!alreadyLiked()" @click="addToLiked" class="like-button">Add to Liked</button>
      <button v-if="alreadyLiked()" @click="removedFromAlreadyLiked" class="like-button">removed from liked</button>
    </div>

    <div v-if="isTrailer">
      <iframe class="youtube-trailer" :src="`https://www.youtube.com/embed/${anime.data.trailer.youtube_id}`">

      </iframe>
    </div>
  </div>

</template>

<style scoped>

.anime-description {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 42px;
  background: #EEEEEE;
  border-top-left-radius: 100px;
}

.anime-info {
  display: flex;
  gap: 24px;
}

.anime-info-wrapper {
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.buttons {
  display: flex;
  gap: 12px;
}

.trailer-button, .like-button {
  padding: 6px 14px;
  outline: none;
  border: 2px solid darkslategray;
  transition: all 0.3s ease;
  border-radius: 12px;
  cursor: pointer;
}

.trailer-button:hover, .like-button:hover {
  background: darkslategray;
  color: white;
}

.youtube-trailer {
  width: 100%;
  height: 600px;
}

</style>