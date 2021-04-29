import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { PlaylistList } from './PlaylistList'

describe.only('PlaylistList', () => {
    const playlistsMock = [
        'Playlista A', 'Playlista B', 'Playlista C',
    ]

    const setup = ({ playlists = playlistsMock }: { playlists?: string[] }) => {
        render(<PlaylistList playlists={playlists} />)
        return { playlists }
    }

    // RED -> GREEN -> Refactor
    test('shows "No playlists" message when no playlists', () => {
        setup({ playlists: [] })
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
        screen.getByText('No playlists')

        cleanup()
        const {playlists} = setup({ })
        expect(screen.queryAllByRole('listitem')).toHaveLength(playlists.length)
        expect(screen.queryByText('No playlists')).not.toBeInTheDocument()
    })

    test('shows list of playlists', () => {
        const { playlists } = setup({})
        const items = screen.getAllByRole('listitem')
        for (let index in playlists) {
            expect(items[index]).toHaveTextContent(playlists[index])
        }
    })


    test.todo('highligts selected playlist')

    test.todo('emits select event when select clicked')

    test.todo('emits remove event when remove clicked')
    test.todo('emits create event when create new clicked')
})
