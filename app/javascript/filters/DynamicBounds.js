import React from 'react';
import Slider, { Range } from 'rc-slider'



class DynamicBounds extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        min: 0,
        max: 100,
      };
    }
    onSliderChange = (value) => {
      log(value);
    }
    onMinChange = (e) => {
      this.setState({
        min: +e.target.value || 0,
      });
    }
    onMaxChange = (e) => {
      this.setState({
        max: +e.target.value || 100,
      });
    }
    render() {
      return (
        <div>
          <label>Min: </label>
          <input type="number" value={this.state.min} onChange={this.onMinChange} />
          <br />
          <label>Max: </label>
          <input type="number" value={this.state.max} onChange={this.onMaxChange} />
          <br /><br />
          <Slider defaultValue={50} min={this.state.min} max={this.state.max}
            onChange={this.onSliderChange}
          />
        </div>
      );
    }
  }
  export default DynamicBounds;