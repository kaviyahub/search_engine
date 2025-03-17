import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import 'font-awesome/css/font-awesome.min.css'; 
import Dropdown from 'react-bootstrap/Dropdown';

const aboutpage = () => {
  return (
    <>
 <nav  className="a ">
  <div  className="container-fluid">
    <div className='row b'>
      <div style={{transform:"translateY(+40%)"}} className="col-md-7">
        <a  style={{fontSize:"25px",fontFamily:"cursive",color:" rgb(20, 3, 69)"}} className="navbar-brand" href="#"><b>Search Engine</b></a>
      </div>
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
   
    {/* about  */}
    <div className='container-sm'>
    <h1 style={{color:" rgb(14, 14, 70)",fontFamily:"fantasy",fontSize:"40px",marginTop:"30px",textDecoration:"underline"}}>Search Engine:</h1><br></br>
    <b style={{marginLeft:"150px"}}>A search engine is a software system designed to help users find information on the internet. It works by crawling, indexing, and retrieving relevant web pages based on the &nbsp; keywords or queries entered by the user. Some popular search engines include Google, Bing, Yahoo, DuckDuckGo, and Baidu.</b>
    <h1 style={{color:" rgb(14, 14, 70)",fontFamily:"fantasy",fontSize:"35px",marginTop:"30px",textDecoration:"underline"}}>How search engine works: </h1><br></br>
<ol>
    <b>
    <li>
    Crawling – The search engine uses automated programs called web crawlers or spiders to scan and collect data from websites.
    </li>
    <li>Indexing – The collected data is stored in a large database and organized for quick retrieval.</li>
    <li>Ranking & Retrieval – When a user enters a query, the search engine uses complex algorithms to rank and display the most relevant results.</li>
    </b>
</ol>
<h1 style={{color:" rgb(14, 14, 70)",fontFamily:"fantasy",fontSize:"35px",marginTop:"30px",textDecoration:"underline"}}>Types of Search Engines:</h1><br>
</br>
<ul>
    <b>
    <li>Web Search Engines – Google, Bing, Yahoo (used for general searches).</li>
    <li>Meta Search Engines – Dogpile, Startpage (aggregate results from multiple search engines).</li>
    <li>Vertical Search Engines – Amazon (e-commerce), YouTube (videos), PubMed (medical research).</li>
    <li>Private Search Engines – DuckDuckGo, Startpage (focus on privacy without tracking users)</li>
    </b>
</ul>
<h1 style={{color:" rgb(14, 14, 70)",fontFamily:"fantasy",fontSize:"35px",marginTop:"30px",textDecoration:"underline"}}>Factors Affecting Search Rankings:</h1>
<br></br>
<ul>
    <b>
        <li>Relevance – How well a page matches the search query.</li>
        <li>Keywords – Use of search terms in the content, title, and meta tags.</li>
        <li>Backlinks – Links from other reputable websites that indicate trustworthiness.</li>
        <li>User Experience – Page speed, mobile-friendliness, and content quality.</li>
        <li>Freshness – How recently the content was updated.
        </li>
    </b>
</ul>

    </div>
    </>
  )
}

export default aboutpage