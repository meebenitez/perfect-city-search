import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CityShowPin from '../components/CityShowPin'
import MediaQuery from 'react-responsive'
import Aux from '../components/Aux'
 

 
class CityShowMapContainer extends Component {
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
      width: '95%', // 90vw basically means take up 90% of the width screen. px also works.
      height: '63vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    //47
    //84

    const styleDesktopSmall = {
      width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
      height: '63vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    const styleMobile = {
      width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
      height: '63vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.

    }

    //import styles from "../../assets/stylesheets/application.scss"

    let num = 1

    const marker = <CityShowPin key = {this.props.city.id} text = {`${ this.props.city.name }`} city = {this.props.city} lat = {this.props.city.longitude + 25 } lng = {this.props.city.latitude - .009} />

   
    return (
      <Aux>
        <MediaQuery minWidth={1200}>
          <div style={styleDesktop}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.googleApiKey }}
              center={{lat: parseFloat(this.props.city.longitude), lng: parseFloat(this.props.city.latitude)}}
              zoom={6}
              disableDefaultUI = {true}
              zoomControl = {true}
              options={this.getMapOptions}
            >
            {marker}
            </GoogleMapReact>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={1200}>
          <div style={styleDesktopSmall}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.googleApiKey }}
              center={{lat: parseFloat(this.props.city.longitude), lng: parseFloat(this.props.city.latitude)}}
              zoom={6}
              disableDefaultUI = {true}
              zoomControl = {true}
              options={this.getMapOptions}
            >
            {marker}
            </GoogleMapReact>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={768}>
          <div style={styleMobile}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.googleApiKey }}
              center={{lat: parseFloat(this.props.city.longitude), lng: parseFloat(this.props.city.latitude)}}
              zoom={6}
              disableDefaultUI = {true}
              zoomControl = {true}
              options={this.getMapOptions}
            >
            {marker}
            </GoogleMapReact>
          </div>
        </MediaQuery>

        
    </Aux>
    );
  }
}
 
export default CityShowMapContainer;








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