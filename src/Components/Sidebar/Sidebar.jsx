import React from 'react'
import './sidebar.css'
import {
    HomeOutlined, FormatListBulletedOutlined
    , Flight, GroupOutlined, FileCopyOutlined, InsertPhotoOutlined,
    OndemandVideoOutlined, AccessTimeOutlined, NotificationsActiveOutlined, SettingsOutlined,
    ExitToAppOutlined
} from '@material-ui/icons'
import { useSelector } from 'react-redux'

export default function Sidebar() {
    const name = useSelector(state => state.user.username)
    return (
        <div className="sidebar">
            <div className="sidebarContainer">
                <ul className="menuList">

                    <li className="menuItems">
                        <HomeOutlined className="menuicon" />
                        <span>Homepage</span>
                    </li>

                    <li className="menuItems">
                        <FormatListBulletedOutlined className="menuicon" />
                        <span>List</span>
                    </li>

                    <li className="menuItems">
                        <Flight className="menuicon" />
                        <span>Products</span>
                    </li>

                    <li className="menuItems">
                        <GroupOutlined className="menuicon" />
                        <span>Groups</span>
                    </li>

                    <li className="menuItems">
                        <FileCopyOutlined className="menuicon" />
                        <span>Pages</span>
                    </li>

                    <li className="menuItems">
                        <InsertPhotoOutlined className="menuicon" />
                        <span>Photos</span>
                    </li>

                    <li className="menuItems">
                        <OndemandVideoOutlined className="menuicon" />
                        <span>Videos</span>
                    </li>

                    <li className="menuItems">
                        <AccessTimeOutlined className="menuicon" />
                        <span>Scheduled</span>
                    </li>

                    <li className="menuItems">
                        <NotificationsActiveOutlined className="menuicon" />
                        <span>Wishlist</span>
                    </li>

                    <li className="menuItems">
                        <SettingsOutlined className="menuicon" />
                        <span>settings</span>
                    </li>

                    <li className="menuItems">
                        <ExitToAppOutlined className="menuicon" />
                        <span>Logout ( {name} )</span>
                    </li>




                </ul>
            </div>
        </div>
    )
}
