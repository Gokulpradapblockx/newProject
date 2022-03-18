import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" gradient__bg">
      <div class="col-lg-12 container">
        <div class="row">
          <div class=" imade col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>

         <div className="col-lg-6">
         <div className="main-page__title-block ">
           <h1>
           <span className="main-page__title">Your</span>
           <span className="main-page__title main-page__title--big">IT Outsourcing </span>
           <span className = "main-page__title main-page__title main-page__title--sub">
           partner
           </span>
           </h1>
          </div>
        
          <div className="main-page__description">
            <p>
            Devox Software is a Top Software Development Agency in Ukraine 2020 🥇 that creates design and development solutions for startups, SMBs, and enterprises.
            </p>            
          </div>
          <div className="main-page__button-container">
            <div className="main-page__button-text">
            Let's talk
            <a className="round-btn link-to-form" href=""><FaArrowRight/></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
