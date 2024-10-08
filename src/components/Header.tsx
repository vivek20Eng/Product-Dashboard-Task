import React from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <SearchBar />
        <CategoryFilter />
      </div>
    </header>
  );
};

export default Header;