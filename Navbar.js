import React,{useState} from 'react';





export default function Navbar() {

 
  return (
    <div><nav className=" navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
    <a className="navbar-brand" href="#">
      <h3>Welcome to the store</h3></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      
      
      <form className="form-inline my-2 my-lg-0" id="Search1">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2  my-sm-0" type="submit">Search</button>
      </form>
    </div>
    
  </nav>
 
</div>
  )
}
 
