import React from "react";
import { useGlobalContext } from "../context";
import errorImage from "../images/error-image.jpg";
const Header = () => {
  const { books, isLoading, noResults } = useGlobalContext();
  if (!isLoading && !noResults) {
    const { title, subtitle } = books.items[0].volumeInfo;
    return (
      <div className="header-container">
        <section className="hero-container">
          <img
            src={
              books.items[0].volumeInfo.imageLinks
                ? books.items[0].volumeInfo.imageLinks.thumbnail
                : errorImage
            }
            alt="First result's cover"
          />
          <div className="hero-desc">
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="header-container">
      <section className="hero-container">
        <img src="" alt="" />
        <div className="hero-desc">
          <h3>Loading ...</h3>
          <h6>Please wait...</h6>
        </div>
      </section>
    </div>
  );
};

export default Header;
