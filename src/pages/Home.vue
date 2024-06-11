<script setup>
import { useAnimeStore } from "@/store/index.js";
import services from "@/services/index.js";
import {onMounted, onUpdated, ref, watch} from "vue";
import {useRouter} from "vue-router";
import AnimeCard from "@/components/AnimeCard.vue";

const loading = ref(false);
const errorMessage = ref(false);
const store = useAnimeStore();
const currentMainAnime = ref(null);
const isTrailer = ref(false);
const search = ref('');
const router = useRouter();

onMounted(async () => {
  loading.value = true;
  try {
    const result = await services.getUpComings();
    const data = result.data.data;
    const finalArray = [];
    for(let i = 0; i < 4; i++) {
      finalArray.push(data[i]);
    };
    currentMainAnime.value = data[0];
    store.updateOnGoingAnime(finalArray);
    errorMessage.value = false;

  } catch (e) {
    console.error(e);
    errorMessage.value = true;
  } finally {
    loading.value = false;
  }
});

const showTrailer = () => {
    isTrailer.value = true;
};

const closeTrailer = () => {
    isTrailer.value = false;
};

const searchAnime = () => {
    if(search.value.trim()) {
      const final = search.value.trim();
      router.push(`/search/${final}`);
    }
};

</script>


<template>
  <div class="home">

    <div class="profile">
      <div class="search-box">
        <img @click.prevent="searchAnime" src="/icons/search_icon.png" alt="search icon">
        <input @keydown.enter="searchAnime" v-model="search" placeholder="Explore" type="text">
      </div>
      <div class="profile-options">

      </div>
    </div>

    <div class="content">
      <p v-if="loading" class="loading">
        Loading...
      </p>
      <p v-if="errorMessage" class="errorMessage">
        Something Went Wrong, please try again
      </p>

      <div class="main-anime" v-if="currentMainAnime">
        <img v-if="isTrailer === false" :src="currentMainAnime.images.jpg['large_image_url']" alt="main-image">
        <div v-if="isTrailer === false"  class="main-anime-options">
          <h2>{{ currentMainAnime.title }}</h2>
          <p>
            {{ currentMainAnime.synopsis }}
          </p>
          <div>
            Status: {{ currentMainAnime.status }}
          </div>
          <button @click.prevent="showTrailer">
            <img src="/icons/play-icon.png" alt="play button">
            <p>
              Watch
            </p>
          </button>
        </div>
        <div v-if="isTrailer && currentMainAnime">
          <iframe class="youtube-video" target="_parent" width="100%" height="315" :src="`https://www.youtube.com/embed/${currentMainAnime.trailer.youtube_id}`">
          </iframe>
          <button @click.prevent="closeTrailer" class="youtube-close-button">
            Close ❌
          </button>
        </div>
      </div>
      
    </div>

    <div class="anime-list">
      <div class="anime-list-title">
        <p class="on-going">Up Coming</p>
      </div>
      <div v-if="store.onGoingAnimeList.length > 0" class="anime-list-wrapper">
        <AnimeCard
            v-for="anime in store.onGoingAnimeList"
            :id="anime.mal_id"
            :title="anime.title"
            :image="anime.images.jpg['image_url']"
        />
      </div>
    </div>


  </div>
</template>

<style scoped>
  .home {
    padding: 24px;
    color: white;
    background: #EEEEEE;
    border-top-left-radius: 100px;
  }

  .search-box {
    background: #000000;
    width: 259px;
    border-radius: 24px;
    display: flex;
    padding: 7px 13px;
  }

  .search-box > img {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .search-box > input {
    background: transparent;
    outline: none;
    border: none;
    color: #C5C5C5;
    font-size: 20px;
    padding-left: 16px;
    width: 100%;
  }

  .profile {
    display: flex;
    justify-content: flex-end;
  }

  .loading {
    font-size: 36px;
    font-weight: bold;
    color: black;
    margin-top: 100px;
  }

  .errorMessage {
    font-size: 36px;
    font-width: bold;
    color: black;
    margin-top: 100px;
  }

  .main-anime {
    width: 100%;
    height: 60vh;
    display: flex;
    margin-top: 32px;
    gap: 32px;
    position: relative;
    justify-content: flex-end;
    align-items: center;
  }

  .main-anime > img {
    width: 100%;
    height: 100%;
    object-fit: inherit;
    position: absolute;
    z-index: 1;
    border-radius: 20px;
    filter: brightness(0.5);
  }

  .main-anime-options {
    color: white;
    z-index: 2;
    padding: 16px;
    margin-right: 100px;
  }

  .main-anime-options > h2 {
    font-size: 64px;
  }

  .main-anime-options > p {
    font-size: 20px;
  }

  .main-anime-options > div {
    margin-top: 12px;
    font-size: 20px;
  }

  .main-anime-options > button {
    cursor: pointer;
    background: #D9D9D9;
    width: 198px;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .main-anime-options > button > p {
    color: #000000;
    font-size: 24px;
  }

  .anime-list-title {
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
  }

  .on-going {
    color: black;
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
  }

  .see-all {
    opacity: 0.5;
    color: black;
    cursor: pointer;
    font-size: 32px;
  }

  .anime-list-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 38px;
  }

  

  .youtube-video {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }

  .youtube-close-button {
    z-index: 3;
    position: absolute;
    left: 20px;
    top: 20px;
    border: 6px dashed darkred;
    padding: 6px 12px;
    border-radius: 26px;
    color: black;
    cursor: pointer;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s ease;
  }

</style>