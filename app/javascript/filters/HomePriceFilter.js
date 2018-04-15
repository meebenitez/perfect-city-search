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
                            <span className="input-filter">$<input type="text" id= "homeValueMin" className="input-filter-minmax" onChange={this.handleChange} defaultValue="0" /> to $<input type="text" id="homeValueMax" className="input-filter-minmax" onChange={this.handleChange} defaultValue="2000000" /></span>                        </div>
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
