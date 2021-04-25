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
// type props = { x: string } & { y: number }
// type keys = keyof Playlist // 'id' | 'name' | ...


// type Partial<T> = {
//     // [klucz in 'id' | 'name']: string | number;
//     // [klucz in keys]: string | number;
//     // [klucz in keyof Playlist]: string | number;
//     // [klucz in keyof Playlist]: Playlist[klucz]
//     // [klucz in keyof Playlist]?: Playlist[klucz]
//     // [klucz in keyof Playlist]-?: Playlist[klucz]
//     // readonly [klucz in keyof Playlist]: Playlist[klucz]
//     // [klucz in keyof Playlist]?: Playlist[klucz]
//     [klucz in keyof T]?: T[klucz]
// }

const x: Partial<Playlist> = {
    
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
