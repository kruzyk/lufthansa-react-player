import { PlaylistDetails } from "./PlaylistDetails"
import { render, screen, cleanup } from '@testing-library/react';
import { Playlist } from "../../model/Playlist";

export { }

describe('PlaylistDetails', () => {

    const setup = (zmiany: Partial<Playlist>) => {
        const mockPlaylist: Playlist = {
            id: '123', description: 'opis', name: 'placki', public: true, ...zmiany
        };
        const { rerender } = render(<PlaylistDetails playlist={mockPlaylist} edit={() => { }} />)
        // screen.debug(elem)
        return { rerender, mockPlaylist }
    }


    test('shows playlist name', () => {
        setup({ name: 'Nalesniki' })
        const elem = screen.getByTestId('playlist_name')
        expect(elem).toHaveTextContent(/^Nalesniki$/)
    })

    test('shows playlist public', () => {
        setup({ public: true })
        const elem = screen.getByTestId('playlist_ispublic')
        expect(elem).toHaveTextContent('Yes')
        expect(elem).toHaveClass('playlistPublic')
    })

    test('shows playlist private', () => {
        setup({ public: false })
        const elem = screen.getByTestId('playlist_ispublic')
        expect(elem).toHaveTextContent('No')
        expect(elem).toHaveClass('playlistPrivate')
    })

    test('shows playlist description', () => {
        setup({ name: 'opisy kolorowe' })
        const elem = screen.getByTestId('playlist_description')
        expect(elem).toHaveTextContent(/^opisy kolorowe$/)
    })

    test('emits edit event when button clicked', () => { })

})
