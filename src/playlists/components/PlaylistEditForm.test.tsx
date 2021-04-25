import { act, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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

    test('counts playlist name length', () => {
        const { } = setup({})
        const nameInputEl = screen.getByLabelText('Name:') as HTMLInputElement
        const counterRefEl = screen.getByTestId('name_len_counter')
        expect(counterRefEl).toHaveTextContent(`${nameInputEl.value.length} / 170`)

        // https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
        // act(() => { // force all pending re-renders in Sync mode
        //     nameInputEl.value = "Zmienione"
        //     const ev = new InputEvent('input', { bubbles: true })
        //     nameInputEl.dispatchEvent(ev)
        // })
        // fireEvent.change(nameInputEl, { target: { value: "Zmienione" } })

        userEvent.clear(nameInputEl)
        userEvent.type(nameInputEl, 'Zmienione', { /* delay: 0  */})

        expect(counterRefEl).toHaveTextContent(`${"Zmienione".length} / 170`)
    })

    test.todo('emits on cancel with no changes')

    test.todo('emits changed playlist on save')

    test.todo('shows empty playlist ')


})
