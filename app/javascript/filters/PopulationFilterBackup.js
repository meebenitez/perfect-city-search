import React from 'react';
import Aux from '../components/Aux'
import {withCommas, checkParamValues, checkDivClass} from '../components/utils/filterFunctions'

class PopulationFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {populationPopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setPopulationPopupRef = this.setPopulationPopupRef.bind(this);
        this.setPopulationButtonRef = this.setPopulationButtonRef.bind(this);

    }

    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOuterClick);
      }

      setPopulationPopupRef(node) {
        this.populationPopupRef = node;
      }
      
      setPopulationButtonRef(node) {
        this.populationButtonRef = node;
      }

   

      handleOuterClick(event) {
        if (this.populationPopupRef && !this.populationPopupRef.contains(event.target) && !this.populationButtonRef.contains(event.target)) {
            this.setState({
                populationPopup: false
            })
        }
      }

  

    handleClear() {
        this.props.onFilterChange("PopulationFilter", "")
    }

    handleClick(event){
            this.setState({
                populationPopup: !this.state.populationPopup
            })

    }


    handleChange(event){
        this.props.onFilterChange("PopulationFilter", `${event.target.value}`, `population=${event.target.value.split("[pop_from]=").join("").split("&[pop_to]=")[0]}to${event.target.value.split("[pop_from]=").join("").split("&[pop_to]=")[1]}`)
    }

    render(){ 
        const POPULATIONMAPPING = {
            "[pop_from]=400000&[pop_to]=100000000":"Large (400K to 2M+)",
            "[pop_from]=50000&[pop_to]=400000":"Medium (50K to 400K)",
            "[pop_from]=10000&[pop_to]=50000":"Small (10K to 50K)",
            "[pop_from]=1000&[pop_to]=10000":"Very Small (1K to 10K)",
            "[pop_from]=100&[pop_to]=1000":"Tiny (100 to 1K)"
        }    

        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={checkDivClass(this.props.activeFilters, "PopulationFilter", this.state.populationPopup)} data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setPopulationButtonRef}>
                        {this.props.activeFilters.includes("PopulationFilter") ? 
                            <img src={require('../../assets/images/bluepop.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greypop.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("PopulationFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">{POPULATIONMAPPING[Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "PopulationFilter"})[0])[0]]}</span><span onClick={this.handleClear}></span></span>
                            : <span>&nbsp;&nbsp;Population Size</span>}&nbsp;&nbsp;<img src={require('../../assets/images/greydownarrow.png')} className="filter-icon-md"/><label htmlFor="Population"></label>
                    </div>
                    {this.state.populationPopup ?
                    <span> 
                        <div className="filter-popup-div demographics-div" ref={this.setPopulationPopupRef}>
                            
                        <span> 
                        <div>
                            <span className="underline">Population Size in Residents</span>
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
                         
                            
                        </div>
                    </span>
                            
                        
                </div> 
            </span> : null }
            </div>
            </Aux>
            )
        }
}

export default PopulationFilter;
