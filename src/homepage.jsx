import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Dropdown from 'react-bootstrap/Dropdown';

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
      <div style={{transform:"translateY(+40%)"}} className="col-md-7">
        <Link to='/login' style={{fontSize:"25px",fontFamily:"cursive",color:" rgb(20, 3, 69)"}} className="navbar-brand"><b>Search Engine</b></Link>      </div>
      <div style={{transform:"translateY(+40%)"}} className="col-md-5">
 <div className='drop'>
 {/* d1 */}
  <Dropdown>
  <Dropdown.Toggle  style={{background:"none",border:"none",color:" rgb(53, 24, 139)"}} variant="success" id="dropdown-basic">
       <Link style={{color:" rgb(53, 24, 139)",textDecoration:"none"}} to='/homepage'><b>Home</b> </Link>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{backgroundColor:"lightblue",width:"300px",paddingLeft:"20px"}}>
          </Dropdown.Menu>
  </Dropdown>

 {/* d2 */}
  <Dropdown>
      <Dropdown.Toggle  style={{background:"none",border:"none",color:" rgb(53, 24, 139)"}} variant="success" id="dropdown-basic">
       <Link style={{color:" rgb(53, 24, 139)",textDecoration:"none"}} to='/aboutpage'><b>About</b> </Link>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{backgroundColor:"lightblue",width:"300px",paddingLeft:"20px"}}>
        <p style={{color:" rgb(53, 24, 139)",fontSize:"15px"}}><b>A search engine is a software system designed to help users find information on the internet. It works by crawling, indexing, and retrieving relevant web pages based on the   keywords or queries entered by the user
          . Some popular search engines include Google, Bing, Yahoo, DuckDuckGo, and Baidu and click about button for more info...</b></p>      </Dropdown.Menu>
  </Dropdown>

  {/* d3 */}
  <Dropdown>
          <Dropdown.Toggle  style={{background:"none",border:"none",color:" rgb(53, 24, 139)"}} variant="success" id="dropdown-basic">
       <Link style={{color:" rgb(53, 24, 139)",textDecoration:"none"}} to='/categories'><b>Categories</b> </Link>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{backgroundColor:"lightblue",width:"300px",paddingLeft:"20px"}}>
          </Dropdown.Menu>
  </Dropdown>
</div>
    
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
                  left: '23.5%', 
                  transform: 'translateY(+85%)',
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