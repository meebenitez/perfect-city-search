import React from 'react';
import {formatPop, formatFigure, formatRegion, withCommas, highlights, resizeThumb} from '../utils/CityFormat'
import {Bar} from 'react-chartjs-2';






const RacialDiversityStat= (props) => {

    const races = [
        ["African-American" , props.city.pop_black_perc],
        ["Caucasian" , props.city.pop_white_perc],
        ["Native-American" , props.city.pop_native_perc],
        ["Asian" , props.city.pop_asian_perc],
        ["Pacific Islander" , props.city.pop_pacific_perc],
        ["Latin / Hispanic" , props.city.pop_latin_hispanic_perc],
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
            label: "",
            backgroundColor: ['rgba(230,46,37,.75)','rgba(251,209,40,.75)','rgba(111,91,157,.75)','rgba(44,127,250,.75)','rgba(183,183,183,.75)','rgba(106,204,157,.75)', 'rgba(181,73,70,.75)'],
            borderColor: ['rgba(230,46,37,.75)','rgba(251,209,40,.75)','rgba(111,91,157,.75)','rgba(44,127,250,.75)','rgba(183,183,183,.75)','rgba(106,204,157,.75)', 'rgba(181,73,70,.75)'],
            borderWidth: 1,
            data: [
                props.city.pop_white_perc,
                props.city.pop_black_perc,
                props.city.pop_native_perc,
                props.city.pop_asian_perc,
                props.city.pop_pacific_perc,
                props.city.pop_latin_hispanic_perc,
                props.city.pop_mixed_race_perc]
          }],
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
               anchor: 'center',
               callback: function(value) {
                return value + "%"
                }
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
    


export default RacialDiversityStat;


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