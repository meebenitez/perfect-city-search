import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'
import { Slider, Handles, Tracks, Rail } from 'react-compound-slider'


class HomePriceFilter extends React.Component {
    constructor(props){
        super(props)

        this.grabParamValues = this.grabParamValues.bind(this)
        this.handleChangeSlider = this.handleChangeSlider.bind(this)
        this.sliderTick = this.sliderTick.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.state = {min: 0, max: 1000000}
   
    }

    



    grabParamValues(index){
        return Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "HomePriceFilter"})[0])[0].split("&")[index].split("=")[1]
    }
  
    componentDidMount(){
        if (this.props.activeFilters.includes("HomePriceFilter")){
            this.setState({ ...this.state,
                min: parseInt(this.grabParamValues(0)),
                max: parseInt(this.grabParamValues(1)),
              })
        }
    }

    clearAll(){
        this.setState({ ...this.state,
            min: 0,
            max: 1000000,
          }, () => {
            this.handleChangeSlider([this.state.min,this.state.max]);
          })
    }

    handleChangeSlider(values){
        if (values[0] === 0 && values[1] === 1000000){
            this.props.onFilterChange("HomePriceFilter", "")
        } else {
            this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${values[0]}&[home_price_to]=${values[1]}`, `home-price=${values[0]}to${values[1]}`)
        }
    }

    sliderTick(values){
        this.setState({ ...this.state,
            min: values[0],
            max: values[1],
        })
    }

    render(){ 

        function Handle({ 
            handle: { id, value, percent }, 
            getHandleProps,
          }) {
            return (
              <div
                style={{
                  left: `${percent}%`,
                  position: 'absolute',
                  marginLeft: -10,
                  marginTop: 8,
                  zIndex: 2,
                  width: 15,
                  height: 15,
                  textAlign: '4588ab',
                  color: 'transparent',
                  cursor: 'pointer',
                  backgroundColor: '#4588ab',
                }}
                {...getHandleProps(id)} 
              >
                <div style={{ fontSize: '.5em', marginTop: -20 }}>{value}</div>
              </div>
            )
          }
    
    
          function Track({ source, target, getTrackProps }) { 
            return (
              <div
                style={{
                  position: 'absolute',
                  height: 10,
                  zIndex: 1,
                  marginTop: 10,
                  backgroundColor: '#62b1da',
                  borderRadius: 5,
                  cursor: 'pointer',
                  left: `${source.percent}%`,
                  width: `${target.percent - source.percent}%`,
                }}
                {...getTrackProps()} // this will set up events if you want it to be clickeable (optional)
              />
            )
          }

    
        const sliderStyle = {  // Give the slider some width
            position: 'relative',
            width: '85%',
            height: 15,
        }
    
        const railStyle = { 
            position: 'absolute',
            width: '100%',
            height: 10,
            marginTop: 10,
            borderRadius: 5,
            backgroundColor: '#8B9CB6',
          }
    

       
             
        return (
            <Aux>
                
                    <div className="rangeHeader">
                        <div className="range-filter-title">Median Home Value</div>
                        <div className="range-clear-button" onClick={() => this.clearAll()} >Reset</div>
                    </div>
                    <div className="values">${withCommas(this.state.min)} - ${withCommas(this.state.max)}</div>                            
                    <div className="slider-container">
                        <Slider
                            rootStyle={sliderStyle}
                            domain={[0, 1000000]}
                            step={5000}
                            mode={2}
                            values={[this.state.min, this.state.max]}
                            onChange={(values) => this.handleChangeSlider(values)}
                            onUpdate={(values) => this.sliderTick(values)}  
                        >
                            <Rail>
                            {({ getRailProps }) => (
                                <div style={railStyle} {...getRailProps()} />
                            )}
                            </Rail>
                            <Handles>
                            {({ handles, getHandleProps }) => (
                                <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                    />
                                ))}
                                </div>
                            )}
                            </Handles>
                            <Tracks left={false} right={false}>
                            {({ tracks, getTrackProps }) => (
                                <div className="slider-tracks">
                                {tracks.map(({ id, source, target }) => (
                                    <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                    />
                                ))}
                                </div>
                            )}
                            </Tracks>
                        </Slider>
                        </div>                        
            </Aux>
            )
        }
}

export default HomePriceFilter;

