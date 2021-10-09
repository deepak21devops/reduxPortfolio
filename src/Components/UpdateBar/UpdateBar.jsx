import React from 'react'
import UpdateWar from '../../pages/updateWarning/UpdateWar'
import './updatebar.css'

export default function UpdateBar() {
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
                        <input type="text" placeholder="John"></input>

                        <label>Email</label>
                        <input type="text" placeholder="John123@gmail.com"></input>

                        <label>Password</label>
                        <input type="password"></input>

                        <button className="updbtn">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
