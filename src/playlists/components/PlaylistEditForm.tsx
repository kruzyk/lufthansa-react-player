import React, { ChangeEvent, useState } from 'react'

interface Props {

}

const playlist = {
    id: '123',
    name: 'Placki form',
    public: true,
    description: 'Lubie placki'
}


export const PlaylistEditForm = (props: Props) => {

    // if(Math.random() > .5){
    //     const [magic, setMagic] = useState('Magic!')
    // }

    const [name, setName] = useState(playlist.name)
    const [isPublic, setIsPublic] = useState(playlist.public)
    const [description, setDescription] = useState(playlist.description)

    return (
        <div>
            <h3>PlaylistEditForm</h3>

            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" value={name}
                    onChange={event => setName(event.target.value)} />
                <p>{name.length} / 170</p>
            </div>

            <div className="form-check">
                <label><input type="checkbox" className="form-check-input" checked={isPublic}
                    onChange={event => setIsPublic(event.target.checked)} /> Public </label>
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
            </div>

        </div>
    )
}



// const NameField = () => {
//     const [name, setName] = useState(playlist.name)
//     return <div className="form-group" >
//         <label>Name:</label>
//         <input type="text" className="form-control" value={name} onChange={event => { setName(event.target.value) }} />
//         <p>{name.length} / 170</p>
//     </div>
// }
