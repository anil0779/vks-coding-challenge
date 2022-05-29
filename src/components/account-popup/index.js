import React from "react";
import Popup from "reactjs-popup";
import AccountIcon from './../../assets/account.jpeg';
import './style.css';

export default ({ isMobile }) => (
    <Popup
        trigger={open => (
            <div className="account-logo-button">
                <img className="account-logo" width={isMobile ? '88px' : '38px'} height={isMobile ? '88px' : '38px'} src={AccountIcon} alt='account-logo' />
            </div>
        )}
        position={isMobile ? 'bottom' : "right center"}
        closeOnDocumentClick
        nested
    >
        <div className="account-menu">
            <div><Account /></div>
            <div><Exports /></div>
            <div><Integrations /></div>
            <div><a href="" className="logout-cta">Logout</a></div>
        </div>
    </Popup>
);


const Account = () => {

    return (
        <Popup
            trigger={open => (
                <div className="flex space-between"><div className={open ? 'active' : 'not-active'}>Account</div><div className="margin-l-1 arrow-right">&#62;</div></div>
            )}
            position="right top"
            // nested
            closeOnDocumentClick={true}
            offsetY={-17}
        >
            <div className="account-sub-menu ">
                <div>sub menu</div>
            </div>
        </Popup>
    )
}

const Exports = () => {

    return (
        <Popup
            trigger={open => (
                <div className="flex space-between"><div className={open ? 'active' : 'not-active'}>Your Exports</div><div cclassName="margin-l-1 arrow-right">&#62;</div></div>
            )}
            position="right top"
            // nested
            closeOnDocumentClick={true}
            offsetY={-43}
        >
            <div className="account-sub-menu ">
                <div>Exports sub menu</div>
            </div>
        </Popup>
    )
}

const Integrations = () => {

    return (
        <Popup
            trigger={open => (
                <div className="flex space-between"><div className={open ? 'active' : 'not-active'}>Integrations</div><div className="margin-l-1 arrow-right">&#62;</div></div>
            )}
            position="right top"
            closeOnDocumentClick={true}
            offsetY={-70}
        >
            <div className="account-sub-menu ">
                <div> Integrations sub menu</div>
            </div>
        </Popup>
    )
}
