import React from 'react';
import Aux from '../components/Aux'
import {withCommas} from '../components/utils/filterFunctions'
import { Slider, Handles, Tracks, Rail } from 'react-compound-slider'


class HomePriceFilter extends React.Component {
    constructor(props){
        super(props)

        //this.handleChange = this.handleChange.bind(this)
        this.grabParamValues = this.grabParamValues.bind(this)
        this.handleChangeSlider = this.handleChangeSlider.bind(this)
        this.state = {min: 0, max: 1000000}
   
    }

    



    grabParamValues(index){
        return Object.values(this.props.params.filter((filter) => {return Object.keys(filter)[0] === "HomePriceFilter"})[0])[0].split("&")[index].split("=")[1]
    }
  
    componentDidMount(){
        if (this.props.activeFilters.includes("HomePriceFilter")){
            this.setState({
                min: parseInt(this.grabParamValues(0)),
                max: parseInt(this.grabParamValues(1)),
              })
        }
    }

    /*
    OBSOLETE
    handleChange(event){
        if ((this.refs.homeValueMinRef.value.split(",").join("") + this.refs.homeValueMaxRef.value.split(",").join("")) < 1 ){
            this.props.onFilterChange("HomePriceFilter", "")
        } else if (this.refs.homeValueMinRef.value && this.refs.homeValueMaxRef.value){
            this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${this.refs.homeValueMinRef.value.split(",").join("")}&[home_price_to]=${this.refs.homeValueMaxRef.value.split(",").join("")}`, `home-price=${this.refs.homeValueMinRef.value.split(",").join("")}to${this.refs.homeValueMaxRef.value.split(",").join("")}`)
        } else {
            console.log ("empty value")
        }
    }
    */

    handleChangeSlider(values){
        this.props.onFilterChange("HomePriceFilter", `[home_price_from]=${values[0]}&[home_price_to]=${values[1]}`, `home-price=${values[0]}to${values[1]}`)
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
                  marginLeft: -10,
                  marginTop: 17,
                  zIndex: 2,
                  width: 15,
                  height: 15,
                  textAlign: '4588ab',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  backgroundColor: '#4588ab',
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
                  marginTop: 20,
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
            height: 80,
        }
    
        const railStyle = { 
            position: 'absolute',
            width: '100%',
            height: 10,
            marginTop: 20,
            borderRadius: 5,
            backgroundColor: '#8B9CB6',
          }
    

       
             
        return (
            <Aux>
                
                    <span className="underline">Median Home Value</span>
                    <br></br>
                    <span className="average">US Average: $215,600</span>                            
                    <center><div>
                        <Slider
                            rootStyle={sliderStyle}
                            domain={[0, 1000000]}
                            step={5000}
                            mode={2}
                            values={[this.state.min, this.state.max]}
                            onChange={(values) => this.handleChangeSlider(values)}  
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
                        </div></center>                        
            </Aux>
            )
        }
}

export default HomePriceFilter;

