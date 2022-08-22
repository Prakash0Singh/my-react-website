import React from 'react';
import desgin from './images/web-design.jfif'
import database from './images/database.jpg' 
import development from './images/web.jfif'
import app from './images/app.jfif'
import digital from './images/digital.jfif'
import marketing from './images/marketing.jfif'
function Service() {
  return (
   <>
    <div className="my-5">
      <h1 className='text-center display-3 text-dark'>Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row gy-4">
    <Cards image={desgin} name="Web Desegining"/>
    <Cards image={database} name="Web Servers"/>
    <Cards image={app} name="App Development"/>
    <Cards image={digital} name="Digital Marketing"/>
    <Cards image={marketing} name="Marketing Analysis"/>
    <Cards image={development} name="Web Development"/>
    </div>
    </div>
    </div>
    </div>
    
   </>
  );
}

export default Service;
//style={{width: "18rem"}} 
const Cards=(props)=>{
  return(
    <>
  <div className="col-md-4 col-10 mx-auto">
      <div className="card" >
      <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center font-weight-bold">{props.name}</h5>
    </div>
    </div>
  </div>

    </>
  )
}