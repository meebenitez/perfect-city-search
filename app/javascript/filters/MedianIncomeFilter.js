import React from 'react';

class MedianIncomeFilter extends React.Component {
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
                this.props.onFilterChange("MedianIncomeFilter", "[income]=0", `min-household-income>=0`)
            } else {
                this.props.onFilterChange("MedianIncomeFilter", "")
            }
        });

    }

    handleChange(event){
        this.props.onFilterChange(event.target.id, `[income]=${event.target.value}`, `min-household-income>=${event.target.value}`)
    }

    

    render(){    

        return (
            <div className="filter-div">
                <input type="checkbox" id= "MedianIncomeFilter" onChange={this.handleClick} checked={this.state.checked} />
                <label htmlFor="AgeFilter">💵 Median Income:</label>
                {this.state.checked ? <span className="input-filter">>= <input type="text" id= "MedianIncomeFilter" onChange={this.handleChange} /></span> : null}
                <br></br>
            </div>
            )
        }
}

export default MedianIncomeFilter;