import { render, screen } from "@testing-library/react";
import { useFetch } from "../../core/hooks/useFetch";
import { usePlaylists } from "../../core/hooks/usePlaylists";
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
    test('loads and shows a list playlists', () => {
        setup()
        
        // Arrange - Given ... // no playlists
        const noItems = screen.queryAllByRole('listitem', {})
        expect(noItems).toHaveLength(0)

        // Act - When ... // loads playlists
        const mockPlaylists: Playlist[] = [
            { id: '123', name: 'TestTitle', description: '', public: false }
        ];
        // (usePlaylists as jest.Mock).mockImplementation(() => { return mockPlaylists })
        (usePlaylists as jest.Mock).mockReturnValue(mockPlaylists)
        expect(usePlaylists).toHaveBeenCalled()

        // Assert - Then ... // Shows list of playlists
        const items = screen.queryAllByRole('listitem', {})
        expect(items).toHaveLength(mockPlaylists.length)
        expect(items[0]).toHaveTextContent('TestTitle')
    })

    test.todo('shows list of no playlists')

    test.todo('selecting playlistlist from list shows details')

    test.todo('clicking edit in details shitches to form')

    /* 

    
    */
})
