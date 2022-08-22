import React from 'react';
import contactUs from './images/Contact.svg' 
import Common from './Common';
function About() {
  return (
   <>
    <Common name="Welcome to About Page"
     imgsrc={contactUs } 
     visit="/contact"
     btnName="Contact Us"
     />
     
   </>
  );
}

export default About;