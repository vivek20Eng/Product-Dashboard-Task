import React from 'react';
import ProductDetail from '../components/ProductDetail';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto p-8">
      <Link to="/" className="flex items-center text-blue-600 hover:underline mb-4">
        <ArrowLeft className="mr-2" size={24} /> 
        Back to Products
      </Link>
      <ProductDetail />
    </div>
  );
};

export default ProductDetailPage;
