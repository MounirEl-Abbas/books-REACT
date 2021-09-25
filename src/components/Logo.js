import imgCodeLeft from "../images/code-left.png";
import imgCodeRight from "../images/code-right.png";

import React from "react";

const Logo = () => {
  return (
    <>
      <section className="logo-container">
        <img src={imgCodeLeft} alt="" />
        <img
          src="https://www.frontlist.in/wp-content/uploads/2019/10/Google-Books-Update.png"
          alt="Google Books API"
        />
        <img src={imgCodeRight} alt="" />
      </section>
    </>
  );
};

export default Logo;
