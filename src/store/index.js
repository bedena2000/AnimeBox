import { defineStore } from 'pinia';
import { ref } from "vue";

export const useAnimeStore = defineStore('animeStore', () => {
    const onGoingAnimeList = ref([]);
    const likedAnimes = ref([]);
    const currentSelectedAnime = ref(null);

    const updateOnGoingAnime = (animeList) => {
        onGoingAnimeList.value = animeList;
    };

    const updateLikedAnimes = (anime) => {
        likedAnimes.value = [
            ...likedAnimes.value,
            anime
        ];
    };

    const updateCurrentSelectedAnime = (animeId) => {
        currentSelectedAnime.value = animeId;
    }

    return {
        onGoingAnimeList,
        likedAnimes,
        currentSelectedAnime,
        updateOnGoingAnime,
        updateLikedAnimes,
        updateCurrentSelectedAnime,
    }
});

