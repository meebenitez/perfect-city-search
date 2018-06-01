
import React, { Component } from 'react';


export class Map extends React.Component {

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;
      
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
      
            let zoom = 4;

            let lat = 37.759703;
            let lng = -96.5556;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
              center: center,
              zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
          }
        // ...
      }


    componentDidUpdate(prevProps, prevState) {
      if (prevProps.google !== this.props.google) {
        this.loadMap();
      }
    }

    componentDidMount() {
        this.loadMap();
      }
    
  
    loadMap() {
      // ...
    }
  
    render() {
      // ...
    }
  }