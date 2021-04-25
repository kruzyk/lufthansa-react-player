import { render, screen } from "@testing-library/react"
import { Playlist } from "../../model/Playlist"
import { PlaylistEditForm } from "./PlaylistEditForm"


describe('PlaylistEditForm', () => {

    const setup = (zmiany: Partial<Playlist>) => {
        const playlist: Playlist = {
            id: '123', name: "Placki", description: 'Awesome', public: true, ...zmiany
        }
        const cancelSpy = jest.fn();
        const saveSpy = jest.fn();
        // const saveSpy = jest.fn((x: Playlist) => { x })
        // const saveSpy = jest.fn<void, [Playlist]>()
        render(<PlaylistEditForm playlist={playlist} cancel={cancelSpy} save={saveSpy} />)
        return { cancelSpy, saveSpy }
    }

    test('shows playlist details', () => {
        const { } = setup({})
        const nameel = screen.getByLabelText('Name:')
        const nameelem2 = screen.getByDisplayValue('Placki')
        // expect(elem).toHaveAttribute('value','Placki')
        expect(nameel).toBe(nameelem2)
        const descrel = screen.getByDisplayValue('Awesome')
        const checkel = screen.getByLabelText('Public')
        expect(checkel).toBeChecked()
    })

    test.todo('counts playlist name length')

    test.todo('emits on cancel with no changes')

    test.todo('emits changed playlist on save')

    test.todo('shows empty playlist ')


})
