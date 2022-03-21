import { Form } from "formik";
import React from "react";
import web from "../Assets/web.svg";
import mobile from "../Assets/mobiles.svg";
import cms from "../Assets/cms.svg";
import graphic from "../Assets/graphic-tool.svg";
import research from "../Assets/research.svg";

const Expertise = () => {
  return (
    <>
      <div className="srv-card">
        <div className="row space">
          <div className="col-2">
            <div className="card-size">
              <img src="" alt="" />
              <img src={web} alt="" />
              <h5>Web Developement</h5>
            </div>
          </div>
          <div className="col-2">
            <div className="card-size">
              <img src="" alt="" />
              <img src={mobile} alt="" />
              <h5>Mobile Development</h5>
            </div>
          </div>
          <div className="col-2">
            <div className="card-size">
              <img src="" alt="" />
              <img src={research} alt="" />
              <h5>Quality Assurance</h5>
            </div>
          </div>
          <div className="col-2">
            <div className="card-size">
              <img src="" alt="" />
              <img src={graphic} alt="" />
              <h5>UI / UX Design</h5>
            </div>
          </div>
          <div className="col-2">
            <div className="card-size">
              <img src="" alt="" />
              <img src={cms} alt="" />
              <h5>DevOps Services</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
