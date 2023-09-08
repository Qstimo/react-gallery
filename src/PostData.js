import axios from "axios";

export default class PostData {
    static async getPhotos(albumId = 1) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        return response;
    }
    static async getAlbums(limit = 50, page = 1) {

        const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {
            params: { _limit: limit, _page: page }
        })

        return response;
    }
    static async getUsers() {

        const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        return response;
    }
}