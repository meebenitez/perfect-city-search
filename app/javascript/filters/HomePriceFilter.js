import React from 'react';

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
            <div className="filter-div">
                <input type="checkbox" id= "HomePriceFilter" onChange={this.handleClick} checked={this.props.isActive !== undefined ? true : false} />
                <label htmlFor="HomePriceFilter"><img src={require('../../assets/images/house_icon.png')} className="stat-icon-sm"/> Median Home Value</label><span className="question-mark"><sup>?</sup></span><br></br>
                {this.props.isActive !== undefined ? 
                <span className="input-filter">$<input type="text" id= "homeValueMin" className="input-filter-minmax" onChange={this.handleChange} defaultValue="0" /> to $<input type="text" id="homeValueMax" className="input-filter-minmax" onChange={this.handleChange} defaultValue="2000000" /></span> : null}
            </div>
            )
        }
}

export default HomePriceFilter;

     