import React from 'react';
import Aux from './Aux'
import { NavLink } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';




const Navbar = (props) => {

 

  
    return (
        <Aux>
          { props.currentUser ?
              <NavLink
                to="/hearted"
                exact
                className="navlink1"
                activeClassName="navlink1active"
                onClick={() => props.initialFetch("/hearted")}
              ><span style={{color: 'red'}}>♥</span> Saved</NavLink>
              : null }
            <img src={require('../../assets/images/teal_trees1.png')} className="logo-icon"/><img src={require('../../assets/images/teal_tree.png')} className="logo-icon"/><NavLink
              to="#"
              onClick={props.toggleAuthPopup}
              className="navlink1"
              activeClassName="navlink1active">{ props.currentUser ? "Logout" : "Login" }</NavLink><img src={require('../../assets/images/teal_trees1.png')} className="logo-icon"/>
      </Aux>
    )
}


export default Navbar;