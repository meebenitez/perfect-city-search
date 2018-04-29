
import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react' 
// import child component
//import Map from '../components/Map'

class MapContainer extends Component {
  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '52vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '50vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return (
      <div>
        <Map item xs = {12}  style = {style} google={this.props.google}
        initialCenter= {{lat: 38.00, lng: -96.5556}}
        zoom = { 4 } // sets zoom. Lower numbers are zoomed further out.
        //mapTypeId: 'roadmap', // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
        //disableDefaultUI: true,
        //zoomControl: true,>
        >
          {this.props.cities.map((city) => 
            <Marker key = {city.id} title = {`${city.name}`} position = {{lat:39.648209 + Math.floor(Math.random() * Math.floor(4)), lng: -75.711185}} name = {'Changing Colors Garage'} />
          )}
          
        </Map>
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper((props) => ({
  apiKey: props.googleApiKey,
}))(MapContainer)