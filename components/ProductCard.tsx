import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  sizeOptions: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, sizeOptions }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200 shadow-md shadow-black/40">
      <div className="h-40 bg-gray-700 mb-3 flex items-center justify-center rounded">
        <div className="w-12 h-12 bg-green-400 rounded" />
      </div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-md text-gray-300">£{price}</p>
      <div className="flex justify-center gap-2 mt-2">
        {sizeOptions.map((size) => (
          <button key={size} className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-3 py-1 rounded">
            {size}
          </button>
        ))}
      </div>
      <button className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-1 rounded mt-3">
        Read More
      </button>
    </div>
  );
};

export default ProductCard;
