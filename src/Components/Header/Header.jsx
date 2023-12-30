import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import './Header.css'

function Header() {
  const change=()=>{
    var icon=document.getElementById('icon');
    document.body.classList.toggle('dark-theme');

  }
  return (
    <div>
{/* <span className='txt'>ARSHAQ</span> */}

      <MDBNavbar light  className='head'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1 '><h4 className='icname'>Portfolio</h4></MDBNavbarBrand>
          <div className='text-light'>
          <i className="fa-solid fa-palette fa-lg theme" onClick={change} style={{color: '#5b739f'}}></i>
          <a href="#me"><span className='navitem'><span className='dev'>M</span>E</span></a>
          <a href="#projects"><span className='navitem'><span className='dev'>P</span>ROJECTS</span></a>
          <a href="#skill"><span className='navitem'><span className='dev'>S</span>KILLS</span></a>  
          <a href="#services"><span className='navitem'><span className='dev'>S</span>ERVICES</span></a>  
          <a href="https://www.linkedin.com/in/arshaq-ak-920183284/"><span className='navitem'><span className='dev'>L</span>ET'S TALK</span></a>
          </div>
        </MDBContainer>
      </MDBNavbar>

      </div>
  )
}

export default Header