import React from 'react'
import styles from './PlaylistDetails.module.css'

// console.log(styles)

interface Props {

}

const playlist = {
    id: '123',
    name: 'Placki',
    public: true,
    description: 'Lubie placki'
}


export const PlaylistDetails = (props: Props) => {
    return (
        <div>
            Details

            {/* dl>(dt{Name:}+dd{value})*3 */}
            <dl data-playlist-id="123">
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
