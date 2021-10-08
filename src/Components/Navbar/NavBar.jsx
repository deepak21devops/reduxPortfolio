import React from 'react'
import './navbar.css'
import { ArrowDropDown } from '@material-ui/icons'

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <div className="logo">AnimeTv</div>
                <ul className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <input type="text" placeholder="search for something"></input>
                <div className="profile">
                    <img className="profileimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyU6CVQ16FTCRV3u7AaQAiS53wwqfShSCkw&usqp=CAU" alt=""></img>
                    <span>John</span>
                    <ArrowDropDown className="arrow" />
                </div>
            </div>
        </div>
    )
}
