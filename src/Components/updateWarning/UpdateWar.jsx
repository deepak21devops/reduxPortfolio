import React from 'react'
import './updatewar.css'


export default function UpdateWar() {


    const handleDelete = (e) => {
        e.preventDefault()
        // dispatch(remove())


    }
    return (
        <div className="updateWar">
            <div className="warningContainer">
                <h2 className="updateTitle">Update Your Account</h2>
                <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas molestias nam nisi officiis in ad reiciendis at suscipit placeat?
                </p>
                <button className="delbtn" onClick={e => handleDelete(e)}>Delete Account</button>
            </div>
        </div>
    )
}
