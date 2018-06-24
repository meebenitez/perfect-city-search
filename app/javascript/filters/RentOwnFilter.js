import React from 'react';
import Aux from '../components/Aux'
import {withCommas, checkParamValues, checkDivClass} from '../components/utils/filterFunctions'

class PopulationFilter extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)

    }

   

    handleClear() {
        this.props.onFilterChange("PopulationFilter", "")
    }


    handleChange(event){
        this.props.onFilterChange("PopulationFilter", `${event.target.value}`, `population=${event.target.value.split("[pop_from]=").join("").split("&[pop_to]=")[0]}to${event.target.value.split("[pop_from]=").join("").split("&[pop_to]=")[1]}`)
    }

    render(){ 

        return (
            <Aux>


                        <span> 
                        <div className="filter-nested">
                            <span className="underline">Number of Residents</span>
                            <br></br>
                            <form>

                                    <div className="filter-button">
                                        <label>
                                            <input
                                            type="radio"
                                            value=""
                                            name="toggle"
                                            checked={!this.props.activeFilters.includes("PopulationFilter")}
                                            onChange={this.handleClear}
                                            />
                                            <span>Any</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[pop_from]=400000&[pop_to]=100000000"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("PopulationFilter") && checkParamValues(this.props.params, "PopulationFilter", "[pop_from]=400000&[pop_to]=100000000")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Large (400K to 2M+)</span>
                                        </label>
                                        <label>    
                                            <input
                                            type="radio"
                                            value="[pop_from]=50000&[pop_to]=400000"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("PopulationFilter") && checkParamValues(this.props.params, "PopulationFilter", "[pop_from]=50000&[pop_to]=400000")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Medium (50K to 400K)</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[pop_from]=10000&[pop_to]=50000"
                                            checked={this.props.activeFilters.includes("PopulationFilter") && checkParamValues(this.props.params, "PopulationFilter", "[pop_from]=10000&[pop_to]=50000")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Small (10K to 50K)</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[pop_from]=1000&[pop_to]=10000"
                                            checked={this.props.activeFilters.includes("PopulationFilter") && checkParamValues(this.props.params, "PopulationFilter", "[pop_from]=1000&[pop_to]=10000")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Very Small (1K to 10K)</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[pop_from]=100&[pop_to]=1000"
                                            checked={this.props.activeFilters.includes("PopulationFilter") && checkParamValues(this.props.params, "PopulationFilter", "[pop_from]=100&[pop_to]=1000")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Tiny (100 to 1K)</span>
                                        </label>
                                    </div>                                    
                                    
                                
                            </form>
                            <br></br>
                            <br></br>
                            <br></br>
                         
                            
                        </div>
                    </span>
            </Aux>
            )
        }
}

export default PopulationFilter;
