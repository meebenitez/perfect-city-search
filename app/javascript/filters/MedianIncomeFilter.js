import React from 'react';

class MedianIncomeFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {checked: false}
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(){
        this.setState({
            checked: !this.state.checked
        },() => {
            if (this.state.checked === false){
                this.props.unclick("MedianIncomeFilter")
            }
        });

    }

    handleInput(e){
        //if (this.state.checked === true) {
           // debugger;
        //}
    }

    //{content}
    //        <input type="checkbox" id= "MedianIncomeFilter" onChange={this.handleChange} checked={this.state.checked} />
    //        <label htmlFor="AgeFilter">💵 Median Income:</label>
    //        <br></br>

    render(){
        const content = <div>{this.state.checked ? <div><input type="text" id= "MedianIncomeFilter" onChange={this.state.checked ? this.handleInput: null}/></div> : null}</div>
    

    return (
        <div className="filter-div">
            <label htmlFor="AgeFilter">💵 Median Income:</label>
            <br></br>
            <select value={this.props.value} defaultValue={this.props.filterHolder} id= "MedianIncomeFilter" onChange={(event) => this.props.onFilterChange(event)}>
                    <option value="">Deactivate</option>
                    <option value="[income]=45000">>= $45K</option>
                    <option value="[income]=55000">>= $55K (US Avg)</option>
                    <option value="[income]=65000">>= $65K</option>
                    <option value="[income]=75000">>= $75K</option>
                    <option value="[income]=85000">>= $85K</option>
                    <option value="[income]=95000">>= $95K</option>
                    <option value="[income]=110000">>= $110K</option>
                    <option value="[income]=120000">>= $120K</option>
                    <option value="[income]=130000">>= $130K</option>
                    <option value="[income]=140000">>= $140K</option>
                    <option value="[income]=150000">>= $150K</option>
            </select>
        </div>
        )
    }
}

export default MedianIncomeFilter;