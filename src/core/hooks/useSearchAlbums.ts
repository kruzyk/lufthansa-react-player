import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Album, AlbumsSearchResponse, AlbumView, Artist, ArtistsSearchResponse, SearchResponse } from '../../model/Search';
import { auth } from '../services';


export const useSearchAlbums = () => {
    const [results, setResults] = useState<AlbumView[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const searchAlbums = async (query: string) => {
        try {
            setResults([]);
            setMessage('');
            setIsLoading(true);

            const response = await axios.get<AlbumsSearchResponse>('https://api.spotify.com/v1/search', {
                headers: { Authorization: 'Bearer ' + auth.token },
                params: { q: query, type: 'album' },
            });

            setResults(response.data.albums.items);
        }
        catch (error) { setMessage(error.message); }
        finally { setIsLoading(false); }
    };

    return {
        searchAlbums,
        isLoading,
        message,
        results
    };
};

export const fetchArtists = (query: string) => {
    const response = axios.get<ArtistsSearchResponse>('https://api.spotify.com/v1/search', {
        // headers: { Authorization: 'Bearer ' + auth.token },
        params: { q: query, type: 'artist' },
    });

    return response.then(response => response.data.artists.items)
        .catch((err: Error) => {
            if (isAxiosError(err)) {
                if (err.response?.status === 401) {
                    auth.login()
                }
                return Promise.reject(err.response?.data.error)
            }
            return Promise.reject(err)
        })
}

export const fetchAlbums = (query: string) => {
    const response = axios.get<AlbumsSearchResponse>('https://api.spotify.com/v1/search', {
        // headers: { Authorization: 'Bearer ' + auth.token },
        params: { q: query, type: 'album' },
    });

    return (response.then(response => response.data.albums.items))
}

// type Tab = Artist | Album

// const t: Tab = 'as' as any;

// if(t.type === 'album'){
//     t.artists
// }else{
//     t.
// }

export const isAxiosError = function (err: any): err is AxiosError<{ error?: { message: string } }> {
    return err.isAxiosError
}

export const useFetch = function <T, P>(fetcher: (params: P) => Promise<T>) {
    const [results, setResults] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [params, setParams] = useState<P | null>(null)

    useEffect(() => {
        if (params === null) return;
        fetch(params)
    }, [params])

    const fetch = async (params: P) => {
        try {
            setResults(null);
            setMessage('');
            setIsLoading(true);

            const result = await fetcher(params)
                .catch((err: Error) => {
                    if (isAxiosError(err)) {
                        if (err.response?.status === 401) {
                            auth.login()
                        }
                        return Promise.reject(err.response?.data.error)
                    }
                    return Promise.reject(err)
                })
            setResults(result)

        }
        catch (error) { setMessage(error.message); }
        finally { setIsLoading(false); }
    };

    return [{ isLoading, message, results }, setParams] as const
};
