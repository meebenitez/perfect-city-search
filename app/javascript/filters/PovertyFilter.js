import React from 'react';
import Aux from '../components/Aux'
import {withCommas, checkParamValues, checkDivClass} from '../components/utils/filterFunctions'

class PovertyFilter extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)

    }

   

    handleClear() {
        this.props.onFilterChange("PovertyFilter", "")
    }


    handleChange(event){
        this.props.onFilterChange("PovertyFilter", `${event.target.value}`, `poverty-rate=${event.target.value.split("[poverty_rate]=").join("")}`)
    }

    render(){ 

        return (
            <Aux>


                        <span> 
                        <div className="filter-nested">
                            <span className="underline">Poverty Rate</span>
                            <div className="input-filter">
                                <form>
                                    <div className="filter-button">
                                        <label>
                                            <input
                                            type="radio"
                                            value=""
                                            name="toggle"
                                            checked={!this.props.activeFilters.includes("PovertyFilter")}
                                            onChange={this.handleClear}
                                            />
                                            <span>Any</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[poverty_rate]=low"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("PovertyFilter") && checkParamValues(this.props.params, "PovertyFilter", "[poverty_rate]=low")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Low (below 8%)</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[poverty_rate]=avg"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("PovertyFilter") && checkParamValues(this.props.params, "PovertyFilter", "[poverty_rate]=avg")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Average (8% to 17%)</span>
                                        </label>
                                        <label>    
                                            <input
                                            type="radio"
                                            value="[poverty_rate]=high"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("PovertyFilter") && checkParamValues(this.props.params, "PovertyFilter", "[poverty_rate]=high")}
                                            onChange={this.handleChange}
                                            />
                                            <span>High (above 14%)</span>
                                        </label>
                                    </div>                                    
                                </form>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                         
                            
                        </div>
                    </span>
            </Aux>
            )
        }
}

export default PovertyFilter;
