import React from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-6 flex justify-between w-full flex-wrap">
      <h1 className="text-2xl align-middle font-bold w-full md:w-6/12 ">Product Dashboard</h1>
      <div className="flex flex-col sm:flex-row gap-[1rem] md:gap-10 w-full md:w-6/12 h-full">
        <SearchBar />
        <CategoryFilter />
      </div>
    </header>
  );
};

export default Header;