import React from 'react';
import ThemeToggle from './components/toggle/ThemeToggle';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import SearchBar from './components/searchBar/SearchBar';

const page = () => {
  return (
    <div className="p-10">
      <Navbar />
      <Hero />
      <SearchBar />
    </div>
  );
};

export default page;
//I'm in resuify-v.1.0 branch