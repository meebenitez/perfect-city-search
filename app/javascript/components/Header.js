import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
      return (
        <Aux>
            
               
            <div className="row nav">
                <div className="col-xs-10 header-left-padding">
                    <NavLink to="/" exact className="logolink"><h1>PerfectBurg&nbsp;<img src={require('../../assets/images/white_pin.png')} className="logo-icon"/></h1></NavLink>
                </div>
                <div className="col-xs-2 text-right zero-padding">
                    <Navbar toggleAuthPopup={props.toggleAuthPopup} currentUser={props.currentUser} initialFetch={props.initialFetch}/>
                </div>
            </div>
     
            
        </Aux>
      )
     
    }
export default Header;