import React from 'react';

const HomePriceFilter = (props) => {
    return (
        <div className="filter-div">
            <label htmlFor="HomePriceFilter"><img src={require('../../assets/images/house_icon.png')} className="stat-icon-sm"/> Median Home Price:</label>
            <br></br>
            <select value={props.value} defaultValue={props.filterHolder} id= "HomePriceFilter" onChange={(event) => props.onFilterChange(event)}>
                    <option value="">Deactivate</option>
                    <option value="[home_price_from]=1000&[home_price_to]=50000">$1,000 to $50,000</option>
                    <option value="[home_price_from]=50000&[home_price_to]=100000">$50,000 to $100,000</option>
                    <option value="[home_price_from]=100000&[home_price_to]=200000">$100,000 to $200,000</option>
                    <option value="[home_price_from]=200000&[home_price_to]=300000">$200,000 to $300,000</option>
                    <option value="[home_price_from]=300000&[home_price_to]=400000">$300,000 to $400,000</option>
                    <option value="[home_price_from]=400000&[home_price_to]=500000">$400,000 to $500,000</option>
                    <option value="[home_price_from]=500000&[home_price_to]=600000">$500,000 to $600,000</option>
                    <option value="[home_price_from]=600000&[home_price_to]=700000">$600,000 to $700,000</option>
                    <option value="[home_price_from]=700000&[home_price_to]=800000">$700,000 to $800,000</option>
                    <option value="[home_price_from]=800000&[home_price_to]=900000">$800,000 to $900,000</option>
                    <option value="[home_price_from]=900000&[home_price_to]=1000000">$900,000 to $1M</option>
                    <option value="[home_price_from]=1000000&[home_price_to]=10000000">$1M+</option>
            </select>
        </div>
    )
}

export default HomePriceFilter;