import React from 'react';

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="border rounded-md p-4 shadow-md animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded-md mb-4"></div> 
      <div className="h-5 bg-gray-300 rounded mb-2 w-full"></div> 
      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div> 
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div> 
    </div>
  );
};

export default ProductCardSkeleton;
