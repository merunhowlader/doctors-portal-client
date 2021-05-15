import React from 'react';
import Blog from '../Blog/Blog';
import blogger1 from './../../../images/p1.png';
import './Blogs.css'

const blogsData=[
    {name:"Dr. cudi",
    date:"23 April 2019",
    title:" Check at list a year",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis nam quasi ex illum provident, possimus tempora, magnam debitis mollitia.",
    img:blogger1
},
{name:"Dr. Merun",
date:"23 April 2019",
title:" 2 time a day",
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis nam quasi ex illum provident, possimus tempora, magnam debitis mollitia.",
img:blogger1
},
{name:"Dr. odd jack",
date:"23 April 2019",
title:" white smile",
description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis nam quasi ex illum provident, possimus tempora, magnam debitis mollitia.",
img:blogger1
}
];
const Blogs = () => {
    return (
        <section className="text-center my-5">
            <div className="my-5">
                
                <h5 style={{color:'#1CC7C1'}}>Our Blogs</h5>
                <h2>From Our Blog News</h2>
            </div>
            <div className="row  " >
                {
                    blogsData.map(bData=><Blog bData={bData}></Blog>)
                }
            </div>
        </section>
    );
};

export default Blogs;