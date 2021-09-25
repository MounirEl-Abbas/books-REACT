import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import errorImage from "../images/error-image.jpg";

const Books = () => {
  const { books, isLoading, noResults, fetchBookByClick, reset } =
    useGlobalContext();

  return (
    <section className="books-container">
      {isLoading ? (
        <h3>Loading ...</h3>
      ) : noResults ? (
        <div className="no-results">
          <h1>No results match your search criteria ...</h1>
          <button onClick={reset}>Clear</button>
        </div>
      ) : (
        books.items.map((book) => {
          const {
            id,
            volumeInfo: { title, subtitle },
          } = book;
          return (
            <Link
              to={`/book/${title}`}
              className="book"
              key={id}
              onClick={() => fetchBookByClick(book)}
            >
              <img
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : errorImage
                }
                alt={`${title}'s book cover`}
              />
              <h3>{title}</h3>
              <h6>{subtitle}</h6>
            </Link>
          );
        })
      )}
    </section>
  );
};
export default Books;
