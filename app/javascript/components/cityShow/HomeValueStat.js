import React from 'react';
import {formatPop, formatFigure, formatRegion, withCommas, highlights, resizeThumb} from '../utils/CityFormat'
import {Bar} from 'react-chartjs-2';






const HomeValueStat= (props) => {

    const values = [
        ["African-American" , props.city.pop_black_perc],
        ["Caucasian" , props.city.pop_white_perc],
        ["Native-American" , props.city.pop_native_perc],
        ["Asian" , props.city.pop_asian_perc],
        ["Pacific Islander" , props.city.pop_pacific_perc],
        //["Latin / Hispanic" , props.city.pop_latin_hispanic_perc],
        ["Mixed Race" , props.city.pop_mixed_race_perc]
    ]

    const dataBar = {
        labels: [
        "White",
        "Black", 
        "Native",
        "Asian",
        "Islander",
        "Hispanic",
        //["Latin / Hispanic" , props.city.pop_latin_hispanic_perc],
        "Mixed"
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
                props.city.pop_white_perc,
                props.city.pop_black_perc,
                props.city.pop_native_perc,
                props.city.pop_asian_perc,
                props.city.pop_pacific_perc,
                0,//temp hispanic
                //props.city.pop_latin_hispanic_perc],
                props.city.pop_mixed_race_perc
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
                76.6,
                13.4,
                1.3,
                5.8,
                .2,
                0,//temp hispanic
                //props.city.pop_latin_hispanic_perc],
                2.7
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
                <center><span style={{fontWeight: "bold"}}>Racial Diversity (% of population)</span></center>
                <Bar data={dataBar} options={options} width={300} height={150} />                
            </div>
        )
    } else {
        return (
            <div>Still loading</div>
        )
    }
    
}
    


export default HomeValueStat;


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