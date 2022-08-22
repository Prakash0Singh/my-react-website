import React from 'react';
import Home from './Home';
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
    <Navbar/>
     <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home/>} />
      </Routes>
   </>
  );
}

export default App;
