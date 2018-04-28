
import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import Map from '../components/Map'
import Marker from '../components/Marker'

class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google}>
          
        <Marker
        name="SOMA"
        position={{ lat: 37.778519, lng: -122.40564 }}
        title="The marker`s title will appear as a tooltip."
      />

      <Marker
        name="Dolores park"
        position={{ lat: 37.759703, lng: -122.428093 }}
      />

      <Marker />
        </Map>
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper((props) => ({
  apiKey: props.googleApiKey,
}))(MapContainer)