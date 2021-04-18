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

export const MusicSearchView = (props: Props) => {
    const [results, setResults] = useState<AlbumView[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')

    const searchAlbums = async (query: string) => {
        try {
            setResults([])
            setMessage('')
            setIsLoading(true)

            const resp = await fetch('http://localhost:3000/data/albums.json')
            const results = await resp.json()
            setResults(results);

        }
        catch (error) { setMessage(error.message) }
        finally { setIsLoading(false) }
    }

    // const searchAlbums = (query: string) => {
    //     console.log('Search :', query)
    //     setResults([])
    //     setMessage('')
    //     setIsLoading(true)

    //     fetch('http://localhost:3000/data/albums.json')
    //         .then(resp => resp.json())
    //         .then(results => { setResults(results); })
    //         .catch(error => { setMessage(error.message) })
    //         .finally(() => setIsLoading(false))
    // }

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
