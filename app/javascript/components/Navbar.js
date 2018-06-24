import React from 'react';
import Aux from './Aux'
import { NavLink } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';




const Navbar = (props) => {

 

  
    return (
        <Aux>

            <NavLink
                to="#"
                onClick={props.toggleAuthPopup}
                className="navlink1 link-div"
                activeClassName="navlink1active"><h5>Advertise With Us</h5></NavLink>
            <NavLink
                to="#"
                onClick={props.toggleAuthPopup}
                className="navlink1 link-div"
                activeClassName="navlink1active"><h5>Faqs</h5></NavLink>
            <NavLink
                to="#"
                onClick={props.toggleAuthPopup}
                className="navlink1 link-div"
                activeClassName="navlink1active"><h5>Developer Blog</h5></NavLink>
            <NavLink
              to="#"
              onClick={props.toggleAuthPopup}
              className="navlink1 link-box"
              activeClassName="navlink1active">{ props.currentUser ?<h5>{props.currentUser}&nbsp;</h5> : <h5>Sign up</h5> }</NavLink>
              
      </Aux>
    )
}


export default Navbar;

/*
{ props.currentUser ?
  <NavLink
    to="/hearted"
    exact
    className="navlink1"
    activeClassName="navlink1active"
    onClick={() => props.initialFetch("/hearted")}
  ><span style={{color: 'red'}}>♥</span> Saved</NavLink>
  : null }*/