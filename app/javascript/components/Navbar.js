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
            <div class="dropdown">
                <button class="dropbtn navlink1 link-div">☰</button>
                <NavLink
                        to={`${window.location.hash}`}
                        onClick={props.toggleAuthPopup}
                        className="navlink1 link-div link-box"
                        activeClassName="navlink1active">{ props.currentUser ?<h5>{props.currentUser}&nbsp;</h5> : <h5>Sign up</h5> }</NavLink>
                <div class="dropdown-content">
                    <a href={window.location.hash}>Advertise with Us</a>
                    <a href={window.location.hash}>Faqs</a>
                    <a href={window.location.hash}>Developer Blog</a>
                    <a href={window.location.hash} onClick={props.toggleAuthPopup}>Sign out</a>

                </div>
            </div>

            
        </MediaQuery>

           
              
      </Aux>
    )
}


export default Navbar;
