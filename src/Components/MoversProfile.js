import React, { useEffect, useState } from 'react'
import MoversNav from './MoversNav'
import img from "../Images/profile.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrl';


function MoversProfile() {

    const [value, setvalue] = useState({});
    const navigate = useNavigate();
  
    const id=localStorage.getItem("moversId")


    useEffect(()=>{
      // const storedUser = localStorage.getItem("users");
      console.log(id);
  
  
  
    axiosInstance.post(`/https://mern-packers-backend.onrender.com`)
    .then((res)=>{
        console.log(res);
      setvalue(res.data.data)
      
    })
  
    },[])

  return (
    <div>
        <MoversNav/>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="border-start border-5 border-primary ps-5 mb-5">
              <h6 className="text-primary text-uppercase">Profile</h6>
              <h1 className="display-5 text-uppercase mb-0">Your Profile</h1>
            </div>
            <div className="col-md-4">
              <img src={img} style={{ height: "400px" }} alt="" />
            </div>
            <div className="col-md-6">
              
                  <div className="profile-head" key={value._id}>
                  <h5>{value.name}</h5>
                  <h6>{value.email}</h6>
                  <p className="proile-rating">
                    {/* RANKINGS : <span>8/10</span> */}
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <p
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Details
                      </p>
                    </li>
                    <li className="nav-item"></li>
                  </ul>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>E-mail</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Reg No</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.regno}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Aadhaar Number</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.aadhar}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Contact</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.contact}</p>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-md-6">
                      <label>Gender</label>
                    </div>
                    <div className="col-md-6">
                      <p>{packer.gender ? packer.gender : " - "}</p>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-md-6">
                      <label>City</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.city}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>District</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.district}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Pincode</label>
                    </div>
                    <div className="col-md-6">
                      <p>{value.pincode}</p>
                    </div>
                  </div>
              </div>
               
            </div>
            <div className="col-md-2" >
              <Link to='/movers-editprofile' >
              <button
                type="button"
                className="btn btn-primary" style={{marginRight:'3px'}}
              >Edit</button></Link>
              <Link to='/movers-login' ><button
                type="button"
                className="btn btn-danger"
                onClick={()=>{console.log("jijij");localStorage.setItem("")(navigate('/movers-login'))}}
              >Logout</button></Link>
            </div>
            
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default MoversProfile
