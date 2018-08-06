import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
      return (
        <Aux>   
            <div className="row nav">
                
                <div className="col-xs-4 header-left-padding">
                    <NavLink to="/"><h1>CitySleuth USA&nbsp;<img src={require('../../assets/images/redglass.png')} className="logo-icon"/></h1></NavLink>
                </div>
                <div className="col-xs-8 header-right-container zero-padding">
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