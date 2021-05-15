import React from 'react';
import { useForm } from "react-hook-form";
import './ContactUs.css'
const ContactUs = () => {
    return (
        <section className="contact-section d-flex justify-content-center">
            <div className='w-75 text-center cont'>
                <div className='my-5'>
                    <h3 style={{color:'#1CC7C1'}}>CONTACT US</h3>
                    <h1>Always Contact With us</h1>
                </div>
                <div>
                   <form>
                    <input class="form-control form-control-lg my-5" type="text" placeholder="Email Address *" />   
                    <input class="form-control form-control-lg my-5" type="text" placeholder="Subject *" />   
                    <textarea class="form-control my-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <button type="submit" class="btn btn-primary my-5">Submit</button>
                    </form> 
                    

                </div>

            </div>

        </section>
    );
};

export default ContactUs;