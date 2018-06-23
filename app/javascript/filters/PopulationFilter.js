import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

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
        this.setPopulationXRef = this.setPopulationXRef.bind(this);

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

      setPopulationXRef(node) {
        this.populationXRef = node;
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
        if (this.props.activeFilters.includes("PopulationFilter") && this.populationXRef.contains(event.target)){
            this.setState({
                populationPopup: false
            })
        } else {
            this.setState({
                populationPopup: !this.state.populationPopup
            })
        }

    }


    handleChange(event){
        this.props.onFilterChange("PopulationFilter", `${event.target.value}`, `population=${event.target.value.split("[pop_from]=").join("").split("&[pop_to]=")[0]}to${event.target.value.split("[pop_from]=").join("").split("&[pop_to]=")[1]}`)
    }

    render(){ 
        const POPULATIONMAPPING = {
            "[pop_from]=400000&[pop_to]=100000000":"Big Pop",
            "[pop_from]=50000&[pop_to]=400000":"Medium Pop",
            "[pop_from]=10000&[pop_to]=50000":"Small Pop",
            "[pop_from]=1000&[pop_to]=10000":"Very Small Pop",
            "[pop_from]=100&[pop_to]=1000":"Tiny Pop"
        }    

        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("PopulationFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="test test yoyo" onClick={this.handleClick} ref={this.setPopulationButtonRef}>
                        {this.props.activeFilters.includes("PopulationFilter") ? 
                            <img src={require('../../assets/images/bluepop.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greypop.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("PopulationFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">{POPULATIONMAPPING[Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "PopulationFilter"})[0])[0]]}</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm" ref={this.setPopulationXRef}/></span></span>
                            : <span>&nbsp;Pop Size</span>}<label htmlFor="Population"></label>
                    </div>
                    {this.state.populationPopup ?
                    <span> 
                        <div className="filter-popup-div income-div" ref={this.setPopulationPopupRef}>
                            <span className="bold">Population Size:</span>
                            <br></br>
                            <select defaultValue={this.props.activeFilters.includes("PopulationFilter")? Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "PopulationFilter"})[0])[0].split("&")[0].split("=").pop() : "" } id="PopulationFilter" onChange={this.handleChange}>
                                <option value="">Any</option>
                                <option value="[pop_from]=400000&[pop_to]=100000000">Big (400K to 2M+)</option>
                                <option value="[pop_from]=50000&[pop_to]=400000">Medium (50K to 400K)</option>
                                <option value="[pop_from]=10000&[pop_to]=50000">Small (10K to 50K)</option>
                                <option value="[pop_from]=1000&[pop_to]=10000">Very Small (1K to 10K)</option>
                                <option value="[pop_from]=100&[pop_to]=1000">Tiny (100 to 1K)</option>
                            </select>
                        </div>
                    </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default PopulationFilter;

/*
import React from 'react';

class PopulationFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.isActive !== undefined ? {checked: true} : {checked: false}
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleClick(){
        this.setState({
            checked: !this.state.checked
        },() => {
            if (this.state.checked === true ) {
                debugger;
                this.props.onFilterChange("PopulationFilter", `[home_price_from]=${this.state.min}&[home_price_to]=${this.state.max}`, `home-price=${this.state.min}to${this.state.max}`)
            } else {
                debugger;
                this.props.onFilterChange("HomePriceFilter", "")
            }
        });

    }

    handleChange(event){
        debugger;
    }

    

    render(){    

        return (
            <div className="filter-div">
                <input type="checkbox" id= "PopulationFilter" onChange={this.handleClick} checked={this.state.checked} />
                <label htmlFor="PopulationFilter"><img src={require('../../assets/images/skyline.png')} className="stat-icon-sm"/> Population</label><span className="question-mark"><sup>?</sup></span><br></br>
                {this.state.checked ? 
                    <div className="radio">
                        <label>
                        Big (400K+)<input type="radio" value="[pop_from]=400000&[pop_to]=10000000" checked={true} onChange={this.handleChange}/>
                        </label>
                        <label>
                        Medium City (50K - 400K)<input type="radio" value="[pop_from]=75000&[pop_to]=400000" onChange={this.handleChange}/>
                        </label>

                    </div>
                    : null}
            </div>
            )
        }
}

export default PopulationFilter;

     













                    //<option value="[pop_from]=400000&[pop_to]=10000000">Big City (400K+)</option>
                    //<option value="[pop_from]=75000&[pop_to]=400000">Medium City (50K - 400K)</option>
                    //<option value="[pop_from]=5000&[pop_to]=50000">Small City (5K - 50K)</option>
                    //<option value="[pop_from]=50&[pop_to]=5000">Small Town (50 - 5K)</option>
*/