import { useState } from "react";
import "../css/Navbar.css";
import enFlag from "../../assets/uk.png";

function Navbar() {

    return (
        <>
            <button 
                className="hamburger" 
            >
                <i className="mdi mdi-menu" />
            </button>
            <div className="profile-container">
                <i className="mdi mdi-account-circle" />
                <div className="profile-info">
                    <p className="profile-name">John Andre</p>
                    <p className="profile-company">Storfjord AS</p>
                </div>
            </div>
            <div className="language-container">
                <p>English</p>
                <img className="profile-image" src={enFlag}/>
            </div>
        </>
    );
}

export default Navbar;
