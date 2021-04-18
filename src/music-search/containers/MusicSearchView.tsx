import React from 'react'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../components/SearchForm'

interface Props {
    
}

export const MusicSearchView = (props: Props) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlbumGrid/>
                </div>
            </div>
        </div>
    )
}
