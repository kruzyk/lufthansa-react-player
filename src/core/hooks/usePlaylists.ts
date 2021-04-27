import axios from "axios"
import { Playlist } from "../../model/Playlist"
import { useFetch } from "./useFetch"


// export const usePlaylists = (): [{ isLoading: boolean, message: string, results: Playlist[] | null }, Function] => {

export const fetchPlaylists = (): Promise<Playlist[]> => {
    // throw Error('Not implemented yet!!!')
    // // useFetch(() => axios.get())

    return axios.get<Playlist[]>('https://api.spotify.com/v1/me/playlists').then(resp => resp.data)

}