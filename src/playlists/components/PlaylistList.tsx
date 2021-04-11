import React, { useState } from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    playlists: Playlist[]
}

export const PlaylistList = ({ playlists }: Props) => {

    const [selectedId, setSelectedId] = useState<string | null>(null)

    return (
        <div>
            PlaylistList {selectedId}

            <div className="list-group">
                {playlists.map((playlist, index) =>
                    <div className={`list-group-item ${selectedId === playlist.id ? 'active' : ''}`}
                        onClick={() => setSelectedId(playlist.id)}>

                        {playlist.name}
                    </div>
                )}
            </div>
        </div>
    )
}
