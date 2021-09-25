import React from "react";
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";

const Error = () => {
  return (
    <>
      <Link className="back-btn" to="/">
        <GoChevronLeft className="chevron-left-icon" /> <p>Back</p>
      </Link>
      <h4>Error, Page not found.</h4>
    </>
  );
};

export default Error;
