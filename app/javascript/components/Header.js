import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
      return (
        <Aux>
            
               
            <div className="col-xs-10 zero-padding">
                <NavLink to="/" exact className="logolink"><h1>Perfect City Finder&nbsp;<img src={require('../../assets/images/white_pin.png')} className="logo-icon"/></h1></NavLink>
            </div>
            <div className="col-xs-2 zero-padding text-right">
                <Navbar toggleAuthPopup={props.toggleAuthPopup} currentUser={props.currentUser} initialFetch={props.initialFetch}/>
            </div>
     
            
        </Aux>
      )
     
    }
export default Header;