import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';
import { RootState } from '../store';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.product.searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearch}
      className="p-2 rounded text-black"
    />
  );
};

export default SearchBar;