import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import axiosInstance from '../BaseUrl';

function AdminMoverReq() {

    const [moverreq, setmoverreq] = useState([]);

  useEffect(() => {
    axiosInstance.post("/https://mern-packers-backend.onrender.com").then((responce) => {
        if(responce.data.msg=='No Data obtained '){
            setmoverreq([])
        }else{
            setmoverreq(responce.data.data);

        }
      console.log(responce);
    });
  }, []);

  const handleApprove = (id) => {
    axiosInstance.post(`/https://mern-packers-backend.onrender.com`)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
            alert('Approved')
            setmoverreq(prevArray => prevArray.filter(item => item._id !== id));
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
      <Sidebar/>
      <div class="container">
  <div class="mrgin">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Reg No</th>
            <th scope="col">Email</th>
            <th scope="col">Aadhaar</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
               moverreq.length?moverreq.map((a)=>{
                return(
                    <tr>
            <td>{a.name}</td>
            <td>{a.regno}</td>
            <td>{a.email}</td>
            <td>{a.aadhar}</td>
            <td>{a.contact}</td>
            <td ><button class='btn btn-success' onClick={()=>{handleApprove(a._id)}} >approve</button></td>
          </tr>
                )
               }) :<h1>No Requets found</h1>
            }
          
          
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  )
}

export default AdminMoverReq
