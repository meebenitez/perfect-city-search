import React from 'react';
import CityList from '../components/CityList';
import Aux from '../components/Aux'

const CityListContainer = (props) => 
    <Aux>
        <div className="intro-container row">
                        <div className="col-xs-12 zero-padding">
                            <span className="bold">Welcome City Sleuths!</span>
                            <br></br>Filter through our database of <span className="bold">26,931 US towns and cities</span> to find hidden gems that perfectly match your priorities and lifestyle.  
                            Follow us on <img src={require('../../assets/images/facebook.png')} className="img-social"/>&nbsp; and <img src={require('../../assets/images/twitter.png')} className="img-social"/> &nbsp; for news and updates!&nbsp;
                            
                        </div>
        </div>
        <div className="row">
            <CityList {...props} />
        </div>
    </Aux> 


export default CityListContainer;

//{props.currentUser !== null ? < Route exact path="/hearted" render={() => ( <CityList {...props} />)} /> : < Route exact path="/hearted" render={() => <div>Looks like you need to sign in.</div>} />}