import React from 'react'
import './navbar.css'
import { ArrowDropDown } from '@material-ui/icons'
import { useSelector } from 'react-redux'


export default function NavBar() {

    const name = useSelector(state => state.repo.userInfo)



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
                    <span>{name.username}</span>
                    <ArrowDropDown className="arrow" />
                </div>
            </div>
        </div>
    )
}
