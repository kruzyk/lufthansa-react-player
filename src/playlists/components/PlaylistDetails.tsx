import React from 'react'
import { Playlist } from '../../model/Playlist'
import styles from './PlaylistDetails.module.css'

// console.log(styles)

interface Props {
    playlist: Playlist,
    edit: React.MouseEventHandler<HTMLButtonElement>
}


export const PlaylistDetails: React.FC<Props> = ({ playlist, edit }) => {
    return (
        <div>
            <dl data-playlist-id={playlist.id}>
                <dt>Name:</dt>

                <dd>{playlist.name}</dd>

                <dt>Public:</dt>
                <dd className={playlist.public ? styles.playlistPublic : styles.playlistPrivate}>
                    {playlist.public ? 'Yes' : 'No'}
                </dd>

                <dt>Description:</dt>
                <dd>{playlist.description}</dd>
            </dl>
            
            <button className="btn btn-danger" onClick={edit}>Edit</button>
        </div>
    )
}

