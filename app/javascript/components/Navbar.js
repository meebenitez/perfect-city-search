import React from 'react';
import Aux from './Aux'
import { NavLink } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import MediaQuery from 'react-responsive'




const Navbar = (props) => {
    return (
        <Aux>


        <MediaQuery minWidth={768}>
            <NavLink
                    to={`${window.location.hash}`}
                    onClick={props.toggleAuthPopup}
                    className="navlink1 link-div link-box"
                    activeClassName="navlink1active">{ props.currentUser ?<h5>{props.currentUser}&nbsp;</h5> : <h5>Sign up</h5> }</NavLink>
            <NavLink
                    to={`${window.location.hash}`}
                    className="navlink1 link-div"
                    activeClassName="navlink1active">Advertise With Us</NavLink>
            <NavLink
                to={`${window.location.hash}`}
                className="navlink1 link-div"
                activeClassName="navlink1active">Faqs</NavLink> 
        </MediaQuery>
        <MediaQuery maxWidth={768}>
            <NavLink
                    to={`${window.location.hash}`}
                    onClick={props.toggleAuthPopup}
                    className="navlink1 link-div link-box"
                    activeClassName="navlink1active">{ props.currentUser ?<h5>{props.currentUser}&nbsp;</h5> : <h5>Sign up</h5> }</NavLink>
        </MediaQuery>

           
              
      </Aux>
    )
}


export default Navbar;
