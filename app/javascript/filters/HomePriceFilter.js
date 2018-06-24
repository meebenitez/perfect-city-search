import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'

class HomePriceFilter extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.grabParamValues = this.grabParamValues.bind(this)

       

        
    }



    grabParamValues(index){
        return Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "HomePriceFilter"})[0])[0].split("&")[index].split("=")[1]
    }
  
    componentDidMount(){
        if (this.props.activeFilters.includes("HomePriceFilter")){
        this.refs.homeValueMinRef.value = parseInt(this.grabParamValues(0))
        this.refs.homeValueMaxRef.value = parseInt(this.grabParamValues(1))
        }
    }

    handleChange(event){
        if ((this.refs.homeValueMinRef.value.split(",").join("") + this.refs.homeValueMaxRef.value.split(",").join("")) < 1 ){
            this.props.onFilterChange("HomePriceFilter", "")
        } else if (this.refs.homeValueMinRef.value && this.refs.homeValueMaxRef.value){
            this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${this.refs.homeValueMinRef.value.split(",").join("")}&[home_price_to]=${this.refs.homeValueMaxRef.value.split(",").join("")}`, `home-price=${this.refs.homeValueMinRef.value.split(",").join("")}to${this.refs.homeValueMaxRef.value.split(",").join("")}`)
        } else {
            console.log ("empty value")
        }
    }

    render(){ 

       
             
        return (
            <Aux>
                
                    <span className="underline">Median Home Value</span>
                    <br></br>                            
                    <span className="input-filter">$
                        <input type="number" id="homeValueMin" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="min" ref = "homeValueMinRef"/>                              
                        &nbsp;to $
                        <input type="number" id="homeValueMax" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="max" ref = "homeValueMaxRef"/>
                    </span>
                    <br></br>
                    <span className="average">US Average: $215,600</span>
                    <br></br>
                    <br></br>   
                    <br></br>                         

                
            </Aux>
            )
        }
}

export default HomePriceFilter;

