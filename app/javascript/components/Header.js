import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
      return (
        <Aux> 
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                    <NavLink to="/">
                        CitySleuth USA&nbsp;<img src={require('../../assets/images/redglass.png')} className="logo-icon"/></NavLink>
                    </div>
                </div>
                <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                </div>
                <input type="checkbox" id="nav-check"></input>
                <div className="nav-links">
                    <Navbar toggleAuthPopup={props.toggleAuthPopup} currentUser={props.currentUser} initialFetch={props.initialFetch}/>
                </div>
            </div>
        </Aux>
      )
     
    }
export default Header;


/*

<div class="dropdown">
                <button class="dropbtn navlink1 link-div">☰</button>
                
                <div class="dropdown-content">
                    <a href={window.location.hash}>Advertise with Us</a>
                    <a href={window.location.hash}>Faqs</a>
                    <a href={window.location.hash}>Developer Blog</a>
                    <a href={window.location.hash} onClick={props.toggleAuthPopup}>Sign out</a>

                </div>
            </div>

*/