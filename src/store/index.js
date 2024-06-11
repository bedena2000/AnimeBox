import { defineStore } from 'pinia';
import { ref } from "vue";

export const useAnimeStore = defineStore('animeStore', () => {
    const onGoingAnimeList = ref([]);
    let likedAnimes = ref([]);
    const currentSelectedAnime = ref(null);

    const updateOnGoingAnime = (animeList) => {
        onGoingAnimeList.value = animeList;
    };

    const updateLikedAnimes = (anime) => {

        const items = likedAnimes.value.filter(item => item.value.data.mal_id === anime.value.data.mal_id);

        if(items.length === 0) {
            likedAnimes.value = [
                ...likedAnimes.value,
                anime
            ]
        }

    };

    const removedFromLiked = (animeId) => {
        const isExist = likedAnimes.value.filter(item => {
           return item.value.data.mal_id === animeId;
        });

        if(isExist.length > 0) {
            const newArray = likedAnimes.value.filter(item => {
                return item.value.data.mal_id !== animeId;
            });
            likedAnimes.value = newArray;
        }

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
        removedFromLiked
    }
});

