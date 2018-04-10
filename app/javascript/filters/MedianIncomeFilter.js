import React from 'react';

class MedianIncomeFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.isActive !== undefined ? {checked: true} : {checked: false}
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(){
        this.setState({
            checked: !this.state.checked
        },() => {
            this.props.toggleCheck("MedianIncomeFilter", "[income]=85000")
            //if (this.state.checked === false){
            //    this.props.unclick("MedianIncomeFilter")
            //}
        });

    }

    handleInput(e){
        if (this.state.checked === true) {
            debugger;
        }
    }

    

    render(){
        const content = <div>{this.state.checked ? <div><input type="text" id= "MedianIncomeFilter" onChange={this.state.checked ? this.handleInput: null}/></div> : null}</div>
    

    return (
        <div className="filter-div">
            <input type="checkbox" id= "MedianIncomeFilter" onChange={this.handleChange} checked={this.state.checked} />
            <label htmlFor="AgeFilter">💵 Median Income:</label>
            {this.state.checked ? <div><input type="text" id= "MedianIncomeFilter" onChange={this.state.checked ? this.handleInput: null}/></div> : null}
            <br></br>
        </div>
        )
    }
}

export default MedianIncomeFilter;