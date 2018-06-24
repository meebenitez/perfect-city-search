import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class VetFilter extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
    }

    handleClear() {
        this.props.onFilterChange("VetFilter", "")    
    }

    handleClick(){
        console.log("click")
        if (this.props.activeFilters.includes("VetFilter")){
            this.props.onFilterChange("VetFilter", "")
        } else {
            this.props.onFilterChange("VetFilter", "[vet_pop]=true", "vet-population=true" )
        }

    }

    render(){   

        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("VetFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick}>
                        {this.props.activeFilters.includes("VetFilter") ? 
                            <img src={require('../../assets/images/bluemedals.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greymedals.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("VetFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">High Veteran Population</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;High Veteran Population</span>}<label htmlFor="vet"></label>
                    </div>                
                </div>
            </Aux>
            )
        }
}

export default VetFilter;








/*import React from 'react';
import {filterHolderFinder} from '../components/utils/filterFunctions'

const AgeFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="AgeFilter">👥 Median Age:</label>
        </div>
    )
}

export default AgeFilter;

         //   <select value={props.value} defaultValue={filterHolderFinder("AgeFilter", props.params, props.activeFilters)} id= "AgeFilter" onChange={(event) => props.onFilterChange(event)}>
         //           <option value="">Deactivate</option>

                    <option value="[age_from]=0&[age_to]=20">Gen Z</option>
                    <option value="[age_from]=21&[age_to]=39">Millenial</option>
                    <option value="[age_from]=40&[age_to]=51">Gen X</option>
                    <option value="[age_from]=52&[age_to]=70">Baby Boomer</option>
                    <option value="[age_from]=71&[age_to]=150">Silent Age</option>
         //   </select>*/