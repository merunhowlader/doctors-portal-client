import React from "react";
import fsimg from "./../../../images/featuredService.png";
import './FeaturedService.css';
const FeaturedService = () => {
  return (
    <section className="featureContainer mt-5 d-flex justify-content-center ">
      <div className="row w-75">
        <div className="col-md-5 d-flex justify-content-center ">
          <img style={{ height:'400px'}} src={fsimg} alt="" />
        </div>
        <div className="col-md-7 mt-5 pl-5">
            <h2 className="mb-5" style={{color:'#3F4659'}}>Exceptional Dental <br /> Care,on Your Terms</h2>
            <p className="text-secondary mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, optio! Similique adipisci rerum repudiandae corrupti, labore itaque voluptatem iusto repellendus iste aspernatur magni officiis, aliquam eos accusantium iure! Placeat aut tempore fugit fuga, tenetur quisquam praesentium. Ex id qui ullam aperiam quas aut nostrum quo, fugit reprehenderit autem deserunt alias.</p>
            <button className=" btn mb-5"style={{color:'#1CC7C1'}}>Learn more</button>

        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
