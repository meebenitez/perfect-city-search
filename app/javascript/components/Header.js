import React from 'react';
import Aux from './Aux'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
      return (
        <Aux>
            
                <div className="header-wide">
                    <div className="header-container max-width">
                        <NavLink to="/" exact className="logolink"><h1><img src={require('../../assets/images/teal_buildings5.png')} className="logo-icon"/><img src={require('../../assets/images/teal_buildings6.png')} className="logo-icon"/><img src={require('../../assets/images/teal_trees1.png')} className="logo-icon"/>&nbsp;Perfect City Finder&nbsp;<img src={require('../../assets/images/teal_tree.png')} className="logo-icon"/><img src={require('../../assets/images/teal_building1.png')} className="logo-icon"/><img src={require('../../assets/images/teal_buildings4.png')} className="logo-icon"/></h1></NavLink>
                        <div className="navbar">
                            <Navbar toggleAuthPopup={props.toggleAuthPopup} currentUser={props.currentUser} initialFetch={props.initialFetch}/>
                        </div>
                    </div>
                </div>
            
        </Aux>
      )
     
    }
export default Header;