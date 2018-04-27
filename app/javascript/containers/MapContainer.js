
import React, { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import Map from '../components/Map'
class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper((props) => ({
  apiKey: props.googleApiKey,
}))(MapContainer)