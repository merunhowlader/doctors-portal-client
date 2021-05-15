import React from "react";
import "./Blog.css";

const Blog = ({ bData }) => {
  return (
    <div className="col-md-4 blogHover ">
      <div>
        <div className="row my 5">
          <div className="col-md-4 ">
            <img src={bData.img} alt="" />
          </div>
          <div className="col-md-8 ">
            <h5>{bData.name}</h5>
            <p className="text-secondary">{bData.date}</p>
          </div>
        </div>
        <div>
          <h3>{bData.title}</h3>
          <h5 className="text-secondary">{bData.description}</h5>
        </div>

        
      </div>
    </div>
  );
};

export default Blog;
