import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
          loading="lazy"
        />
        <h2 className="text-lg font-semibold mb-2 flex-grow truncate">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-blue-600 font-bold">₹{product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default React.memo(ProductCard);