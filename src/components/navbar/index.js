import React from "react";
import { NavLink } from 'react-router-dom';
import ListIcon from './../../assets/list-icon.png';
import SearchIcon from './../../assets/search-icon.png';
import AppLogo from './../../assets/logo-contactout.png';
import AccountIcon from './../../assets/account.jpeg';
import AccountComponent from "./../account-popup";
import useCheckMobileScreen from './../../hooks/useCheckMobileScreen.hook'

import './style.css';

export default () => {

    const isMobile = useCheckMobileScreen();

    return (
        <>
            {
                isMobile ?
                    <div className="navbar">
                            <NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='list'><div className="icon-container flex flex-column flex-center app-logo"><img width={isMobile ? '68' :'32px'} height={isMobile ? '68' :'32px'} src={AppLogo} alt='app-logo' /><div></div></div></NavLink>
                            <AccountComponent isMobile={isMobile}/>
                    </div>
                    :
                    <div className="navbar">
                        <div>
                            <NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='list'><div className="icon-container flex flex-column flex-center app-logo"><img width='32px' height='32px' src={AppLogo} alt='app-logo' /><div></div></div></NavLink>
                            <NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='list'><div className="menu-icon icon-container flex flex-column flex-center"><img width='20px' height='20px' src={ListIcon} alt='list' /><div className="icon-text">List</div></div></NavLink>
                            <NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to='search'><div className="menu-icon icon-container flex flex-column flex-center"><img width='20px' height='20px' src={SearchIcon} alt='search' /><div className="icon-text">Search</div></div></NavLink>
                        </div>
                        <AccountComponent />
                    </div>
            }
        </>

    )
}