import React from 'react';
import Aux from '../components/Aux'

class MedianIncomeFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {min: 0, max: 200000}
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
                            <label htmlFor="MedianIncomeFilter">💵 Median Household Income</label><br></br>
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
                    <label htmlFor="MedianIncomeFilter">💵 Median Household Income</label><br></br>
                </div> }
            </Aux>
            )
        }



}

export default MedianIncomeFilter;