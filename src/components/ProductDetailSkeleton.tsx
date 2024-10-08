import React from 'react';

const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-300 h-64 w-full md:w-1/2 rounded-md mb-4"></div> 
        <div className="md:ml-8 mt-4 md:mt-0 flex flex-col space-y-4">
          <div className="bg-gray-300 h-8 w-3/4 rounded"></div> 
          <div className="bg-gray-300 h-6 w-1/4 rounded"></div> 
          <div className="bg-gray-300 h-8 w-1/2 rounded"></div> 
          <div className="bg-gray-300 h-16 w-full rounded"></div> 
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
