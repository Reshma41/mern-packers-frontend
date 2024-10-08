 import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signimg from '../../Images/packsign.jpg'
import { useFormik } from "formik";
import {packersRegSchema } from '../Schemas/Schemas';
import axios from 'axios';
import Navs from '../Nav/Navs';
import { toast } from 'react-toastify';
import axiosInstance from '../../BaseUrl';



function PackersReg() {
    const navigate = useNavigate();

    const onSubmit = () => {
        axiosInstance.post("/https://mern-packers-backend.onrender.com",values)
    .then((response)=>{
        console.log("success",response)
        
        // alert("success")
        if (response.data.status===200) {
            navigate('/packers-login')
            toast.success('Profile created')
        }else{
            toast.error('Registration Failed')

        }
    })
    .catch((error)=>{
        console.log("err",error)
        // alert("err")
        toast.error('Registration Failed')

    })
        console.log(values);
      };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            contact: "",
            password: "",
            city: "",
            district: "",
            pincode: "",
          },
          validationSchema: packersRegSchema,
          onSubmit,
    })

    

  return (
    <div>
        <Navs/>
      <div className="container-fluid py-5">
        <div className="container"  >
        <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">Packers</h6>
                        <h1 className="display-5 text-uppercase mb-0">Sign Up</h1>
                    </div>
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src={signimg} style={{objectFit:'contain', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingTop:'2rem'}}>
                <form onSubmit={handleSubmit} >
                        <div className="row g-3">
                            <div className="col-6">
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{height:'55px'}} value={values.name} onChange={handleChange} onBlur={handleBlur} id='name' />
                                {errors.name && touched.name && (<p className="error">{errors.name}</p>)}
                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height:'55px'}} value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' autoComplete="off"/>
                                {errors.email && touched.email && (<p className="error">{errors.email}</p>)}

                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <select className="form-control bg-light border-0 px-4" style={{height:'55px'}} name='gender' onChange={handleChange} onBlur={handleBlur}>
                                <option>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                </select>
                                {errors.gender && touched.gender && (<p className="error">{errors.gender}</p>)}

                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="number" className="form-control bg-light border-0 px-4" placeholder="Phonenumber" style={{height:'55px'}} value={values.contact} onChange={handleChange} onBlur={handleBlur} id='contact'/>
                                {errors.contact && touched.contact && (<p className="error">{errors.contact}</p>)}

                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}}>
                                <input type="password" className="form-control bg-light border-0 px-4" placeholder="Password" style={{height:'55px'}} value={values.password} onChange={handleChange} onBlur={handleBlur} id='password' autoComplete="new-password"/>
                                {errors.password && touched.password && (<p className="error">{errors.password}</p>)}

                            </div>
                            {/* <div class="col-6" style={{marginBottom:'1rem'}}>
                                <input type="password" class="form-control bg-light border-0 px-4" placeholder="Confirm Password" style={{height:'55px'}} value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} id='confirmPassword'/>
                                {errors.confirmPassword && touched.confirmPassword && (<p className="error">{errors.confirmPassword}</p>)}

                            </div> */}
                            <div className="col-6">
                                <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="City" style={{height:'55px'}} value={values.city} onChange={handleChange} onBlur={handleBlur} id='city'/>
                                {errors.city && touched.city && (<p className="error">{errors.city}</p>)}

                            </div>
                            <div className="col-6">
                                <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="District" style={{height:'55px'}} value={values.district} onChange={handleChange} onBlur={handleBlur} id='district'/>
                                {errors.district && touched.district && (<p className="error">{errors.district}</p>)}

                            </div>
                            <div className="col-6">
                                <input type='number' className="form-control bg-light border-0 px-4 py-3" placeholder="Pincode" style={{height:'55px'}} value={values.pincode} onChange={handleChange} onBlur={handleBlur} id='pincode'/>
                                {errors.pincode && touched.pincode && (<p className="error">{errors.pincode}</p>)}

                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Sign Up</button>
                                <p className='mt-4 text-center' >Already have an account? <Link to='/packers-login' className='text_dec' >Login</Link> </p>
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

export default PackersReg
