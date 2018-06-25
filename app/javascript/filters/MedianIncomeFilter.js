import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'


class MedianIncomeFilter extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.grabParamValues = this.grabParamValues.bind(this)

       

        
    }



    grabParamValues(index){
        return Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "MedianIncomeFilter"})[0])[0].split("&")[index].split("=")[1]
    }
  
    componentDidMount(){
        if (this.props.activeFilters.includes("MedianIncomeFilter")){
        this.refs.incomeMinRef.value = parseInt(this.grabParamValues(0))
        this.refs.incomeMaxRef.value = parseInt(this.grabParamValues(1))
        }
    }

    handleChange(event){
        if ((this.refs.incomeMinRef.value.split(",").join("") + this.refs.incomeMaxRef.value.split(",").join("")) < 1 ){
            this.props.onFilterChange("MedianIncomeFilter", "")
        } else if (this.refs.incomeMinRef.value && this.refs.incomeMaxRef.value){
            this.props.onFilterChange("MedianIncomeFilter", `[income_from]=${this.refs.incomeMinRef.value.split(",").join("")}&[income_to]=${this.refs.incomeMaxRef.value.split(",").join("")}`, `home-price=${this.refs.incomeMinRef.value.split(",").join("")}to${this.refs.incomeMaxRef.value.split(",").join("")}`)
        } else {
            console.log ("empty value")
        }
    }

    render(){ 

       
             
        return (
            <Aux>
                
                    <div className="underline">Median Household Income</div>                       
                    <div className="input-filter">$
                        <input type="number" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="min" ref = "incomeMinRef"/>                              
                        &nbsp;to $
                        <input type="number" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="max" ref = "incomeMaxRef"/>
                    </div>
                    <br></br>
                    <span className="average">US Average: $59,039</span>

                    <br></br>
                    <br></br>
                    <br></br>
                
            </Aux>
            )
        }
}

export default MedianIncomeFilter;