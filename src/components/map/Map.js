import React from "react";
import {render} from 'react-dom';
import ReactMapGL, {FullscreenControl} from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidGljb3RoZXBzIiwiYSI6ImNqdTl4ZTRwYjBhdTY0M3FxZzhpY3FmZWcifQ.zt0JGIlN2B3nLi4d7yBaew";

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

class Map extends React.Component {
  state = {
    viewport: {
      width: 1000,
      height: 650,
      latitude: 39.788260590328576,
      longitude: -97.77255674948162,
      zoom: 3.5
    }
  };

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  render() {

	const {viewport} = this.state;

    return (
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
      </ReactMapGL>
    );
  }
}

export default Map;
