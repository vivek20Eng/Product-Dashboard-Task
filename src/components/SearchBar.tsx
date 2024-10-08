import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';
import { RootState } from '../store';
import { Search } from 'lucide-react'; 

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.product.searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="relative h-full w-full">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 rounded text-black w-full pl-10" 
      />
      <Search className="absolute left-3 top-2.5 text-gray-500" size={20} /> 
    </div>
  );
};

export default SearchBar;
