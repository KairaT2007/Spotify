import { instance } from "../helpers/api"

export const songsService = {
    getRecommendation: async () => {
        const { data } = await instance.get('songs/list-recommendations')

        return data
    }
}