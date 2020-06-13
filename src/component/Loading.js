import React from "react";
import LoadinGif from "./../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>room data loading...</h4>
      <img src={LoadinGif} alt="loading"></img>
    </div>
  );
};

export default Loading;
