import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginimg from '../../Images/packlogin.jpg'
import Navs from '../Nav/Navs';
import axios from 'axios';
import { toast } from 'react-toastify';
import axiosInstance from '../../BaseUrl';


function MoversLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const doLogin = (e) => {
        e.preventDefault();

        const values={email: email, password: password}
        console.log(values);

        axiosInstance.post('https://mern-packers-backend.onrender.com',values)
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                localStorage.setItem('moversId',res.data.user._id)
                toast.success('Loggedin Successfully')
                navigate('/movers-home')
            }else{
                toast.error('Login failed')
            }
        })
        .catch((err)=>{
            console.log(err);
            toast.error('Login failed')

        })

      };

  return (
    <div>
        <Navs/>
      <div className="container-fluid py-5">
        <div className="container"  >
        <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">Movers</h6>
                        <h1 className="display-5 text-uppercase mb-0">Login</h1>
                    </div>
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                    
                        <img className="position-absolute w-100 h-100 rounded" src={loginimg} style={{objectFit:'cover', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingTop:'2rem'}}>
                <form onSubmit={doLogin} >
                        <div className="row g-3">
                            
                            <div className="col-12" style={{marginBottom:'1rem'}} >
                                <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height:'55px'}} value={email} onChange={(e)=>{setEmail(e.target.value);
                                }}
                                autoComplete="off"
                                />
                            </div>
                            <div className="col-12" style={{marginBottom:'1rem'}}>
                                <input type="password" className="form-control bg-light border-0 px-4" placeholder="Password" style={{height:'55px'}} value={password} onChange={(e)=>{setPassword(e.target.value);
                                }}
                                autoComplete="new-password"
                                />
                            </div>
                            
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                                <p className='mt-4 text-center' >Don't have an account? <Link to='/movers-reg' className='text_dec' >Sign up</Link> </p>
                                <p className='mt-4 text-center' > <Link to='/movers-forgot-pass' className='text_dec' >Forgot password?</Link> </p>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MoversLogin
