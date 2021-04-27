import { act, render, screen, waitFor } from "@testing-library/react";
import { promises } from "node:dns";
import { useFetch } from "../../core/hooks/useFetch";
import { fetchPlaylists } from "../../core/hooks/usePlaylists";
import { Playlist } from "../../model/Playlist";
import { PlaylistsTDD } from "./PlaylistsTDD";

jest.mock("../../core/hooks/usePlaylists")

function mocked<T extends (...args: any) => any>(original: T) {
    return original as unknown as jest.Mock<ReturnType<T>, Parameters<T>>
}
// const fubc = () => {}
// const fubc = () => {faketimers}
// const fubc1 = (done) => { promises.then(done)}
// const fubc2 = async () => { await promise}

describe('PlaylistsTDD', () => {

    const setup = () => {
        render(<PlaylistsTDD />)
    }

    // RED -> Green -> Refactor -> RED ...
    test('loads and shows a list playlists', async () => {
        // Arrange - Given ... // no playlists
        const mockPlaylists: Playlist[] = [
            { id: '123', name: 'TestTitle 1', description: '', public: false },
            { id: '234', name: 'TestTitle 2', description: '', public: false },
        ];
        jest.useFakeTimers();

        ; (fetchPlaylists as jest.Mock).mockImplementation(() => {
            return new Promise(resolve => setTimeout(() => resolve(mockPlaylists), 500))
        })

        // Act - When ... // loads playlists
        setup()
        const noItems = screen.queryAllByRole('listitem', {})
        expect(noItems).toHaveLength(0)
        expect(fetchPlaylists).toHaveBeenCalled()

        jest.advanceTimersToNextTimer()

        // Assert - Then ... // Shows list of playlists
        // const items = await waitFor(() => screen.getAllByRole('listitem', {}))

        const items = await screen.findAllByRole('listitem', {})
        expect(items).toHaveLength(mockPlaylists.length)
        expect(items[0]).toHaveTextContent('TestTitle 1')
        expect(items[1]).toHaveTextContent('TestTitle 2')

    })

    test.todo('shows list of no playlists')

    test.todo('selecting playlistlist from list shows details')

    test.todo('clicking edit in details shitches to form')

    // test('Function adds numbers', () => {
    //     const add = (x:number, y:number) => 5;

    //     expect(add(2, 3)).toEqual(5)
    // })

    /* 

    
    */
})
