import React from "react";
import Nav from "react-bootstrap/Nav";
import { act } from "react-dom/test-utils";
import Card from "../Card";


const UpcomingMovies = () => {
  return (
    <div>
      <section
        className="ucm-area ucm-bg"
        style={{ backgroundImage: "url('./assets/img/bg/ucm_bg.jpg')" }}
      >
        <div
          className="ucm-bg-shape"
          data-background="img/bg/ucm_bg_shape.png"
          style={{ backgroundImage: "url('./assets/img/bg/ucm_bg_shape.png')" }}
        ></div>
        <div className="container">
          <div className="row align-items-end mb-55">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title">ONLINE STREAMING</span>
                <h2 className="title">Upcoming Movies</h2>
              </div>
            </div>
           
          </div>
          <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
                  <div className="col-md-3">
                  <Card />
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingMovies;
