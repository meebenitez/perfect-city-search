import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class SwingCountyFilter extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleClear() {
        this.props.onFilterChange("SwingCountyFilter", "")    
    }

    handleClick(){
        console.log("click")
        if (this.props.activeFilters.includes("SwingCountyFilter")){
            this.props.onFilterChange("SwingCountyFilter", "")
        } else {
            this.props.onFilterChange("SwingCountyFilter", "[swing_county]=yes", "swing-county=yes" )
        }

    }

    render(){   

        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("SwingCountyFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick}>
                        {this.props.activeFilters.includes("SwingCountyFilter") ? 
                            <img src={require('../../assets/images/star.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greystar.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("SwingCountyFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">Swing County</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Swing County</span>}<label htmlFor="swingCounty"></label>
                    </div>                
                </div>
            </Aux>
            )
        }
}

export default SwingCountyFilter;

