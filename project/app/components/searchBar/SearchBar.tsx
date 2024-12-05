"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Importing a search icon from React Icons

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for search input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Placeholder for future search logic
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery); // Replace with actual search logic later
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark transition-colors duration-300 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 focus-within:ring-2 focus-within:ring-[#9117E1]"
      >
        <div className="flex items-center px-4">
          <FiSearch className="text-gray-500 dark:text-gray-400" size={20} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search components..."
          className="flex-grow px-4 py-4 bg-transparent text-base font-parkinsans focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-4 text-white bg-[#9117E1] rounded-r-lg hover:bg-[#7e0ecb] transition-all font-parkinsans"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
