import React from 'react';
import homepageImage from './truck-shipment.jpg';


function Home() {
  return (
    <div className="homepage-container">
       <img
        src={homepageImage}
        alt="Homepage"
        className="home-page-background-img"
      />
    </div>
  );
}

export default Home;
