import React, { FC } from 'react'
import styles from './PlaylistDetails.module.css'

// console.log(styles)

interface Props {
    playlist?: {
        id: string;
        name: string;
        public: boolean;
        description: string;
    }
}

export const PlaylistDetails: FC<Props> = ({ playlist }) => {

    // const playlist = props.playlist
    // const { playlist } = props;

    // if (!playlist) {
    //     return <div>
    //         <p className="alert alert-info">Please select playlist </p>
    //     </div>
    // }

    return (
        <div>
            {/* dl>(dt{Name:}+dd{value})*3 */}
            <dl data-playlist-id={playlist!.id}>
                <dt>Name:</dt>

                {/* <dd>{playlist && playlist.name}</dd>
                <dd>{playlist?.name}</dd>
                <dd>{playlist && playlist.name ? playlist.name : 'Default'}</dd> */}
                {/* <dd>{playlist?.name ?? 'Default'}</dd> */}
                <dd>{playlist!.name}</dd>

                <dt>Public:</dt>
                <dd className={playlist!.public ? styles.playlistPublic : styles.playlistPrivate}>
                    {playlist!.public ? 'Yes' : 'No'}
                </dd>

                <dt>Description:</dt>
                <dd>{playlist!.description}</dd>
            </dl>
        </div>
    )
}

PlaylistDetails.defaultProps = {
    playlist: {
        id: '', 
        name: 'Default', 
        public: false, 
        description: ''
    }
}