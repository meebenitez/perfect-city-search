import React from 'react';
import Aux from './Aux'
import { NavLink } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';




const Navbar = (props) => {
    return (
        <Aux>

            <NavLink
                to={`${window.location.hash}`}
                className="navlink1 link-div"
                activeClassName="navlink1active">Advertise With Us</NavLink>
            <NavLink
                to={`${window.location.hash}`}
                className="navlink1 link-div"
                activeClassName="navlink1active">Faqs</NavLink>
            <NavLink
                to={`${window.location.hash}`}
                className="navlink1 link-div"
                activeClassName="navlink1active">Developer Blog</NavLink>
            <NavLink
              to={`${window.location.hash}`}
              onClick={props.toggleAuthPopup}
              className="navlink1 link-box"
              activeClassName="navlink1active">{ props.currentUser ?<h5>{props.currentUser}&nbsp;</h5> : <h5>Sign up</h5> }</NavLink>
              
      </Aux>
    )
}


export default Navbar;
