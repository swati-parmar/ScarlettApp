import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from "../src/imges/img2.svg";

const Common = (props) => {
  return(
    <div>
      <section id='header' className='d-flex align-items-center'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
          <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0order-2 order-lg-1 justify-content-center'>
                <h1> 
                {props.name} 
                    <strong className='brand-name'> Scarlett </strong>
                </h1>
                <h2 className='my-3'>
                  We are the team of talented developer making websites
                </h2>
                <div className='mt-3 rounded-pill'>
                  <NavLink to={props.visit} className='btn-get-started '> 
                  {props.btname}
                  </NavLink>
                </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
              <img src={props.imgsrc} className='img-fluid animated' alt='about img' />
            </div>
            </div>
          </div>
        </div>
      </div>

      </section>
    </div>
  );
}; 

export default Common;