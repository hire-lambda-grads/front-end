import React from 'react';

import jake from '../../assets/movie 1.mp4'

class Video extends React.Component {
  playVideo() {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  }
  
  pauseVideo() {
    // Pause as well
    this.refs.vidRef.pause();
  }
    
    // You can pass your function references to your child components as props (here passing down to the Buttons component)
    render(props) {
      return(
        <div>
          <video 
          height='200'
          width='200'
          loop
          ref="vidRef" 
          src={jake} 
          type="video/mp4"
          onMouseOver={this.playVideo.bind(this)} 
          onMouseOut={this.pauseVideo.bind(this)}
          ></video>
          
        </div>
      );
    }
  }
  
  
  
 export default Video