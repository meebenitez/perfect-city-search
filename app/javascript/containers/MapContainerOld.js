import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react' 
// import child component
//import Map from '../components/Map'



class MapContainer extends Component {
  constructor(props){
    super(props);
        this.state = {
            mapZoom: 4
        }
}
  



  shouldComponentUpdate(nextProps) {
    if (nextProps.cities !== this.props.cities){
      return true
    } else {
      return false
    }
  }

//map.setCenter(new google.maps.LatLng(50, -50))


  mapClicked(mapProps, map, clickEvent) {
    map.setCenter(new google.maps.LatLng(50, -50))
  }



  componentDidMount() {
  //  console.log("refresh")
  //  this.setState({
  //    mapZoom: 4
  //})
  debugger;
  }

  render() {
    const style = { 
      // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '52vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '58vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }


    const renderMarkers = 
        this.props.cities.map((city) => 
        <Marker key = {city.id} title = {`${city.name}`} position = {{lat: city.longitude, lng: city.latitude}} name = {'Changing Colors Garage'} />
      )



   
      
      


    return (
      <div ref="map" style = {style} >
       
      </div>
    );
  }
}




// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper((props) => ({
  apiKey: props.googleApiKey,
}))(MapContainer)



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