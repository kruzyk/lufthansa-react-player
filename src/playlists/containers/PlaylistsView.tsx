// tsrafc
import React, { useEffect, useState } from 'react'
import { Playlist } from '../../model/Playlist'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { PlaylistList } from '../components/PlaylistList'

interface Props { }

const playlist = {
    id: '123',
    name: 'Placki',
    public: true,
    description: 'Lubie placki'
}

const playlists: Playlist[] = [
    {
        id: '123',
        name: 'Playlista 123',
        public: true,
        description: 'Lubie placki'
    },
    {
        id: '234',
        name: 'Playlista 234',
        public: false,
        description: 'Lubie placki'
    },
    {
        id: '345',
        name: 'Playlista 345',
        public: true,
        description: 'Lubie placki'
    },

]

export const PlaylistsView = (props: Props) => {
    const [forceUpdate, setForceUpdate] = useState(Date.now())
    const [selectedId, setSelectedId] = useState<string | undefined>('234')
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>()

    // Dont Repeat Yourself
    // We Enjoy Typing 

    useEffect(() => {
        // console.log('Render Real DOM')
        setSelectedPlaylist(playlists.find(p => p.id == selectedId))

    }, [selectedId, forceUpdate])

    // console.log('Render VirtualDOM')
    return (
        <div>
            <h4>PlaylistsView</h4>

            {/* .row>.col*2 */}

            <div className="row">
                <div className="col">
                    <PlaylistList
                        onSelected={id => { setSelectedId(id) }}
                        playlists={playlists}
                        selectedId={selectedId} />


                    {/* <input type="text" value={zmienna}
                        onChange={event => setCostam(event.costam) }/> */}
                </div>
                <div className="col">

                    {selectedPlaylist && <PlaylistDetails playlist={selectedPlaylist} />}

                    {selectedPlaylist && <PlaylistEditForm  playlist={selectedPlaylist} />}
                </div>
            </div>
        </div>
    )
}
