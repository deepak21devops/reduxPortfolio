import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import UpdateWar from '../../pages/updateWarning/UpdateWar'
import './updatebar.css'

export default function UpdateBar() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const user = useSelector(state => state.user)
    return (
        <div className="updatebar">
            <div className="updateContainer">
                <UpdateWar />
                <div className="profileUpdate">
                    <h3 className="heading">Profile Picture</h3>
                    <div className="profileContent">
                        <img className="profileimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyU6CVQ16FTCRV3u7AaQAiS53wwqfShSCkw&usqp=CAU" alt=""></img>
                        <label for="file">Change</label>
                        <input type="file" id="file" name="value" style={{ display: "none" }}></input>
                    </div>
                    <form className="formContent">
                        <label>Username</label>
                        <input type="text" placeholder={user.username} onChange={e => setName(e.target.value)}></input>

                        <label>Email</label>
                        <input type="text" placeholder={user.email} onChange={e => setEmail(e.target.value)}></input>

                        <label>Password</label>
                        <input type="password"></input>

                        <button className="updbtn">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
