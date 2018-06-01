import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const CityPin = ({ text }) => <div className="map-marker">{text}</div>;
 
class MapContainer extends Component {
  constructor(props){
    super(props);
  
}

_reset = () => {
  debugger;
}

  
 
  render() {

    const style = { 
      // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '52vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '58vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    let num = 1

   const renderMarkers = 
        this.props.cities.map((city) => 
        <CityPin key = {city.id} text = {`${ num++ }`} lat = {city.longitude} lng = {city.latitude} />
      )

    return (
      // Important! Always set the container height explicitly
      <div style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.googleApiKey }}
          center={this.props.mapCenter}
          zoom={this.props.mapZoom}
          mapTypeId = {'roadmap'} // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
          disableDefaultUI = {true}
          zoomControl = {true}
        >
          {renderMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;








//map.setCenter(new google.maps.LatLng(50, -50))






   // const renderMarkers = 
   //     this.props.cities.map((city) => 
   //     <Marker key = {city.id} title = {`${city.name}`} position = {{lat: city.longitude, lng: city.latitude}} name = {'Changing Colors Garage'} />
   //   )



   
      
      





//<Map item xs = {12}  style = {style} google={this.props.google}
//center= {{lat: 38.00, lng: -96.5556}}
//zoom = { this.state.mapZoom } // sets zoom. Lower numbers are zoomed further out.
//ref = "map"
//minZoom= {3}
//mapTypeId = {'roadmap'} // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
//disableDefaultUI = {true}
//zoomControl = {true}
//onClick={this.mapClicked}
//>


//{renderMarkers}
  
  
//</Map>