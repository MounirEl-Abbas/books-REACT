import React from "react";
import { FaSearch } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { fetchBooks, placeholder, setValue, value } = useGlobalContext();

  return (
    <aside className="navbar-container">
      <div className="input-field-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="dropdown">
        Search By <GoChevronRight className="chevron-icon" />
        <div className="panel">
          <button onClick={() => fetchBooks("intitle")}>Book Title</button>
          <button onClick={() => fetchBooks("inauthor")}>Author</button>
          <button onClick={() => fetchBooks("subject")}>Category</button>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
