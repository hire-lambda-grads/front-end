import React from 'react';
import ReactMap from '../reactMap/ReactMap';
import Travaho from '../../assets/Travaho.mp4';
import Whiteboard from '../../assets/Whiteboard.mp4';

const Home = () => {
    return(
        <div>
            <video className="bg-video" autoPlay loop muted>
                <source src={Travaho} type='video/mp4' />
            </video>
            <ReactMap />
            <video className="bg-video" autoPlay loop muted>
                <source src={Whiteboard} type='video/mp4' />
            </video>
            <h3 className="footer">Footer Goes Here</h3>
        </div>
    );
}

export default Home;