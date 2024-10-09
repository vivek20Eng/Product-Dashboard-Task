import React from 'react';

const ProductDetailSkeleton = () => {
  return (
    <div className="container mx-auto p-8 mt-12">
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-300 h-[70vh] w-full md:w-1/2 rounded-md mb-4 p-4 "></div> 
        <div className="w-1/2 md:ml-8 mt-4 md:mt-0 flex flex-col space-y-4">
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
