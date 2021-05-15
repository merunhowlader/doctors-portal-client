import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
       <footer className='my-5'>
           <div className="row">
               <div className="col-md-3">
                    <h6 className="text-secondary">Emargancy Dantel Care</h6>
                    <h6 className="text-secondary"> Check Up</h6>
                    <h6 className="text-secondary">Treatment of Personal Dintest</h6>
                    <h6 className="text-secondary"> Tooth Extraction</h6>
                    <h6 className="text-secondary"> Check Up</h6>
               </div>
               <div className="col-md-3">
                   <h4 style={{color:'#1CC7C1'}}>Services</h4>
                   <h6 className="text-secondary">Emargancy Dantel Care</h6>
                    <h6 className="text-secondary"> Check Up</h6>
                    <h6 className="text-secondary">Treatment of Personal Dintest</h6>
                    <h6 className="text-secondary"> Tooth Extraction</h6>
                    <h6 className="text-secondary"> Check Up</h6>
                   <h6 className="text-secondary">Check Up</h6>
                   <h6 className="text-secondary">Check Up</h6>
               </div>
               <div className="col-md-3">
                   <h4 style={{color:'#1CC7C1'}}>Oral Health</h4>
                   <h6 className="text-secondary">Emargancy Dantel Care</h6>
                    <h6 className="text-secondary"> Check Up</h6>
                    <h6 className="text-secondary">Treatment of Personal Dintest</h6>
                    <h6 className="text-secondary"> Tooth Extraction</h6>
                    <h6 className="text-secondary"> Check Up</h6>
                   <h6 className="text-secondary">Check Up</h6>
                   <h6 className="text-secondary">Check Up</h6>
               </div>
               <div className="col-md-3">
                   <h4 style={{color:'#1CC7C1'}}>Our Address</h4>
                   <h6>New York -101010 Hudson <br /> Yards</h6>
                   <FontAwesomeIcon icon={faFacebook} />
                   <h6>call now</h6>
                   <button>+023489734</button>

               </div>

           </div>
           <div className="text-center my-5">
               <p>Copyright @ {(new  Date()).getFullYear()} all Right Reserved</p>
           </div>
       </footer>
    );
};

export default Footer;