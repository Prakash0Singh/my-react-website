import { useState } from "react";
import React from "react";


function Contact() {
  const [data,setData]=useState({
    fullName:"",
    phone:"",
    email:"",
    message:"",
  });
  const inputEvent=(event)=>{
    const {name,value}=event.target

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })
  }
  const formSubmit=async(e)=>{
    e.preventDefault();
    const {fullName,phone,email,message}=data;
    if (fullName && phone && email && message) {
      
      const response= await fetch("https://project-1-5a517-default-rtdb.firebaseio.com/reactform.json",
   {method: "POST",
   headers:{
    "Content-Type":"application/json",
   },
   body:JSON.stringify({
    fullName,
    phone,
    email,
    message,
  })
  }
   )
    if (response) {
      setData(
        {
          fullName:"",
          phone:"",
          email:"",
          message:"",
        }
      ) 
    }
    alert(`Your Data Submited Successfully .`)
    } else {
      alert("Please Fill All Form Field")
    }
}
  return (
    <>
      <div className="mt-3 mb-3">
        <h1 className="text-center display-3 text-dark">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className=" col-10 col-md-6 mx-auto">
            <form onSubmit={formSubmit} method="POST">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Mobile Number"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your@mail.com"
                  required

                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary mb-3" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
