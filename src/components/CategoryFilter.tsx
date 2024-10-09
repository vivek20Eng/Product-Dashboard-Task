import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../store/productSlice';
import { RootState } from '../store';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    return uniqueCategories;
  }, [products]);

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategoryFilter(e.target.value));
  }, [dispatch]);

  return (
    <select
      onChange={handleCategoryChange}
      className="p-2 rounded text-black mt-2 sm:mt-0"
    >
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default React.memo(CategoryFilter);