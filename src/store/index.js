import { defineStore } from 'pinia';
import { ref } from "vue";

export const useAnimeStore = defineStore('animeStore', () => {
    const onGoingAnimeList = ref([]);
    let likedAnimes = ref([]);
    const currentSelectedAnime = ref(null);
    const theme = ref('Light');
    const font = ref('Roboto');

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

    const updateSettings = (updatedSettings) => {
        theme.value = updatedSettings.theme;
        font.value = updatedSettings.font;
    };

    return {
        onGoingAnimeList,
        likedAnimes,
        currentSelectedAnime,
        theme,
        font,
        updateOnGoingAnime,
        updateLikedAnimes,
        updateCurrentSelectedAnime,
        removedFromLiked,
        updateSettings
    }
});

