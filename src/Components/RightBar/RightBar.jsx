import React from 'react'
import './rightbar.css'
import { ArrowDropDown } from '@material-ui/icons'


export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightContainer">
                <div className="gallery">
                    <span>Recommended by Deepak</span>
                    <img src="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg" alt=""></img>
                </div>

                <div className="gallery">
                    <span>Recommended by Deepak</span>
                    <img src="https://www.hostgator.com/blog/wp-content/uploads/2018/03/how-to-make-a-website-mobile-friendly.jpg" alt=""></img>
                </div>

                <div className="gallery">
                    <span>Recommended by Deepak</span>
                    <img src="http://rightwaymedia.co.in/sites/2020/1/RIGHTWAYMEDIA/updates/2020/1/17989.jpg" alt=""></img>
                </div>

                <div className="dispbtn">
                    <button className="seebtn">See more <ArrowDropDown className="arrow" /></button>
                </div>
            </div>
        </div>
    )
}
