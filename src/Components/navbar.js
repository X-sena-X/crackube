import React from 'react';
import './CSS/navbar.css';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar= ()=> {
    
    return(
        <div className='main-wrapper'>
            <div className="section1">
                <div className="companyName">
                    <p>Demo Company</p>
                </div>
                <ul className='sectionList'>
                    <li className="sectionName Home">
                        Home
                    </li>
                    <li className="sectionName">
                        About
                    </li>
                    <li className="sectionName">
                        Work
                    </li>
                    <li className="sectionName">
                        Pricing
                    </li>
                    <li className="sectionName blog">
                        Blog
                    </li>
                </ul>
                <div className="profileSection">
                    <SettingsIcon/>
                    <NotificationsIcon/>
                    <div className='NotificationSign'></div>
                    <img className='profilePhoto' src="dfdsf"/>

                </div>
            </div>
            <div className="section2">
                <div className='text'>We tackle interesting topics every day</div>
                <div className= 'searchSection'>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon className='SerachIcon' />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Find Courses"
                        inputProps={{ 'poppins': 'Find Courses' ,color:"#757B8C"}}
                        className='searchBar'
                    />

                </div>
            </div>
        </div>
    )
}

export default Navbar;