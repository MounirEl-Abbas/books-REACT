import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

/* 
Google Books API

Search by book title  -- https://www.googleapis.com/books/v1/volumes?q=intitle:tribe

Search By Author  -- https://www.googleapis.com/books/v1/volumes?q=inauthor:ferriss

Search by Category -- https://www.googleapis.com/books/v1/volumes?q=subject:fiction

*/

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [books, setBooks] = useState({});
  const [singleBook, setSingleBook] = useState({});
  const [searchingBy, setSearchingBy] = useState("intitle");
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter book title...");

  // Handle User input
  useEffect(() => {
    fetchBooks(searchingBy, value);
  }, [value]);

  /* 
    Three Ways of searching for books
    1. Search By Book Title *Default
    2. Search By Author Name
    3. Search By Category
  */
  const fetchBooks = async (searchType = searchingBy, input = value) => {
    setIsLoading(true);
    setSearchingBy(searchType);
    changePlaceholderText(searchType);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchType}:${input}&maxResults=20&key=AIzaSyA6lzrKqOQm40unecZjgOebl-xasZJKwyc`
    );
    const books = await response.json();
    //Handle no search results
    if (books.totalItems === 0) {
      setNoResults(true);
    } else {
      setBooks(books);
      setNoResults(false);
    }
    setIsLoading(false);
  };
  //Initial render search results
  useEffect(() => {
    fetchBooks(searchingBy, "the");
  }, []);

  //Search bar placeholder text
  const changePlaceholderText = (searchType) => {
    if (searchType === "intitle") {
      setPlaceholder("Enter book title...");
    }
    if (searchType === "inauthor") {
      setPlaceholder("Enter author name...");
    }
    if (searchType === "subject") {
      setPlaceholder("Enter book category...");
    }
  };

  //Fetch more information about book selected
  const fetchBookByClick = (bookSelected) => {
    setSingleBook(bookSelected);
  };

  //No search results CLEAR button
  const reset = () => {
    setValue("");
    fetchBooks(searchingBy, "the");
  };
  return (
    <AppContext.Provider
      value={{
        books,
        isLoading,
        fetchBooks,
        fetchBookByClick,
        singleBook,
        setSearchingBy,
        setValue,
        value,
        placeholder,
        noResults,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
