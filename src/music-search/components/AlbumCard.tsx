import React from 'react'

interface Props {

}

export const AlbumCard = (props: Props) => {
    return (
        <div className="card h-100">
            <img src="https://www.placecage.com/c/300/300" className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">Album title</h5>
            </div>
        </div>
    )
}
