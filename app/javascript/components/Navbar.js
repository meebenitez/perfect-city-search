import React from 'react';
import Aux from './Aux'
import { NavLink } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import MediaQuery from 'react-responsive'




const Navbar = (props) => {
    return (
        <Aux>
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
                    >{ props.currentUser ?<div className="signup">{props.currentUser}</div> : <div className="signup">Sign up</div> }</NavLink> 
      </Aux>
    )
}


/*
<NavLink
    to={`${window.location.hash}`}
    onClick={props.toggleAuthPopup}
    className="navlink1 link-div link-box"
    activeClassName="navlink1active">{ props.currentUser ?<h5>{props.currentUser}&nbsp;</h5> : <h5>Sign up</h5> }</NavLink>
    */


export default Navbar;
