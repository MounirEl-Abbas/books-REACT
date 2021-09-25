import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Reviews from "../components/reviews/Reviews";
import { GoChevronLeft } from "react-icons/go";

const Book = () => {
  let uniqueKey1 = 0;
  let uniqueKey2 = 9999;
  const { singleBook } = useGlobalContext();

  const {
    volumeInfo: {
      title,
      subtitle,
      averageRating,
      description,
      imageLinks: { thumbnail },
      infoLink,
      pageCount,
      publishedDate,
      publisher,
      categories,
      authors,
    },
  } = singleBook;

  return (
    <div className="book-info-container">
      <Link className="back-btn" to="/">
        <GoChevronLeft className="chevron-left-icon" /> <p>Back</p>
      </Link>
      <section className="book-info">
        <a
          href={infoLink}
          rel="noreferrer"
          target="_blank"
          title="Google Books Store"
        >
          <img
            className="book-cover"
            src={thumbnail}
            alt={`${title}'s cover'`}
          />
        </a>
        <h3>
          <a
            className="book-anchor"
            href={infoLink}
            rel="noreferrer"
            target="_blank"
            title="Google Books Store"
          >
            {title}
          </a>
        </h3>
        <h6>{subtitle}</h6>
        <p>{description}</p>
        <div className="extra-info">
          <p>
            <span>Page Count: </span>
            {pageCount && pageCount}
          </p>
          <p>
            <span>Rating: </span>
            {averageRating && averageRating}
          </p>

          <div>
            <span>Author: </span>
            {authors && authors.length === 1 ? (
              <p> {authors[0]}</p>
            ) : (
              authors &&
              authors.map((author) => {
                uniqueKey1++;
                return <p key={uniqueKey1}> {author},</p>;
              })
            )}
          </div>
          <div>
            <span>Category: </span>
            {categories && categories.length === 1 ? (
              <p> {categories[0]}</p>
            ) : (
              categories &&
              categories.map((category) => {
                uniqueKey2--;
                return <p key={uniqueKey2}> {category}, </p>;
              })
            )}
          </div>
          <p>
            <span>Published By: </span> {publisher} - {publishedDate}
          </p>
        </div>
      </section>
      <Reviews />
    </div>
  );
};

export default Book;
