import React from 'react'


//------------------Median Income to Median Home Value Comparison--------------------/
export function formatIncomeHomeCompare(income, homePrice) {
    var positiveStyle = {
        color: 'green',
        fontWeight: 'bold',
        fontSize: '20px'
    }
    var negativeStyle = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '20px'
    }
    if ((income * 2.5) >= homePrice){
        return <span style={positiveStyle}>+</span>
    } else {
        return <span style={negativeStyle}>-</span>
    }
}
