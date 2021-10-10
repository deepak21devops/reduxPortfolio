import React, { useState } from 'react'
import UpdateWar from '../updateWarning/UpdateWar'
import './updatebar.css'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../redux/userSlicer'
export default function UpdateBar() {

    const dispatch = useDispatch()

    const [first, setFirst] = useState("")
    const [mail, setMail] = useState("")

    const data = useSelector(state => state.repo)
    
    const handleUpdate = (e) => {
        e.preventDefault()

        dispatch(update({ first, mail }))

    }

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
                        <input type="text" placeholder={data.username} onChange={e => setFirst(e.target.value)}></input>

                        <label>Email</label>
                        <input type="text" placeholder={data.email} onChange={e => setMail(e.target.value)}></input>

                        <label>Password</label>
                        <input type="password"></input>

                        <button className="updbtn" onClick={e => handleUpdate(e)}>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
