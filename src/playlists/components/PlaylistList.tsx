import React from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    // playlists: Playlist[]
}

export const PlaylistList = (props: Props) => {
    return (
        <div>
            PlaylistList

            <div className="list-group">
                <div className="list-group-item">Text</div>
                <div className="list-group-item">Text</div>
                <div className="list-group-item">Text</div>
            </div>
        </div>
    )
}
