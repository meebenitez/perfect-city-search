import React from 'react';
import Aux from '../Aux'



const VeteranStats = props => {
    
    
    return (
            <Aux>
                <div className="short-facts-container blue-background">
                    <center>
                        <div className="age-header">Veteran Population</div>
                        <div className="age-container">
                            <img src={require('../../../assets/images/dogtags.png')} className="vet-img"/>
                        </div>
                        <div className="vet-container">
                            Veterans make up <strong>{props.city.vets_perc}%</strong> of the population in {props.city.name}, {props.city.short_state}.
                            <br></br>(The US rate is 6%)
                        </div>
                    </center>
                </div>
            </Aux>
    )
    
} 





export default VeteranStats;