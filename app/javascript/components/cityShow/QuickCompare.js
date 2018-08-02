import React from 'react';
import {formatPop, formatFigure, formatRegion, withCommas, highlights, resizeThumb} from '../utils/CityFormat'
import {HorizontalBar} from 'react-chartjs-2';






const QuickCompare= (props) => {

    const values = [
        ["Median Home Value" , props.city.homes_median_value],
        ["Median Household Income" , props.city.income_median],
    ]

    const dataBar = {
        labels: [
        "Median Home Value",
        "Median Household Income"
        ],
        datasets: [
          {
            label: `${props.city.name}, ${props.city.short_state}`,
            backgroundColor: 'rgba(251,209,40,1)',
            borderColor: 'rgba(251,209,40,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(251,209,40,1)',
            hoverBorderColor: 'rgba(251,209,40,1)',
            data: [
                props.city.homes_median_value,
                props.city.income_median
            ]
          },
          {
            label: 'United States',
            backgroundColor: 'rgba(219,219,219,0.2)',
            borderColor: 'rgba(219,219,219,0.2)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(219,219,219,0.2)',
            hoverBorderColor: 'rgba(219,219,219,0.2)',
            data: [
                188900,
                59039
            ]
          }
        ]
      };

    const options = {
        plugins: {
            datalabels: {
               display: true,
               color: 'black',
               align: 'end',
               anchor: 'end'
            }
         },
         scales: {
            xAxes: [{
                        gridLines: {
                            display:false
                        }
                    }],
            yAxes: [{
                        gridLines: {
                            display:false
                        }   
                    }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + ' %';
                    }
                }
    
            }
    };


    if (props.city !== null) {
        return (
            <div>
                <center><span style={{fontWeight: "bold"}}>Quick Stats</span></center>
                <HorizontalBar data={dataBar} options={options} width={200} height={50} />                
            </div>
        )
    } else {
        return (
            <div>Still loading</div>
        )
    }
    
}
    


export default QuickCompare;


/*<PieChart
                                    labels
                                    size={300}
                                    data={[
                                        {key: "African-American" , value: props.city.pop_black_perc},
                                        {key: "Caucasian" , value: props.city.pop_white_perc},
                                        {key: "Native-American" , value: props.city.pop_native_perc},
                                        {key: "Asian" , value: props.city.pop_asian_perc},
                                        {key: "Pacific Islander" , value: props.city.pop_pacific_perc},
                                        //["Latin / Hispanic" , props.city.pop_latin_hispanic_perc],
                                        {key: "Other Race" , value: props.city.pop_other_race_perc},
                                        {key: "Mixed Race" , value: props.city.pop_mixed_race_perc}
                                    ]}
                                    styles={{
                                        '.chart_text': {
                                          fontSize: '1em',
                                          fill: '#fff'
                                        }
                                      }}
                                />*/


/*
  <XYPlot
                                    yType="ordinal"
                                    xType="linear"
                                    width={450}
                                    height={300}>
                                    <HorizontalBarSeries
                                    data={[
                                        {x: props.city.pop_black_perc, y: 'African-American'},
                                        {x: props.city.pop_white_perc, y: 'Caucasian'},
                                        {x: props.city.pop_native_perc, y: 'Native-American'},
                                        {x: props.city.pop_asian_perc, y: 'Asian'},
                                        {x: props.city.pop_pacific_perc, y: 'Pacific Islander'},
                                        {x: props.city.pop_other_race_perc, y: 'Other Race'},
                                        {x: props.city.pop_mixed_race_perc, y: 'Mixed Race'}
                                    ]}
                                    onValueMouseOver={(d) => {console.log(d);}} />
                                    <XAxis />
                                    <YAxis />
                                </XYPlot>
                                */