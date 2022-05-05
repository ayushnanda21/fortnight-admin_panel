import "./sidebar.scss"
import React from 'react'

//material-ui icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import DeliveryDiningSharpIcon from '@mui/icons-material/DeliveryDiningSharp';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import FolderSharedSharpIcon from '@mui/icons-material/FolderSharedSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

const Sidebar = () => {
  return (
    <div className="sidebar">

        <div className="top">
            <span className="logo">Fortnight Admin </span>
        </div>
        <hr />

        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon" /> 
                    <span>Dashboard</span> 
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineOutlinedIcon className="icon" /> 
                    <span>Users</span> 
                </li>
                <li>
                    <Inventory2Icon className="icon" /> 
                    <span>Products</span> 
                </li>
                <li>
                    <ShoppingBasketSharpIcon className="icon" /> 
                    <span>Orders</span> 
                </li>
               
                <li>
                    <DeliveryDiningSharpIcon className="icon"  /> 
                    <span>Delivery</span> 
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsSharpIcon className="icon" /> 
                    <span>Stats</span> 
                </li>
                <li>
                    <NotificationsActiveSharpIcon className="icon" /> 
                    <span>Notifications</span> 
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetySharpIcon className="icon" /> 
                    <span>System Health</span> 
                </li>
                <li>
                    <MenuBookSharpIcon className="icon" /> 
                    <span>Logs</span> 
                </li>
                <li>
                    <SettingsApplicationsSharpIcon className="icon"  /> 
                    <span>Settings</span> 
                </li>
                <p className="title">USER</p>
                <li>
                    <FolderSharedSharpIcon className="icon" /> 
                    <span>Profile</span> 
                </li>
                <li>
                    <LogoutSharpIcon className="icon" /> 
                    <span>Logout</span> 
                </li>
               
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            
        </div>
    
    </div>
  )
}

export default Sidebar