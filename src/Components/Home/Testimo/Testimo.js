import React from 'react';

const Testimo = ({tdata}) => {
    return (
        <div className="col-md-4">

        
           <div>
               <div className="my-5">
                   <h5>{tdata.des}</h5>
               </div>
               <div className="row">
                    <div className="col-md-4">
                        <img src={tdata.img} alt="" />

                    </div>
                    <div className="col-md-7 ">
                            <h5 style={{color:'#1CC7C1'}}>{tdata.name}</h5>
                            <p className="text-secondary">{tdata.address}</p>
                    </div>
               </div>
           </div>
        </div>

            
        
    );
};

export default Testimo;