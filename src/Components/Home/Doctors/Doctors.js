import React from 'react';
import doctor from './../../../images/doctor.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Doctors = () => {
    return (
        <section className="d-flex justify-content-center my-5">
            <div className="w-75 text-center">
            <h5 style={{color:'#1CC7C1'}}>Our Doctors</h5>

                <div className="row text-center">
                    <div className="col-md-4 ">
                        <img src={doctor} style={{height:'300px'}} alt="" />
                        <h4>Dr Caudi</h4>
                        <h6 className="text-secondary"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> o1762290253</h6> 

                    </div>
                    <div className="col-md-4">
                        <img src={doctor} style={{height:'300px'}} alt="" />
                        <h4>Dr Caudi</h4>
                        <h6 className="text-secondary"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> o1762290253</h6> 

                    </div>
                    <div className="col-md-4">
                        <img src={doctor} style={{height:'300px'}} alt="" />
                        <h4>Dr Caudi</h4>
                      <h6 className="text-secondary"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> o1762290253</h6>  

                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;