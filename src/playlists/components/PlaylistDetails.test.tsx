import { PlaylistDetails } from "./PlaylistDetails"
import { render, screen } from '@testing-library/react';

export { }

describe('PlaylistDetails', () => {

    test('shows playlist name', () => {
        const mockPlaylist = {
            id: '123', description: 'opis', name: 'placki', public: true
        };
        render(<PlaylistDetails playlist={mockPlaylist} edit={() => { }} />)

        // screen.debug()
        const elem = screen.getByTestId('playlist_name')
        // expect(elem).toHaveTextContent('placki')
        expect(elem).toHaveTextContent(/^placki$/)
    })

    test('shows playlist public', () => {
        const mockPlaylist = {
            id: '123', description: 'opis', name: 'placki', public: true
        };
        render(<PlaylistDetails playlist={mockPlaylist} edit={() => { }} />)
        const elem = screen.getByTestId('playlist_ispublic')
        expect(elem).toHaveTextContent('Yes')
    })

    test('shows playlist private', () => { })

    test('shows playlist description', () => { })

    test('emits edit event when button clicked', () => { })

})
