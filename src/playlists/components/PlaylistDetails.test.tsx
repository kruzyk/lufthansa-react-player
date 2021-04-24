import { PlaylistDetails } from "./PlaylistDetails"
import { render, screen, cleanup } from '@testing-library/react';

export { }

describe('PlaylistDetails', () => {

    beforeEach(() => {
        const mockPlaylist = {
            id: '123', description: 'opis', name: 'placki', public: true
        };
        render(<PlaylistDetails playlist={mockPlaylist} edit={() => { }} />)
        // screen.debug(elem)
    })


    test('shows playlist name', () => {
        const elem = screen.getByTestId('playlist_name')
        expect(elem).toHaveTextContent(/^placki$/)
    })

    test('shows playlist public', () => {
        const elem = screen.getByTestId('playlist_ispublic')
        expect(elem).toHaveTextContent('Yes')
        expect(elem).toHaveClass('playlistPublic')
    })

    test('shows playlist private', () => {
        cleanup()
        const mockPlaylist = {
            id: '123', description: 'opis', name: 'placki', public: false
        };
        render(<PlaylistDetails playlist={mockPlaylist} edit={() => { }} />)
        const elem = screen.getByTestId('playlist_ispublic')
        expect(elem).toHaveTextContent('No')
        expect(elem).toHaveClass('playlistPrivate')
    })

    test('shows playlist description', () => { })

    test('emits edit event when button clicked', () => { })

})
