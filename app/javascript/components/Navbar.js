import React from 'react';
import Aux from './Aux'
import { NavLink } from 'react-router-dom';




const Navbar = (props) => {


    return (
        <Aux>
          <NavLink
            to="/"
            exact
            className="navlink1"
            activeClassName="navlink1active"
            onClick={() => props.initialFetch("/")}
          >City Search</NavLink>
          <NavLink
            to="/popular"
            exact
            className="navlink1"
            activeClassName="navlink1active"
            onClick={() => props.initialFetch("/popular")}
          >⭐ Popular</NavLink>
          
          { props.currentUser ?
              <NavLink
                to="/hearted"
                exact
                className="navlink1"
                activeClassName="navlink1active"
                onClick={() => props.initialFetch("/hearted")}
              ><span style={{color: 'red'}}>♥</span> Saved</NavLink>
              : null }
            <NavLink
              to="#"
              onClick={props.toggleAuthPopup}
              className="navlink1"
              activeClassName="navlink1active">{ props.currentUser ? "Logout" : "Login" }</NavLink>
      </Aux>
    )
}


export default Navbar;