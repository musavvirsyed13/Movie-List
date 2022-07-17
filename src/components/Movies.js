import React from "react";
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";

const Movies = (props) => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="vote">
          <IoCaretUpSharp size={35} />
          <div className="voting">{props.voting}</div>
          <IoCaretDownSharp size={35} />
          <p>
            <strong>VOTES</strong>
          </p>
        </div>
        <div className="image">
          <img src={props.poster} alt="poster" />
        </div>
        <div className="content">
          <div className="sub-content">
            <h2>{props.title}</h2>
            <h4>Genre: {props.genre}</h4>
            <h4>Director: {props.director}</h4>
            <h4>Starring: {props.stars}</h4>
            <p>
              {props.runTime} mins | {props.language} | {props.releasedDate}
            </p>
            <span>
              {props.pageViews} Views| Voted by {props.voting} people
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
