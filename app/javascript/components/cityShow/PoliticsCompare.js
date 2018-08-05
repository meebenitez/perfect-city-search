import React from 'react';
import {formatPop, formatFigure, formatRegion, withCommas, highlights, resizeThumb} from '../utils/CityFormat'
import {Doughnut} from 'react-chartjs-2';






const PoliticsCompare= (props) => {


    const data = {
        labels: ['Trump', 'Clinton', 'Independent'],
        datasets: [
            {
                data: [props.city.gop_vote_perc.toFixed(2), props.city.dem_vote_perc.toFixed(2), props.city.ind_vote_perc.toFixed(2)],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const options = {
        animation: {
            animateScale: true
        },
        plugins: {
            datalabels: {
               display: true,
               color: 'black',
               align: 'center',
               anchor: 'center'
            }
         },
    };

    if (props.city !== null) {
        return (
            <div className="politics-chart-container">
                <center>
                    <span style={{fontWeight: "bold", fontSize: "18px"}}>{props.city.county}</span>
                    <br></br>
                    <span style={{fontWeight: "bold", fontSize: "18px"}}>2016 Presidential Election Results</span>
                </center>
                <Doughnut data={data} options={options} />                
            </div>
        )
    } else {
        return (
            <div>Still loading</div>
        )
    }
    
}
    


export default PoliticsCompare;


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