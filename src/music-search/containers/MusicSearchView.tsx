import React, { useCallback, useEffect } from 'react'
import { Album, AlbumView } from '../../model/Search'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../../core/components/SearchForm'
import { fetchAlbums, fetchArtists, useSearchAlbums } from '../../core/hooks/useSearchAlbums'
import { useFetch } from '../../core/hooks/useFetch'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps { }

export const MusicSearchView = (props: Props) => {
    const [{ isLoading, message, results, params: query }, setQuery] = useFetch(fetchAlbums)

    useEffect(() => {
        const q = new URLSearchParams(props.location.search.slice(1)).get('q')
        window.document.title = 'Searching ' + q
        setQuery(q)
    }, [props.location.search])

    const search = useCallback((query) => {
        // props.history.push('/search?q=' + query)
        // props.history.push({
        props.history.replace({
            search: '?q=' + query,
            pathname: '/search',
        })
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm onSearch={search} query={query || ''} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {isLoading && <p className="alert alert-info">Loading</p>}
                    {message && <p className="alert alert-danger">{message}</p>}

                    {results && <div data-testid="search-results">
                        <AlbumGrid albums={results} />
                    </div>}
                </div>
            </div>
        </div>
    )
}
