import React from 'react';
import Common from './Common'
import { NavLink } from 'react-router-dom';
import business from "../src/images/business.jpg";

const About = () => {
  return(
    <div>
      <Common 
      name='Welcome to About page' 
      imgsrc={business} 
      visit="/contact" 
      btname="Contact Now" />
    </div> 
    );
}; 

export default About;