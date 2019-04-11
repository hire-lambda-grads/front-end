import React from "react";
import ReactMapGL from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidGljb3RoZXBzIiwiYSI6ImNqdTl4ZTRwYjBhdTY0M3FxZzhpY3FmZWcifQ.zt0JGIlN2B3nLi4d7yBaew";

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

  _goToNYC = () => {
    const viewport = {
      ...this.state.viewport,
      longitude: -74.1,
      latitude: 40.7
    };
    this.setState({ viewport });
  };

  render() {
    return (
      <ReactMapGL
		{...this.state.viewport}
		mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}

export default Map;
