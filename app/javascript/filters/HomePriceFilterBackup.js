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
        this.setHomePriceXRef = this.setHomePriceXRef.bind(this);

        
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

    setHomePriceXRef(node) {
        this.homePriceXRef = node;
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
        this.props.onFilterChange("HomePriceFilter", "")
    }

    handleClick(event){
        if (this.props.activeFilters.includes("HomePriceFilter") && this.homePriceXRef.contains(event.target)){
            this.setState({
                homePricePopup: false
            })
        } else {
            this.setState({
                homePricePopup: !this.state.homePricePopup
            }, () => {
                if (this.props.activeFilters.includes("HomePriceFilter") && this.state.homePricePopup){
                    this.refs.homeValueMinRef.value = withCommas(parseInt(this.grabParamValues(0)))
                    this.refs.homeValueMaxRef.value = withCommas(parseInt(this.grabParamValues(1)))
                }
            })
        }
        

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
                            <span>&nbsp;&nbsp;<span className="bold">Home Values ${withCommas(parseInt(this.grabParamValues(0)))} to ${withCommas(parseInt(this.grabParamValues(1)))}</span><span onClick={this.handleClear}>&nbsp;&nbsp;&nbsp;<img src={require('../../assets/images/xout2.png')} ref={this.setHomePriceXRef}className="filter-icon-sm"/></span></span>
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

export default HomePriceFilter;

