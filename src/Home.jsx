import React from 'react';
import introImage from './images/myIntro.svg' 
import Common from './Common';
function Home() {
  return (
  <>
  <Common name="Grow your business with us"
     imgsrc={introImage } 
     visit="/service"
     btnName="Get Started"
     />
     
     {/* <Footer/> */}
</>
  );
}

export default Home;