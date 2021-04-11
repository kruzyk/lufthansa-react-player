import React from 'react'
import styles from './PlaylistDetails.module.css'

// console.log(styles)

interface Props {
    playlist: {
        id: string;
        name: string;
        public: boolean;
        description: string;
    }
}

export const PlaylistDetails = ({ playlist }: Props) => {
    // const playlist = props.playlist
    // const { playlist } = props;

    return (
        <div>
            {/* dl>(dt{Name:}+dd{value})*3 */}
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
        </div>
    )
}
