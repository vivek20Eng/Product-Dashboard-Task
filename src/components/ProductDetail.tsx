import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { Product } from '../types';
import ProductDetailSkeleton from './ProductDetailSkeleton'; 

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(Number(id));
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <ProductDetailSkeleton />; 
  if (error) return <div className="grid place-content-center text-red-600 h-[50vh]">Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <div className="flex flex-col md:flex-row mt-8">
        <img src={product.image} alt={product.title} className="h-[70vh] w-full md:w-1/2 object-contain border-2 p-6 border-gray-400/20" loading='lazy'/>
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p className="text-blue-600 font-bold text-xl mb-4">₹{product.price.toFixed(2)}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
