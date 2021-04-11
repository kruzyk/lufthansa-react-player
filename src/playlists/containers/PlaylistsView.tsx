// tsrafc
import React from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { PlaylistList } from '../components/PlaylistList'

interface Props {

}

export const PlaylistsView = (props: Props) => {
    return (
        <div>
            <h4>PlaylistsView</h4>

            {/* .row>.col*2 */}

            <div className="row">
                <div className="col">
                    <PlaylistList />
                </div>  
                <div className="col">
                    <PlaylistDetails />
                    <PlaylistEditForm />
                </div>
            </div>
        </div>
    )
}
