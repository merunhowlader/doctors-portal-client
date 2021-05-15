import React from "react";
import doctor from "./../../../images/doctor.png";
import "./Appoinment.css";

const Appoinment = () => {
  return (
    <section className=" appoinment-container ">
      <div className="mkcontainer ">
        <div className="row d-flex justify-content-end w-75 ">
        
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7  text-white py-5 abc">
                    <h6 className="text-uppercase" style={{color:'#1CC7C1'}}>APPOINTMENT</h6>
                    <h2 className="my-4">
                    Make an Appoinment <br /> Today
                    </h2>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
                    itaque excepturi ipsum vel magnam unde. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Aliquam, quibusdam.
                    </p>

                    <button className="btn btn-primary">Learn More</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
