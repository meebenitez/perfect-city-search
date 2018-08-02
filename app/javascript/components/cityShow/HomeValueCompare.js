import React from 'react';
import {formatPop, formatFigure, formatRegion, withCommas, highlights, resizeThumb} from '../utils/CityFormat'
import {HorizontalBar} from 'react-chartjs-2';






const HomeValueCompare= (props) => {

    const dataBar = {
        datasets: [
          {
            backgroundColor: ['rgba(219,219,219,0.2)','rgba(251,209,40,1)'],
            borderColor: ['rgba(219,219,219,0.2)','rgba(251,209,40,1)'],
            borderWidth: 1,
            hoverBackgroundColor: ['rgba(219,219,219,0.2)','rgba(251,209,40,1)'],
            hoverBorderColor: ['rgba(219,219,219,0.2)','rgba(251,209,40,1)'],
            data: [
                188900, props.city.homes_median_value
            ],
          }],
        labels: ['US Average', `${props.city.name}, ${props.city.short_state}`]
      };

    const options = {
        legend: {
            display: false,
        },
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
                        stacked: false,
                        gridLines: {
                            display:true
                        },
                        ticks: {
                            beginAtZero:true,
                            min: 0,
                            max: 1000000,
                            callback: function(value) {
                                return "$" + value
                            }
                        },
                         
                    }],
            yAxes: [{
                        stacked: false,
                        gridLines: {
                            display:false
                        }
                    }
                ]
            },
            
    };


    if (props.city !== null) {
        return (
            <div>
                <HorizontalBar data={dataBar} options={options} width={100} height={25} />                
            </div>
        )
    } else {
        return (
            <div>Still loading</div>
        )
    }
    
}
    


export default HomeValueCompare;


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