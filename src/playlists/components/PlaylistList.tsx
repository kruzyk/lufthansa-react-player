import React, { useState } from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    playlists: Playlist[]
    selectedId?: string
    // setSelectedId(id: Playlist['id']): void
    onSelected(id: string): void
}

export const PlaylistList = ({ playlists, selectedId, onSelected }: Props) => {

    return (
        <div>
            <div className="list-group">
                {playlists.map((playlist, index) =>
                    <div className={`list-group-item ${selectedId === playlist.id ? 'active' : ''}`}
                        onClick={() => onSelected(playlist.id)}

                        key={playlist.id}>
                        {playlist.name}
                    </div>
                )}
            </div>
        </div>
    )
}
