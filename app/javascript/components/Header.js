import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
      return (
        <Aux>
            
                <div className="header-wide">
                    <div className="col-xs-12 red-background">
                        <NavLink to="/" exact className="logolink"><h1>Perfect City Finder&nbsp;<img src={require('../../assets/images/white_pin.png')} className="logo-icon"/></h1></NavLink>
                        <div className="navbar">
                            <Navbar toggleAuthPopup={props.toggleAuthPopup} currentUser={props.currentUser} initialFetch={props.initialFetch}/>
                        </div>
                    </div>
                </div>
            
        </Aux>
      )
     
    }
export default Header;