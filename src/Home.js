import React from 'react';
import Common from './Common';
import home from "../src/images/home.jpeg";

const Home = () => {
  return(
    <div>
        <Common       
          name='Grow your business with' 
          imgsrc={home} 
          visit="/service" 
          btname="Get Started"/>
    </div>
  );
}; 

export default Home;