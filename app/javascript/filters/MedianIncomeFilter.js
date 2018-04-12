import React from 'react';

class MedianIncomeFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {min: 0, max: 250000}
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleClick(){
        if ( this.props.isActive === undefined ) {
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
            <div className="filter-div">
                <input type="checkbox" id= "MedianIncomeFilter" onChange={this.handleClick} checked={this.props.isActive !== undefined ? true : false} />
                <label htmlFor="MedianIncomeFilter">💵 Household Income</label><span className="question-mark"><sup>?</sup></span><br></br>
                {this.props.isActive !== undefined ? <span className="input-filter">$<input type="text" id= "incomeMin" className="input-filter-minmax" onChange={this.handleChange} defaultValue="0" /> to $<input type="text" id="incomeMax" className="input-filter-minmax" onChange={this.handleChange} defaultValue="2000000" /></span> : null}
            </div>
            )
        }



}

export default MedianIncomeFilter;