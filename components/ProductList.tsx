import React from 'react';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
        <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
        Popüler Ürünler
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden h-48">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-md ${product.stock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {product.stock ? 'Stokta Var' : 'Tükendi'}
                </span>
              </div>
              <div className="absolute top-2 left-2">
                <span className="px-2 py-1 text-xs font-semibold rounded-md bg-dark-900/80 text-white border border-white/10">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xl font-bold text-white">
                  {product.price.toFixed(2)} <span className="text-sm text-gray-400">₺</span>
                </span>
                <button
                  onClick={() => onAddToCart(product)}
                  disabled={!product.stock}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};