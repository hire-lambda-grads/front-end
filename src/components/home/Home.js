import React from 'react';
import ReactMap from '../reactMap/ReactMap';

const Home = () => {
    return(
        <div>
            <h1>Home/Landing Page</h1>
            <h2 className="bg-video">Super Cool 4K Video background Here</h2>
            <ReactMap />
            <h2 className="bg-video">Another Super Cool 4K Video background Here</h2>
            <h3 className="footer">Footer Goes Here</h3>
        </div>
    );
}

export default Home;