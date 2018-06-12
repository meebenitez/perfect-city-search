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
              className="navlink1"
              activeClassName="navlink1active">{ props.currentUser ? <h5>{props.currentUser}&nbsp;<img src={require('../../assets/images/logindude.png')} className="login-icon"/></h5> : <h5>Sign up</h5> }</NavLink>
              
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