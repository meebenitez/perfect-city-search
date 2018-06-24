import React from 'react';
import Aux from '../components/Aux'
import {withCommas, checkParamValues, checkDivClass} from '../components/utils/filterFunctions'

class RentOwnFilter extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)

    }

   

    handleClear() {
        this.props.onFilterChange("RentOwnFilter", "")
    }


    handleChange(event){
        this.props.onFilterChange("RentOwnFilter", `${event.target.value}`, `own-vs-rent=${event.target.value.split("[majority_occupant]=").join("")}`)
    }

    render(){ 

        return (
            <Aux>


                        <span> 
                        <div className="filter-nested">
                            <span className="underline">Own vs Rent</span>
                            <div className="input-filter">
                                <form>
                                    <div className="filter-button">
                                        <label>
                                            <input
                                            type="radio"
                                            value=""
                                            name="toggle"
                                            checked={!this.props.activeFilters.includes("RentOwnFilter")}
                                            onChange={this.handleClear}
                                            />
                                            <span>Any</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[majority_occupant]=owner"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("RentOwnFilter") && checkParamValues(this.props.params, "RentOwnFilter", "[majority_occupant]=owner")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Mostly Owners</span>
                                        </label>
                                        <label>    
                                            <input
                                            type="radio"
                                            value="[majority_occupant]=renter"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("RentOwnFilter") && checkParamValues(this.props.params, "RentOwnFilter", "[majority_occupant]=renter")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Mostly Renters</span>
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

export default RentOwnFilter;
