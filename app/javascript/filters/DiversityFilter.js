import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class DiversityFilter extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleClear() {
        this.props.onFilterChange("DiversityFilter", "")    
    }

    handleClick(){
        console.log("click")
        if (this.props.activeFilters.includes("DiversityFilter")){
            this.props.onFilterChange("DiversityFilter", "")
        } else {
            this.props.onFilterChange("DiversityFilter", "[diversity]=yes", "high-diversity=yes" )
        }

    }

    render(){   

        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("DiversityFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick}>
                        {this.props.activeFilters.includes("DiversityFilter") ? 
                            <img src={require('../../assets/images/star.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greystar.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("DiversityFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">Racially Diverse</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Diversity</span>}<label htmlFor="diversity"></label>
                    </div>                
                </div>
            </Aux>
            )
        }
}

export default DiversityFilter;

