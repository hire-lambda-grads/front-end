import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Map from '../map/Map';



class MapCont extends Component {
  render() {
    return (
      <div>
        <Map />
      </div>
    )
  }
}

export default withRouter(MapCont);