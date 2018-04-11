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
