import React from 'react';
import CityList from '../components/CityList';
import Aux from '../components/Aux'

class CityListContainer extends React.Component {
   constructor(props){
       super(props)
       this.state = {introPopup: true}

       this.closePopup = this.closePopup.bind(this)
   } 

   closePopup(){
    this.setState({
        introPopup: false
    })
   }





   render(){
        return ( <Aux>
                <div className="row">
                    <CityList {...this.props} />
                </div>
            </Aux> 
        )
    }
    

}
export default CityListContainer;

//{props.currentUser !== null ? < Route exact path="/hearted" render={() => ( <CityList {...props} />)} /> : < Route exact path="/hearted" render={() => <div>Looks like you need to sign in.</div>} />}

/*
{ this.state.introPopup ? <div className="intro-container row">
                                <div className="col-xs-12" >
                                <div className="top-right" onClick={this.closePopup}><img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/> </div>
                                    <span className="bold">Welcome City Sleuths!</span>
                                    <br></br>Filter through our database of <span className="bold">26,931 US towns and cities</span> to find hidden gems that perfectly match your priorities and lifestyle.  
                                    Follow us on <img src={require('../../assets/images/facebook.png')} className="img-social"/>&nbsp; and <img src={require('../../assets/images/twitter.png')} className="img-social"/> &nbsp; for news and updates!&nbsp;
                                    
                                </div>
                </div> : null }
                */