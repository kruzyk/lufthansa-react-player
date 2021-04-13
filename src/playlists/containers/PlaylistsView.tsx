// tsrafc
import React, { useEffect, useState } from 'react'
import { Playlist } from '../../model/Playlist'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { PlaylistList } from '../components/PlaylistList'

interface Props { }

const data: Playlist[] = [
    {
        id: '123',
        name: 'Playlista 😇',
        public: true,
        description: 'no i co ja dzis polubie?..🤔'
    },
    {
        id: '234',
        name: 'Playlista 😁',
        public: false,
        description: 'moze polubię TypeScript?. 🚀'
    },
    {
        id: '345',
        name: 'Playlista 😆',
        public: true,
        description: 'albo wszystko polubię co mi tam 😅💖'
    },

]

export const PlaylistsView = (props: Props) => {
    const [selectedId, setSelectedId] = useState<string | undefined>('234')
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>()
    const [mode, setMode] = useState<'details' | 'form'>('details')
    const [playlists, setPlaylists] = useState<Playlist[]>(data)

    /* TODO:
        - Przycisk Edit w Details "przełącza" na formularza (*zmiana mode! props!) **=> ---DONE
        - Przycisk Cancel w Formularzu "przełącza" na details (*zmiana mode! props!) **=> ---DONE
        - Przycisk Save w Formularzu:
            - "przełącza" na details (*zmiana mode! props!)
            - przekazuje Draft (szkic / nizapisane dane playlisty *props!) do PlaylistsView
            - PlaylistsView podmienia szkic na liście playlist (! Immutable - kopia renderuje!)

        - Zapisana playlista jest widoczna na liscie i w details!
    */

    const edit = () => {
        setMode('form')
    }
    const cancel = () => {
        setMode('details')
    }
    const save = (draft: Playlist) => {
        setMode('details')
        const index = playlists.findIndex(p => p.id === draft.id)
        if (index !== -1) {
             setPlaylists([
                 ...playlists.slice(0, index),
                 draft,
                 ...playlists.slice(index + 1)
             ])
        }
    }

    useEffect(() => {
        setSelectedPlaylist(playlists.find(p => p.id == selectedId))
    }, [selectedId, playlists])

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
                </div>
                <div className="col">
                    {selectedPlaylist && mode === 'details' && <PlaylistDetails 
                    edit={edit}
                    playlist={selectedPlaylist} />}
                    {selectedPlaylist && mode === 'form' && <PlaylistEditForm 
                    save={save}
                    playlist={selectedPlaylist} 
                    cancel={cancel}/>}
                </div>
            </div>
        </div>
    )
}
