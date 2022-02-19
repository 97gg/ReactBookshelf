import React from "react";
import loading from "../../assets/images/loading.svg";

const Loading = () => (
  <div className="spinner text-center">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
