import React, { useState } from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    playlists: string[]
    // selectedId?: string
    // onSelected(id: string): void
    // onRemove(id: Playlist['id']): void
}

export const PlaylistList = ({ playlists }: Props) => {

    return (
        <div>
            {!playlists.length && <p>No playlists</p>}

            <ul className="list-group-item">
                {playlists.map((p, index) =>
                    <li key={p}>
                        <span>{index + 1}. {p}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
// <div className="list-group" role="list">
//     {playlists.map((playlist, index) =>
//         <div className={`list-group-item ${selectedId === playlist.id ? 'active' : ''}`}
//             data-playlist-id={playlist.id}
//             onClick={() => { onSelected(playlist.id) }}
//             role="listitem"
//             key={playlist.id}>

//             <span>{playlist.name}</span>

//             <button className="btn btn-light close" onClick={(event) => {
//                 event.stopPropagation()
//                 onRemove(playlist.id)
//             }}>&times;</button>
//         </div>
//     )}
// </div>