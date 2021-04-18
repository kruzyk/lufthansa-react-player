import React, { useState } from 'react'
import { Album, AlbumView } from '../../model/Search'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../components/SearchForm'

interface Props { }

const albumsMock: AlbumView[] = [
    { id: "123", name: "Album 123", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/300/300" }] },
    { id: "234", name: "Album 234", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/400/400" }] },
    { id: "345", name: "Album 345", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/500/500" }] },
    { id: "456", name: "Album 456", type: "album", images: [{ height: 300, width: 300, url: "https://www.placecage.com/c/600/600" }] },
]

export const useSearchAlbums = (api_url: string) => {
    const [results, setResults] = useState<AlbumView[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')

    const searchAlbums = async (query: string) => {
        try {
            setResults([])
            setMessage('')
            setIsLoading(true)

            const resp = await fetch(api_url + '?' + (new URLSearchParams({
                q: query, type: 'album'
            })).toString())
            const results = await resp.json()
            setResults(results);
        }
        catch (error) { setMessage(error.message) }
        finally { setIsLoading(false) }
    }

    return {
        searchAlbums,
        isLoading,
        message,
        results
    }
}

export const MusicSearchView = (props: Props) => {
    const { searchAlbums, isLoading, message, results } = useSearchAlbums('http://localhost:3000/data/albums.json')

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm onSearch={searchAlbums} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {isLoading && <p className="alert alert-info">Loading</p>}
                    {message && <p className="alert alert-danger">{message}</p>}

                    <AlbumGrid albums={results} />
                </div>
            </div>
        </div>
    )
}
