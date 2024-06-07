import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.jikan.moe/v4"
});

export default {
    getAllAnime() {
        return instance.get('/anime');
    },
    getUpComings() {
        return instance.get('/seasons/upcoming');
    }
}