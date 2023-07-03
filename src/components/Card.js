import React from "react";

const Card = () => {
  return (
    <>
      <div className="movie-item mb-50">
        <div className="movie-poster">
          <a href="movie-details.html">
            <img src="./assets/img/poster/ucm_poster03.jpg" alt="" />
          </a>
        </div>
        <div className="movie-content">
          <div className="top">
            <h5 className="title">
              <a href="movie-details.html">The Dog Woof</a>
            </h5>
            <span className="date">2021</span>
              {" "}
          </div>
          <div className="bottom">
            <ul>
              <li>
                <span className="quality">hd</span>
              </li>
              <li>
                <span className="duration">
                  <i className="far fa-clock"></i> 128 min
                </span>
                <span className="rating">
                  <i className="fas fa-thumbs-up"></i> 3.5
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
