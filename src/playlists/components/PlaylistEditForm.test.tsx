import { render } from "@testing-library/react"
import { Playlist } from "../../model/Playlist"
import { PlaylistEditForm } from "./PlaylistEditForm"

interface Playlist {
    id: string;
    name: string;
    public: boolean;
    description: string;
}
// type mode = 'show' | 'edit'
// type result = { type: 'album' } | { type: 'artist' }

type PlaylistMap = {
    // [klucz: string]: string | number;
}

const x: PlaylistMap = {
    '123': '123',
    '12123': '123',
    123234: 123,
    1232343: 123,
    123123123: 123,
    123123: 123,
}


describe('PlaylistEditForm', () => {

    const setup = (playlist: Playlist) => {
        const playlist: Playlist = {
            id: '123', name: "Placki", description: 'Awesome', public: true
        }
        render(<PlaylistEditForm playlist={playlist} />)
    }

    test('shows playlist details', () => {

    })

    test.todo('counts playlist name length')

    test.todo('emits on cancel with no changes')

    test.todo('emits changed playlist on save')

    test.todo('shows empty playlist ')


})
