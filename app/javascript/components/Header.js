import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
      return (
        <Aux> 
            <div className="nav">
                <div className="nav-header">
                    <div className="dropdown-switch">
                        <div className="dropbtn-holder">
                            <div className="dropdown">
                                <div className="dropbtn">☰</div>
                                <div className="dropdown-content">
                                <NavLink
                                    to={`${window.location.hash}`}
                                    activeClassName="navlink1active">Advertise With Us
                                </NavLink>
                                <NavLink
                                    to={`${window.location.hash}`}
                                    activeClassName="navlink1active">Faqs
                                </NavLink>
                                <NavLink
                                        to={`${window.location.hash}`}
                                        onClick={props.toggleAuthPopup}
                                        >{ props.currentUser ? "Sign out" : "Sign up" }</NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-title">
                        <NavLink to="/">
                            CitySleuth USA&nbsp;<img src={require('../../assets/images/redglass.png')} className="logo-icon"/></NavLink>
                    </div>
                </div>
                <div className="nav-links">
                    <Navbar toggleAuthPopup={props.toggleAuthPopup} currentUser={props.currentUser} initialFetch={props.initialFetch}/>
                </div>
                <div className="filter zero-padding">
                    <div className="filter-condensed" onClick={props.toggleExtendedFiltersPopup}>Add Filters</div>
                    <div className="filter-plus" onClick={props.toggleExtendedFiltersPopup}>+</div>  
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