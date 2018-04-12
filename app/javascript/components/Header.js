import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
      return (
        <Aux>
            <div className="underline">
                <NavLink to="/" exact className="logolink"><h1>Perfect City Finder</h1></NavLink>
                <div className="navbar">
                    <Navbar toggleAuthPopup={props.toggleAuthPopup} currentUser={props.currentUser} initialFetch={props.initialFetch}/>
                </div>
            </div>
        </Aux>
      )
     
    }
export default Header;