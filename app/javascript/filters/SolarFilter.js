import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class SolarFilter extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
    }

    handleClear() {
        this.props.onFilterChange("SolarFilter", "")    
    }

    handleClick(){
        console.log("click")
        if (this.props.activeFilters.includes("SolarFilter")){
            this.props.onFilterChange("SolarFilter", "")
        } else {
            this.props.onFilterChange("SolarFilter", "[solar]=true", "solar-friendly=true" )
        }

    }

    render(){   

        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("SolarFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick}>
                        {this.props.activeFilters.includes("SolarFilter") ? 
                            <img src={require('../../assets/images/star.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greystar.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("SolarFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">Solar</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Solar</span>}<label htmlFor="solar"></label>
                    </div>                
                </div>
            </Aux>
            )
        }
}

export default SolarFilter;


