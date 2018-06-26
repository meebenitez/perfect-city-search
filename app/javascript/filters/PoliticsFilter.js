import React from 'react';
import Aux from '../components/Aux'
import {withCommas, checkParamValues, checkDivClass} from '../components/utils/filterFunctions'

class PoliticsFilter extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)

    }

   

    handleClear() {
        this.props.onFilterChange("PoliticsFilter", "")
    }


    handleChange(event){
        this.props.onFilterChange("PoliticsFilter", `${event.target.value}`, `majority-party=${event.target.value.split("[majority_party]=").join("")}`)
    }

    render(){ 

        return (
            <Aux>                     
                <br></br>
                <br></br>
                    <div className="underline">2016 County Election Results</div>
                    
                        <div className="input-filter">
                            <form>

                                <div className="filter-button">
                                    <label>
                                        <input
                                        type="radio"
                                        value=""
                                        name="toggle"
                                        checked={!this.props.activeFilters.includes("PoliticsFilter")}
                                        onChange={this.handleClear}
                                        />
                                        <span>Any</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[majority_party]=democrat"
                                        name="toggle"
                                        checked={this.props.activeFilters.includes("PoliticsFilter") && checkParamValues(this.props.params, "PoliticsFilter", "[majority_party]=democrat")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Majority Clinton Voters</span>
                                    </label>
                                    <label>    
                                        <input
                                        type="radio"
                                        value="[majority_party]=republican"
                                        name="toggle"
                                        checked={this.props.activeFilters.includes("PoliticsFilter") && checkParamValues(this.props.params, "PoliticsFilter", "[majority_party]=republican")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Majority Trump Voters</span>
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        value="[majority_party]=independent"
                                        checked={this.props.activeFilters.includes("PoliticsFilter") && checkParamValues(this.props.params, "PoliticsFilter", "[majority_party]=independent")}
                                        onChange={this.handleChange}
                                        />
                                        <span>Majority Independent Voters</span>
                                    </label>
                                </div>                                    
                                
                            
                        </form>
                    </div>
                    <br></br>
                    <br></br>   
                    <br></br>                         

            </Aux>
            )
        }
}

export default PoliticsFilter;
