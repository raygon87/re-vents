import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const EventDetailedMap = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 14;

  const Marker = () => <Icon name='marker' size='big' color='red'/>

  return (
    <div>
      <Segment attached="bottom" style={{padding: 0}}>
        <div style={{ height: "300px", width: "100%" }}>
          <GoogleMapReact 
            bootstrapURLKeys={{ key: "AIzaSyDCjlkA3UsUWM0rRkqbZ2z2BDswXrchN7M" }} // maps javascript api
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <Marker lat={lat} lng={lng}/>
          </GoogleMapReact>
        </div>
      </Segment>
    </div>
  );
};

export default EventDetailedMap;
