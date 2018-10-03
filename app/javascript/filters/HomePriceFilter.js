import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'
import { Slider, Handles, Tracks, Rail } from 'react-compound-slider'


class HomePriceFilter extends React.Component {
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.grabParamValues = this.grabParamValues.bind(this)

        this.state = {min: 5000, max: 100000}
   
    }

    



    grabParamValues(index){
        return Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "HomePriceFilter"})[0])[0].split("&")[index].split("=")[1]
    }
  
    componentDidMount(){
        if (this.props.activeFilters.includes("HomePriceFilter")){
        this.refs.homeValueMinRef.value = parseInt(this.grabParamValues(0))
        this.refs.homeValueMaxRef.value = parseInt(this.grabParamValues(1))
        }
    }

    handleChange(event){
        if ((this.refs.homeValueMinRef.value.split(",").join("") + this.refs.homeValueMaxRef.value.split(",").join("")) < 1 ){
            this.props.onFilterChange("HomePriceFilter", "")
        } else if (this.refs.homeValueMinRef.value && this.refs.homeValueMaxRef.value){
            this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${this.refs.homeValueMinRef.value.split(",").join("")}&[home_price_to]=${this.refs.homeValueMaxRef.value.split(",").join("")}`, `home-price=${this.refs.homeValueMinRef.value.split(",").join("")}to${this.refs.homeValueMaxRef.value.split(",").join("")}`)
        } else {
            console.log ("empty value")
        }
    }

    render(){ 


        function Handle({ // your handle component
            handle: { id, value, percent }, // you get an id, the value and the percentage to place it.
            getHandleProps,
          }) {
            return (
              <div
                style={{
                  left: `${percent}%`,
                  position: 'absolute',
                  marginLeft: -15,
                  marginTop: 25,
                  zIndex: 2,
                  width: 30,
                  height: 30,
                  textAlign: 'center',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  backgroundColor: '#2C4870',
                }}
                {...getHandleProps(id)} // pass in the id
              >
                <div style={{ fontSize: 11, marginTop: -20 }}>{value}</div>
              </div>
            )
          }
    
    
          function Track({ source, target, getTrackProps }) { // your own track component
            return (
              <div
                style={{
                  position: 'absolute',
                  height: 10,
                  zIndex: 1,
                  marginTop: 35,
                  backgroundColor: 'red',
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
            width: '100%',
            height: 80,
            border: '1px solid steelblue',
        }
    
        const railStyle = { 
            position: 'absolute',
            width: '100%',
            height: 10,
            marginTop: 35,
            borderRadius: 5,
            backgroundColor: '#8B9CB6',
          }
    

       
             
        return (
            <Aux>
                
                    <span className="underline">Median Home Value</span>
                    <br></br>                            
                    <Slider
                    rootStyle={sliderStyle}
                    domain={[0, 1000000]}
                    step={5000}
                    mode={2}
                    values={[this.state.min, this.state.max]}  
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

                <br></br>
                    <span className="input-filter">$
                        <input type="number" id="homeValueMin" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="min" ref = "homeValueMinRef"/>                              
                        &nbsp;to $
                        <input type="number" id="homeValueMax" name="focus" required className="input-filter-minmax" onChange={this.handleChange} placeholder="max" ref = "homeValueMaxRef"/>
                    </span>
                    <br></br>
                    <span className="average">US Average: $215,600</span>
                    <br></br>
                    <br></br>   
                    <br></br>                         

                
            </Aux>
            )
        }
}

export default HomePriceFilter;

