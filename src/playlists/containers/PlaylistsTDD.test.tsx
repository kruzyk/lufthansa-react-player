import { act, render, screen } from "@testing-library/react";
import { useFetch } from "../../core/hooks/useFetch";
import { fetchPlaylists } from "../../core/hooks/usePlaylists";
import { Playlist } from "../../model/Playlist";
import { PlaylistsTDD } from "./PlaylistsTDD";

jest.mock("../../core/hooks/usePlaylists")

function mocked<T extends (...args: any) => any>(original: T) {
    return original as unknown as jest.Mock<ReturnType<T>, Parameters<T>>
}

describe('PlaylistsTDD', () => {

    const setup = () => {
        render(<PlaylistsTDD />)
    }

    // RED -> Green -> Refactor -> RED ...
    test('loads and shows a list playlists', async () => {
        const mockPlaylists: Playlist[] = [
            { id: '123', name: 'TestTitle', description: '', public: false }
        ];
        let resolve!: Function
        const promise = new Promise<any>(r => { resolve = r; });
        
        (fetchPlaylists as jest.Mock).mockReturnValue(promise)
        // (usePlaylists as jest.Mock).mockImplementation(() => { return mockPlaylists })

        // Arrange - Given ... // no playlists
        setup()
        const noItems = screen.queryAllByRole('listitem', {})
        expect(noItems).toHaveLength(0)

        // Act - When ... // loads playlists
        expect(fetchPlaylists).toHaveBeenCalled()
        await act(() => {
            resolve(mockPlaylists)
            return promise
        })

        // Assert - Then ... // Shows list of playlists
        const items = screen.queryAllByRole('listitem', {})
        expect(items).toHaveLength(mockPlaylists.length)
        expect(items[0]).toHaveTextContent('TestTitle')
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
