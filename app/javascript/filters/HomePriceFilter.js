import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class HomePriceFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {homePricePopup:false}

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleOuterClick = this.handleOuterClick.bind(this)
        this.grabParamValues = this.grabParamValues.bind(this)

        this.setHomePricePopupRef = this.setHomePricePopupRef.bind(this);
        this.setHomePriceButtonRef = this.setHomePriceButtonRef.bind(this);
        
    }



    componentDidMount() {
        document.addEventListener('mousedown', this.handleOuterClick);
        
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOuterClick);
    }

    setHomePricePopupRef(node) {
    this.homePricePopupRef = node;
    }
      
    setHomePriceButtonRef(node) {
    this.homePriceButtonRef = node;
    }

       
    setHomeValueMin(node) {
    this.setHomeValueMin = node;
    }

    grabParamValues(index){
        return Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "HomePriceFilter"})[0])[0].split("&")[index].split("=")[1]
    }


    handleOuterClick(event) {
        if (this.homePricePopupRef && !this.homePricePopupRef.contains(event.target) && !this.homePriceButtonRef.contains(event.target)) {
            this.setState({
                homePricePopup: false
            })
            
        }
    }

  

    handleClear() {
  
            this.props.onFilterChange("HomePriceFilter", ""), () => {
                this.setState({
                    homePricePopup: false
                })
            }
         
    }

    handleClick(){
        this.setState({
            homePricePopup: !this.state.homePricePopup
        }, () => {
            if (this.props.activeFilters.includes("HomePriceFilter") && this.state.homePricePopup){
                this.refs.homeValueMinRef.value = withCommas(parseInt(this.grabParamValues(0)))
                this.refs.homeValueMaxRef.value = withCommas(parseInt(this.grabParamValues(1)))
            }
        })

    }


    handleChange(event){
        if (this.refs.homeValueMinRef.value && this.refs.homeValueMaxRef.value){
            this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${this.refs.homeValueMinRef.value}&[home_price_to]=${this.refs.homeValueMaxRef.value}`, `home-price=${this.refs.homeValueMinRef.value}to${this.refs.homeValueMaxRef.value}`)
        } else {
            console.log ("empty value")
        }
    }

    render(){ 

             
        return (
            <Aux>
                <div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("HomePriceFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="Median Household Income based on 2016 Census American Community Survey data" data-balloon="Median Household Income based on 2016 Census American Community Survey data" data-balloon-pos="up" data-balloon-length="large" onClick={this.handleClick} ref={this.setHomePriceButtonRef}>
                        {this.props.isActive ? 
                            <img src={require('../../assets/images/bluehome.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greyhome.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("HomePriceFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">Home Values ${withCommas(parseInt(this.grabParamValues(0)))} to ${withCommas(parseInt(this.grabParamValues(1)))}</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Home Values</span>}<label htmlFor="HomeValues"></label>
                    </div>
                    {this.state.homePricePopup ?
                    <span> 
                        <div className="filter-popup-div home-value-div" ref={this.setHomePricePopupRef}>
                            <span className="bold">Median Home Value:</span>
                            <br></br>                            
                            <span className="input-filter">$
                                <input type="text" id="homeValueMin" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="min" ref = "homeValueMinRef"/>                              
                                &nbsp;to $
                                <input type="text" id="homeValueMax" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="max" ref = "homeValueMaxRef"/>
                            </span>
                            <br></br>
                            <br></br>
                            <span className="average">US Average: $215,600</span>
                        </div>
                    </span> : null }                       
                </div>
                
            </Aux>
            )
        }
}
//<input type="search" id="homeValueMin" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="min..." ref= "homeValueMinRef"/> 
//<input type="search" id="homeValue" name="focus" required className={input-filter-minmax} onChange={this.handleChange} placeholder="min..." ref="test"/>

export default HomePriceFilter;

/*
<div className="filter-popup-parent">
                    <div className={this.props.activeFilters.includes("HomePriceFilter") ? "filter-div filter-on tooltip-top" : "filter-div filter-off" } data-tooltip="Median Household Income based on 2016 Census American Community Survey data" data-balloon="Median Household Income based on 2016 Census American Community Survey data" data-balloon-pos="up" data-balloon-length="large" onClick={this.handleClick} ref={this.setHomePriceButtonRef}>
                        {this.props.isActive ? 
                            <img src={require('../../assets/images/bluehome.png')} className="filter-icon"/> 
                            : <img src={require('../../assets/images/greyhome.png')} className="filter-icon"/>}
                        {this.props.activeFilters.includes("HomePriceFilter") ?
                            <span>&nbsp;&nbsp;<span className="bold">>= ${withCommas(Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "HomePriceFilter"})[0])[0].split("&")[0].split("=").pop())}</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} className="filter-icon-sm"/></span></span>
                            : <span>&nbsp;Home Values</span>}<label htmlFor="HomeValues"></label>
                    </div>
                    {this.state.homePricePopup ?
                    <span> 
                        <div className="filter-popup-div homePrice-div" ref={this.setHomePricePopupRef}>
                            <span className="bold">Median Home Value:</span>
                            <br></br>
                            <span className="average">US Average: $59,039</span>
                            <br></br>
                            <span className="input-filter">$
                                            

                            to $</span>
                        </div>
                    </span> : null }                       
                </div>*/











/*
import React from 'react';
import Aux from '../components/Aux'


class HomePriceFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {min: 0, max: 2000000}
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleClick(){
        if (this.props.isActive === undefined ) {
            this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${this.state.min}&[home_price_to]=${this.state.max}`, `home-price=${this.state.min}to${this.state.max}`)
        } else {
            this.props.onFilterChange("HomePriceFilter", "")
        }

    }

    handleChange(event){
        if (event.target.id === "homeValueMin") {
            this.setState({
                min: event.target.value
            }, () => {
                this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${this.state.min}&[home_price_to]=${this.state.max}`, `home-price=${this.state.min}to${this.state.max}`)
            })
        } else if (event.target.id === "homeValueMax") {
            this.setState({
                max: event.target.value
            }, () => {
                this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${this.state.min}&[home_price_to]=${this.state.max}`, `home-price=${this.state.min}to${this.state.max}`)
            })
        }
    }

    

    render(){    

        return (
            <Aux>
                {this.props.isActive !== undefined ? 
                <div className="filter-div filter-on">
                    <div className="filter-container">
                        <div className="left-filter-col">
                            <label htmlFor="HomePriceFilter"><img src={require('../../assets/images/house_icon.png')} className="stat-icon-sm"/> Median Home Value</label><br></br>
                            <span className="input-filter">$<input type="text" id= "homeValueMin" className="input-filter-minmax" onChange={this.handleChange} defaultValue="0" /> to $<input type="text" id="homeValueMax" className="input-filter-minmax" onChange={this.handleChange} defaultValue="2000000" /></span>
                        </div>
                        <div className="right-filter-col">
                            <div className="center-x">
                                <label onClick={this.handleClick}>x</label>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="filter-div filter-off" onClick={this.handleClick}>
                    <label htmlFor="HomePriceFilter"><img src={require('../../assets/images/house_icon.png')} className="stat-icon-sm"/> Median Home Value</label><br></br>
                </div> }
            </Aux>
            )
        }
}

export default HomePriceFilter;
*/