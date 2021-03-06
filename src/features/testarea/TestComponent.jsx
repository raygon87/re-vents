import React, { Component } from "react";
import { connect } from "react-redux";
// import GoogleMapReact from "google-map-react";
import { Button } from "semantic-ui-react";
// import Script from "react-load-script";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { incrementCounter, decrementCounter, incrementAsync, decrementAsync } from "./testActions";
import { openModal } from '../modals/modalActions';

const mapState = state => ({
  data: state.test.data,
  loading: state.test.loading
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal,
  incrementAsync,
  decrementAsync
};

// const Marker = () => <Icon name="marker" size="big" color="red" />;

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: "",
    scriptLoaded: false
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    const { incrementAsync, decrementAsync, loading, data, openModal } = this.props;
    return (
      <div>
        {/* <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyDCjlkA3UsUWM0rRkqbZ2z2BDswXrchN7M&libraries=places'
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementAsync} color="green" content="Increment" loading={loading}/>
        <Button onClick={decrementAsync} color="red" content="Decrement" loading={loading}/>
        <Button onClick={() => openModal('TestModal', {})} color="teal" content="Open Modal" />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>

        {/* <div style={{ height: "300px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDCjlkA3UsUWM0rRkqbZ2z2BDswXrchN7M"
            }} // maps javascript api
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={59.955413} lng={30.337844} text="My Marker" />
          </GoogleMapReact>
        </div> */}
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
