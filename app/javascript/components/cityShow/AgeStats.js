import React from 'react';
import Aux from '../Aux'



const AgeStats = props => {
    
    
    return (
            <Aux>
                <div className="short-facts-container grey-background">
                    <center>
                        <div className="age-header">Median Age</div>
                        <div className="age-container">
                            <img src={require('../../../assets/images/female.png')} className="age-img-sex"/>
                            <div className="age-sex">{props.city.age_median_female} years</div>
                        </div>
                        <div className="age-container">
                            <img src={require('../../../assets/images/person2.png')} className="age-img"/>
                            <div className="age-main"><strong>{props.city.age_median} years</strong></div>
                        </div>
                        <div className="age-container">
                            <img src={require('../../../assets/images/male.png')} className="age-img-sex"/>
                            <div className="age-sex">{props.city.age_median_male} years</div>
                        </div>                                       
                    </center>
                </div>
            </Aux>
    )
    
} 





export default AgeStats;