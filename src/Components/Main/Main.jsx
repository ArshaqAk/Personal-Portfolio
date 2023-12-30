import React from 'react'

import './Main.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

function Main() {
  return (
    <>
      <div className="container-fluid bg ">
        <section id='me'>
        <div className="row ">
        <div className="col-lg-6 col-sm-12 text-end mt-5">
          <div className="texts mt-5    text  text-start">
         <h1><span className='dev'>I'm</span> Arshaq Ak</h1>
         <h4 className='dev'  > Web Developer</h4>
         <p className='about-text'>Mearn Developer At Luminar Technolab.
         
         Freelancer providing services for programming and design content needs.join me down below and let's get cracking! 
          </p>
          <a className='btn btn-light text-dark' href='https://drive.google.com/file/d/1QnODm-Uh9W-jQEaTEiUlM5DjUhePnv_R/view?usp=drivesdk' >Download Cv</a>
         </div>
        </div>

        <div className="col-6">
          <div className="profile">

          </div>
        </div>
        </div>
        </section>


        {/* projects */}
        <section id='projects'>
        <div className="row mt-5">
            <h4 className='dev'>PROJECTS</h4>
            <hr className='mt-4' />
          <div className="col-lg-3 col-sm-12 mt-4">
            <a href="https://delightful-kleicha-05c1a0.netlify.app/">
          <MDBCard className='bg-dark '>
      <MDBCardBody>
        <MDBCardTitle className='dev'>Restuarant App</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sequi officiis sed aspernatur amet, magni numquam ullam ducimus dolorem minima. Nemo dolor consequatur consectetur aliquam animi, fugit vitae dicta nihil.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
    </a>

          </div>
          <div className="col-lg-3 col-sm-12 mt-4">
            <a href="https://enchanting-caramel-3b00f4.netlify.app/">
          <MDBCard className='bg-dark'>
      <MDBCardBody>
        <MDBCardTitle className='dev'>Doctor App</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sequi officiis sed aspernatur amet, magni numquam ullam ducimus dolorem minima. Nemo dolor consequatur consectetur aliquam animi, fugit vitae dicta nihil.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
    </a>

          </div>
          <div className="col-lg-3 col-sm-12 mt-4">
            <a href="https://weatherfind-react-app.netlify.app/">
          <MDBCard className='bg-dark'>
      <MDBCardBody>
        <MDBCardTitle className='dev'>Weather App</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sequi officiis sed aspernatur amet, magni numquam ullam ducimus dolorem minima. Nemo dolor consequatur consectetur aliquam animi, fugit vitae dicta nihil.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
    </a>

          </div>
          <div className="col-lg-3 col-sm-12 mt-4">
            <a href=""></a>
          <MDBCard className='bg-dark'>
      <MDBCardBody>
        <MDBCardTitle className='dev'>Media App</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sequi officiis sed aspernatur amet, magni numquam ullam ducimus dolorem minima. Nemo dolor consequatur consectetur aliquam animi, fugit vitae dicta nihil.
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>

          </div>

        </div>
        </section>

        {/* skill */}

        <section id='skill'>

          <div className="row  mt-5">
          <h4 className='dev mt-5'>SKILLS</h4>
          <hr className='mt-4' />

            <div className="col-lg-12 col-sm-12 d-flex text-start mt-1 ">
              <div className="skillderive w-50 p-3">
                <h4>All the skills that i have in that field of work are mentioned</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi provident similique possimus! Iure minima quisquam rerum aut doloribus provident qui excepturi et labore, illum doloremque, corrupti, consectetur quibusdam hic.</p>
              </div>
              
              <div className="skillprogress w-50 p-3">
                <h6>React</h6>
                  <MDBProgress>
                <MDBProgressBar width={94} valuemin={0} valuemax={100} />
              </MDBProgress>

              <h6>Angular</h6>
                  <MDBProgress>
                <MDBProgressBar width={75} valuemin={0} valuemax={100} />
              </MDBProgress>


              <h6>Node js</h6>
                  <MDBProgress>
                <MDBProgressBar width={85} valuemin={0} valuemax={100} />
              </MDBProgress>


              </div>
            </div>
          </div>
        </section>

        {/* services */}
        <section id='services'>
        <div className="row">
          <h4 className='dev'>SERVICES</h4>
          <hr className='mt-4' />

          <div className="col-lg-4 co">
          <MDBCard className='bg-dark'>
      <MDBCardBody>
        <MDBCardTitle><i class="fa-solid fa-graduation-cap fa-lg" style={{color:' #5db18d'}}></i></MDBCardTitle>
        <MDBCardTitle className='dev'>Web Design</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt quo ab, sint, ex error, a minus beatae eius enim quasi. Quisquam impedit debitis facere provident necessitatibus cum, minima hic.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
       </div>

       <div className="col-lg-4 co">
          <MDBCard className='bg-dark'>
      <MDBCardBody>
      <MDBCardTitle><i class="fa-solid fa-graduation-cap fa-lg" style={{color:' #5db18d'}}></i></MDBCardTitle>

        <MDBCardTitle className='dev'>Web Dev</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt quo ab, sint, ex error, a minus beatae eius enim quasi. Quisquam impedit debitis facere provident necessitatibus cum, minima hic.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
       </div>

       <div className="col-lg-4 co">
          <MDBCard className='bg-dark'>
      <MDBCardBody>
      <MDBCardTitle><i class="fa-solid fa-graduation-cap fa-lg" style={{color:'#5db18d'}}></i></MDBCardTitle>

        <MDBCardTitle className='dev'>App Dev</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt quo ab, sint, ex error, a minus beatae eius enim quasi. Quisquam impedit debitis facere provident necessitatibus cum, minima hic.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
       </div>



        </div>
        </section>
      </div>
    </>
  )
}

export default Main