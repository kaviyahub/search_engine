import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const homepage = () => {



    useEffect(()=>{
      toast("Welcome to search Engine...!");
    })

    

  return (
    <>
   
    {/* navbar */}

  <nav  className="a ">
  <div  className="container-fluid">
    <div className='row b'>
      <div style={{transform:"translateY(+50%)"}} className="col-md-7">
        <a  style={{fontSize:"25px",fontFamily:"cursive",color:" rgb(20, 3, 69)"}} className="navbar-brand" href="#"><b>Search Engine</b></a>
      </div>
      <div style={{transform:"translateY(+70%)"}} className="col-md-5">
  <b style={{fontSize:"15px"}}>
    <Link style={{color:" rgb(20, 3, 69)",textDecoration:"none"}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link style={{color:" rgb(20, 3, 69)",textDecoration:"none"}}>About us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link style={{color:" rgb(20, 3, 69)",textDecoration:"none"}}>Categories</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
  </b> 
  <form  style={{transform:"translateY(-100%)",marginLeft:"300px"}}>
      <input type="text" placeholder="Search..."/>
      <button style={{backgroundColor:" rgb(53, 24, 139)",color:"ButtonShadow"}} type="submit"> 
        <i className="fa fa-search"></i></button>
  </form>
     </div>
  </div>
  </div>
  </nav>  

  {/* search bar*/}

  <div className='container-fluid'>
    <center style={{marginTop:"150px"}}>
      <b style={{color:" rgb(14, 14, 70)",fontFamily:"fantasy",fontSize:"50px"}}>Search  &nbsp;Engine</b><br></br><br></br><br></br>
  <input style={{ width:"700px",height:"60px",textAlign:"inherit",fontFamily:"cursive~"}} type="text"  placeholder="        Search or type a URL..."/>
  <Link><i className="fa fa-microphone" style={{
                  position: 'absolute',
                  left: '23.5%', // Positioned inside the input box on the right side
                  transform: 'translateY(+85%)', // Vertically center the icon
                  fontSize: '22px',
                  color: 'gray',
                }}></i></Link>
  <button style={{backgroundColor:" rgb(42, 24, 95)",color:"ButtonShadow",width:"100px",height:"60px"}}type="submit">
     <i className="fa fa-search"></i></button>
    </center>
  

  </div>
  <ToastContainer />
  </>
  )
}

export default homepage