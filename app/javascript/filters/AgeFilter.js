import React from 'react';
import Aux from '../components/Aux'
import {checkParamValues} from '../components/utils/filterFunctions'

class AgeFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {agePopup:false}

        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)


    }


    handleClear() {
        this.props.onFilterChange("AgeFilter", "")
    }


    handleChange(event){
        this.props.onFilterChange("AgeFilter", `${event.target.value}`, `median-age=${event.target.value.split("[age_from]=").join("").split("&[age_to]=")[0]}to${event.target.value.split("[age_from]=").join("").split("&[age_to]=")[1]}`)
    }



    render(){ 

        return (
            <Aux>
          
                    <div className="underline">Median Age</div>
                    
                        <div className="input-filter">
                            <form>

                                    <div className="filter-button">
                                        <label>
                                            <input
                                            type="radio"
                                            value=""
                                            name="toggle"
                                            checked={!this.props.activeFilters.includes("AgeFilter")}
                                            onChange={this.handleClear}
                                            />
                                            <span>Any</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[age_from]=0&[age_to]=20"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("AgeFilter") && checkParamValues(this.props.params, "AgeFilter", "[age_from]=0&[age_to]=20")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Gen Z</span>
                                        </label>
                                        <label>    
                                            <input
                                            type="radio"
                                            value="[age_from]=21&[age_to]=39"
                                            name="toggle"
                                            checked={this.props.activeFilters.includes("AgeFilter") && checkParamValues(this.props.params, "AgeFilter", "[age_from]=21&[age_to]=39")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Millenial</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[age_from]=40&[age_to]=51"
                                            checked={this.props.activeFilters.includes("AgeFilter") && checkParamValues(this.props.params, "AgeFilter", "[age_from]=40&[age_to]=51")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Gen X</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[age_from]=52&[age_to]=70"
                                            checked={this.props.activeFilters.includes("AgeFilter") && checkParamValues(this.props.params, "AgeFilter", "[age_from]=52&[age_to]=70")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Baby Boomer</span>
                                        </label>
                                        <label>
                                            <input
                                            type="radio"
                                            value="[age_from]=71&[age_to]=150"
                                            checked={this.props.activeFilters.includes("AgeFilter") && checkParamValues(this.props.params, "AgeFilter", "[age_from]=71&[age_to]=150")}
                                            onChange={this.handleChange}
                                            />
                                            <span>Silent Age</span>
                                        </label>
                                    </div>                                    
                                    
                                
                                </form>
                            </div>                     
                </Aux>
            )
        }
}

export default AgeFilter;


//<select defaultValue={this.props.activeFilters.includes("AgeFilter") ? Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "AgeFilter"})[0])[0].split("&")[0].split("=").pop() : "" } id="AgeFilter" onChange={this.handleChange}




