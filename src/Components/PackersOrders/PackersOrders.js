import React, { useEffect, useState } from "react";
import PackersNav from "../PackersNav/PackersNav";
import axiosInstance from "../../BaseUrl";
import { Link } from "react-router-dom";

function PackersOrders() {
  const id = localStorage.getItem("packerId");
  const [value, setValue] = useState([]);

  useEffect(() => {
    console.log(id);
    axiosInstance
      .post(`https://mern-packers-backend.onrender.com`)
      .then((res) => {
        console.log(res);
        setValue(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemove = (id) => {
    axiosInstance.post(`/deleteOrderById/${id}`)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
            alert('Removed')
            setValue(prevArray => prevArray.filter(item => item._id !== id));
            // window.location.reload()
        }else{
            // alert.warning('Employee Already Exist')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <PackersNav />
      <div class="container py-5">
        <div class="row g-5">
          {value.length ? (
            value.map((a) => {
              return (
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-12">
                      <div class="blog-item mb-5">
                        <div class="bg-light overflow-hidden p-4">
                          <div class="d-flex mb-3">
                            <small class="me-3">
                              <i class="ri-calendar-todo-line m-2"></i>
                              {a.date.slice(0, 10)}
                            </small>
                            <small>
                              <i class="ri-time-line m-2"></i>
                              {a.time}
                            </small>
                          </div>
                          {/* <h5 class="text-uppercase m-2 mb-3">{a.name}</h5>
                  <p class="m-2" style={{fontSize:'large'}}>
                    City : {a.city}<br />District : {a.district}<br />
                  </p> */}
                          <div class="d-flex mb-3 m-2 justify-content-between">
                            <div>
                              <h6>
                                {" "}
                                From:
                                <br /> {a.fromhname} {a.fromstreet}{" "}
                                {a.fromlmark} {a.fromcity} {a.fromdistrict}
                              </h6>
                            </div>
                            <div>
                              <h6>
                                {" "}
                                To:
                                <br /> {a.tohname} {a.tostreet} {a.tolmark}{" "}
                                {a.tocity} {a.todistrict}
                              </h6>
                            </div>
                          </div>
                          <div class="d-flex mb-3 m-2 justify-content-between">
                            <div>House Type : {a.type}</div>
                            <div>Total distance : {a.distance} Km</div>
                          </div>

                          <div class="d-flex mb-3 m-2 justify-content-between">
                            <div>No: of boxes - {a.boxes}</div>
                            <div>Weight - {a.weight} Kg</div>
                          </div>
                          <div class="d-flex mb-3 m-2 justify-content-between">

                          <div>
                            Godown Days - {a.godownDays}
                          </div>
                          <div>Vehicle status - {a.vehicle==true?'Yes':'No'}</div>
                          </div>
                          <div class="d-flex mb-3 m-2 justify-content-between">

                          <div>
                            {a.status?`Current Status - ${a.status}`:''}
                          </div>
                          <div>
                          {a.loc?`Current Status - ${a.loc}`:''}
                            
                            </div>
                          </div>

                          <div class="d-flex mb-3 m-2 justify-content-between">

                          <div>
                            <h4 class='text-success'>Amount - {a.rate}</h4>
                          </div>
                          </div>

                          <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-danger" onClick={() => handleRemove(a._id)} >Remove</button>
                            {a.status=='pending'?'':<Link to={`/packer_add_complaint/${a.mid}`}  ><button type="button" class="btn btn-warning" >Add Complaints</button></Link>}
                            {a.status=='pending'?'':<Link to={`/packer_add_review/${a.mid}`} ><button type="button" class="btn btn-success" >Add Rating</button></Link>}

                            {/* <button type="button" class="btn btn-warning" onClick={()=>{navigate(`/single-packer-view/${a._id}`)}} >View</button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 style={{ padding: "50px", textAlign: "center" }}>
              No Orders found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default PackersOrders;
