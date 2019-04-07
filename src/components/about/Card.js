import React from 'react';

import jake from '../../assets/movie 1.mp4'

class Card extends React.Component {
  playVideo() {
    this.refs.vidRef.play();
  }
  
  pauseVideo() {
    this.refs.vidRef.pause();
  }
    
    render(props) {
      return(
        <div className = 'about-card'>
            <h2>{this.props.name}</h2>
          <video 
          height='200'
          width='200'
          loop
          ref="vidRef" 
          src={this.props.video} 
          type="video/mp4"
          onMouseOver={this.playVideo.bind(this)} 
          onMouseOut={this.pauseVideo.bind(this)}
          ></video>
          <p>{this.props.about}</p>
        </div>
      );
    }
  }
  
  
  
 export default Card