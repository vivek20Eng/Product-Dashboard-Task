import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { getProducts } from '../store/productSlice';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';
import { ShoppingBag } from 'lucide-react'; 

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const skeletonLoaders = useMemo(() => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  ), []);

  const productCards = useMemo(() => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ), [filteredProducts]);

  if (loading) return skeletonLoaders;
  
  if (error) return <div className="grid place-content-center text-red-600 h-[50vh]">Error: {error}</div>;

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 h-[60vh] md:h-[78vh]">
        <ShoppingBag className="mb-2 text-gray-600" size={48} /> 
        <p className="text-gray-600">No items found</p>
      </div>
    );
  }

  return productCards;
};

export default ProductList;