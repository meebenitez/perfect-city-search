import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CityPin from '../components/CityPin'
import MediaQuery from 'react-responsive'
import Aux from '../components/Aux'
 

 
class MapContainer extends Component {
  constructor(props){
    super(props);
  
}

_reset = () => {
  debugger;
}


getMapOptions = (maps: Maps) => {

    return {
        streetViewControl: false,
        scaleControl: true,
        fullscreenControl: false,
        styles: [{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }],
        gestureHandling: "greedy",
        disableDoubleClickZoom: true,
        minZoom: 2,
        maxZoom: 18,

        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: maps.ControlPosition.BOTTOM_CENTER,
            mapTypeIds: [
                maps.MapTypeId.ROADMAP,
                maps.MapTypeId.SATELLITE,
                maps.MapTypeId.HYBRID
            ]
        },

        zoomControl: true,
        clickableIcons: false
    };
}
  
 
  render() {

    const styleDesktop = { 
      // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '47vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '79vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    const styleDesktopSmall = {
      width: '45vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '79vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    const styleMobile = {
      width: '94vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '40vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.

    }

    //import styles from "../../assets/stylesheets/application.scss"

    let num = 1

   const renderMarkers = 
        this.props.cities.map((city) => 
        <CityPin key = {city.id} text = {`${ city.name }`} city = {city} lat = {city.longitude + 25 } lng = {city.latitude - .009} highlightedCity = {this.props.highlightedCity} />
      )

    return (
      <Aux>
        <MediaQuery minWidth={1400}>
          <div style={styleDesktop}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.googleApiKey }}
              center={this.props.mapCenter}
              zoom={this.props.mapZoom}
              disableDefaultUI = {true}
              zoomControl = {true}
              options={this.getMapOptions}
            >
              {renderMarkers}
            </GoogleMapReact>
          </div>
        </MediaQuery>
      
    
        <MediaQuery maxWidth={1400}>
        <div style={styleDesktopSmall}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: this.props.googleApiKey }}
            center={this.props.mapCenter}
            zoom={this.props.mapZoom}
            disableDefaultUI = {true}
            zoomControl = {true}
            options={this.getMapOptions}
          >
            {renderMarkers}
          </GoogleMapReact>
        </div>
      </MediaQuery>
    </Aux>
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