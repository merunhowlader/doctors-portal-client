import React from 'react';
import Testimo from '../Testimo/Testimo';
import p1 from './../../../images/p1.png';
import p2 from './../../../images/p2.png';
import p3 from './../../../images/p3.png';
import './Testimonials.css'

const tsData=[
    {
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quidem similique vero soluta maiores libero.",
        name:'winson Herry',
        address:'california',
        img:p1
    },
    {
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quidem similique vero soluta maiores libero.",
        name:'winson Herry',
        address:'california',
        img:p2
    },
    {
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quidem similique vero soluta maiores libero.",
        name:'winson Herry',
        address:'california',
        img:p3
    }
]
const Testimonials = () => {
    return (
        <section className="testinonials my-5">
                <div  >
                    <div  className="tstop text-center my-5">
                        
                        <h5 style={{color:'#1CC7C1'}}>TESTIONIAL</h5>
                        <h1>What's Our Patients Says</h1>
                    </div>
                    <div className="row">
                        {
                            tsData.map(tdata=><Testimo tdata={tdata}></Testimo>)
                        }
                    </div>
                </div>
        </section>
    );
};

export default Testimonials;