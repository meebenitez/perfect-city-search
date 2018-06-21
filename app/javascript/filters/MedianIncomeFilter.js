import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class MedianIncomeFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {incomePopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)

        this.setIncomePopupRef = this.setIncomePopupRef.bind(this);
        this.setIncomeButtonRef = this.setIncomeButtonRef.bind(this);
    }

    

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOuterClick);
      }

      setIncomePopupRef(node) {
        this.incomePopupRef = node;
      }
      
      setIncomeButtonRef(node) {
        this.incomeButtonRef = node;
      }

      handleOuterClick(event) {
        if (this.incomePopupRef && !this.incomePopupRef.contains(event.target) && !this.incomeButtonRef.contains(event.target)) {
            this.setState({
                incomePopup: false
            })
        }
      }

  

    handleClear() {
  
            this.props.onFilterChange("MedianIncomeFilter", ""), () => {
                this.setState({
                    incomePopup: false
                })
            }
         
    }

    handleClick(){
        this.setState({
            incomePopup: !this.state.incomePopup
        })

    }


    handleChange(event){
        this.props.onFilterChange("MedianIncomeFilter", `[income_from]=${event.target.value}`, `median-income-greater-than=${event.target.value}`)
    }

    render(){ 
             
        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("MedianIncomeFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="Median Household Income based on 2016 Census American Community Survey data" data-balloon="Median Household Income based on 2016 Census American Community Survey data" data-balloon-pos="up" data-balloon-length="large" onClick={this.handleClick} ref={this.setIncomeButtonRef}>
                        {this.props.isActive ? 
                            <img src={require('../../assets/images/bluepaycheck.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greypaycheck.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("MedianIncomeFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">>= ${withCommas(Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "MedianIncomeFilter"})[0])[0].split("&")[0].split("=").pop())}</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Median Household Income</span>}<label htmlFor="MedianHouseholdIncome"></label>
                    </div>
                    {this.state.incomePopup ?
                    <span> 
                        <div className="filter-popup-div income-div" ref={this.setIncomePopupRef}>
                            <span className="bold">Median Household Income:</span>
                            <br></br>
                            <span className="average">US Average: $59,039</span>
                            <br></br>
                            <select defaultValue={this.props.activeFilters.includes("MedianIncomeFilter") ? Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "MedianIncomeFilter"})[0])[0].split("&")[0].split("=").pop() : "" } id="incomeMin" onChange={this.handleChange}>
                                <option value="">>= $0</option>
                                <option value="10000">>= $10,000</option>
                                <option value="20000">>= $20,000</option>
                                <option value="30000">>= $30,000</option>
                                <option value="40000">>= $40,000</option>
                                <option value="50000">>= $50,000</option>
                                <option value="60000">>= $60,000</option>
                                <option value="70000">>= $70,000</option>
                                <option value="80000">>= $80,000</option>
                                <option value="90000">>= $90,000</option>
                                <option value="100000">>= $100,000</option>
                                <option value="110000">>= $110,000</option>
                                <option value="120000">>= $120,000</option>
                                <option value="130000">>= $130,000</option>
                                <option value="140000">>= $140,000</option>
                                <option value="150000">>= $150,000</option>
                                <option value="160000">>= $160,000</option>
                                <option value="170000">>= $170,000</option>
                                <option value="180000">>= $180,000</option>
                                <option value="190000">>= $190,000</option>
                                <option value="200000">>= $200,000</option>
                                <option value="210000">>= $210,000</option>
                                <option value="220000">>= $220,000</option>
                                <option value="230000">>= $230,000</option>
                                <option value="240000">>= $240,000</option>
                                <option value="250000">>= $250,000</option>
                                <option value="260000">>= $260,000</option>
                                <option value="270000">>= $270,000</option>
                                <option value="280000">>= $280,000</option>
                                <option value="290000">>= $290,000</option>
                                <option value="300000">>= $300,000</option>        
                            </select>
                        </div>
                    </span> : null }                       
                </div>
            </Aux>
            )
        }
}

export default MedianIncomeFilter;














/*
import React from 'react';
import Aux from '../components/Aux'

class MedianIncomeFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {min: 0, max: 200000, open: false}
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleClick(){
        if ( this.props.isActive === false ) {
            this.props.onFilterChange("MedianIncomeFilter", `[income_from]=${this.state.min}&[income_to]=${this.state.max}`, `median-income=${this.state.min}to${this.state.max}`)
        } else {
            this.props.onFilterChange("MedianIncomeFilter", "")
        }

    }



    handleChange(event){
        if (event.target.id === "incomeMin") {
            this.setState({
                min: event.target.value
            }, () => {
                this.props.onFilterChange("MedianIncomeFilter", `[income_from]=${this.state.min}&[income_to]=${this.state.max}`, `median-income=${this.state.min}to${this.state.max}`)
            })
        } else if (event.target.id === "incomeMax") {
            this.setState({
                max: event.target.value
            }, () => {
                this.props.onFilterChange("MedianIncomeFilter", `[income_from]=${this.state.min}&[income_to]=${this.state.max}`, `median-income=${this.state.min}to${this.state.max}`)
            })
        }
    }
    

    render(){    


        return (
            <Aux>
                {this.props.isActive === true ? 
                <div className="filter-div filter-on tooltip-top" data-tooltip="test test yoyo">
                    <div className="filter-container">
                        <div className="left-filter-col">
                        <img src={require('../../assets/images/bluehouse.png')} className="filter-icon"/>&nbsp;Median Household Income<label htmlFor="MedianIncomeFilter"></label><br></br>
                            <span className="input-filter">$
                                <input type="text" id= "incomeMin" className="input-filter-minmax" 
                                onChange={this.handleChange} 
                                defaultValue={Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "MedianIncomeFilter"})[0])[0].split("&")[0].split("=").pop()} /> to $
                                <input type="text" id="incomeMax" className="input-filter-minmax" 
                                onChange={this.handleChange} 
                                defaultValue={Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "MedianIncomeFilter"})[0])[0].split("&")[1].split("=").pop()}/></span>
                        </div>
                        <div className="right-filter-col">
                            <div className="center-x">
                                <label onClick={this.handleClick}>x</label>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="filter-div filter-off" data-balloon="test test yoyo" data-balloon-pos="up" data-balloon-length="medium" onClick={this.handleClick}>
                    <img src={require('../../assets/images/greyhouse.png')} className="filter-icon"/>&nbsp;Median Household Income<label htmlFor="MedianIncomeFilter"></label><br></br>
                </div> }
            </Aux>
            )
        }



}

export default MedianIncomeFilter;
*/