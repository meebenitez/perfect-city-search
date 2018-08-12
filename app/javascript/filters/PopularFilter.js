import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class PopularFilter extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
    }

    handleClear() {
        this.props.onFilterChange("PopularFilter", "")    
    }

    handleClick(){
        console.log("click")
        if (this.props.activeFilters.includes("PopularFilter")){
            this.props.onFilterChange("PopularFilter", "")
        } else {
            this.props.onFilterChange("PopularFilter", "[popular]=true", "popular=true" )
        }

    }

    render(){   

        return (

            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("PopularFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick}>
                        {this.props.activeFilters.includes("PopularFilter") ? 
                            <img src={require('../../assets/images/star.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greystar.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("PopularFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">Popular</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="x-icon-name-search"/></span></span>
                            : <span>&nbsp;Popular</span>}<label htmlFor="popular"></label>
                    </div>                
                </div>
            </Aux>
            )
        }
}

export default PopularFilter;








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