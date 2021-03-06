import React from 'react';

const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul class="navbar-nav  ms-auto  ">
                <li class="nav-item">
                <a class="nav-link  ms-5 active" aria-current="page" href="/#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link  ms-5 text-white" href="/#">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link  ms-5 text-white" href="/#">Dental services</a>
                </li>
                <li class="nav-item">
                <a class="nav-link  ms-5 text-white" href="/#">reviews</a>
                </li>
                <li class="nav-item">
                <a class="nav-link  ms-5 text-white" href="/#">Blogs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link  ms-5 text-white" href="/#">Contact us</a>
                </li>
              
               
            </ul>
           
            </div>
        </div>
    </nav>
    );
};

export default NavBar;