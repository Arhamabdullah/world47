"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { useRouter } from "next/navigation";

// === 3D Cube Component (Product Preview) ===
const RotatingCube: React.FC<{ color: string }> = ({ color }) => {
  const meshRef = useRef<any>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.6} />
    </Box>
  );
};

// === Product Card ===
interface Product {
  name: string;
  price: number;
  sizeOptions: string[];
  color: string;
}

const ProductCard: React.FC<Product> = ({ name, price, sizeOptions, color }) => {
  return (
    <div className="group border border-gray-700 rounded-xl p-4 text-center shadow-lg bg-black/50 backdrop-blur-md hover:shadow-2xl hover:border-teal-400 transition-all duration-300">
      <div className="w-full h-56 mb-4 rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} />
          <RotatingCube color={color} />
        </Canvas>
      </div>

      <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition">
        {name}
      </h3>
      <p className="text-gray-400 mb-4">£{price.toFixed(2)}</p>

      <div className="flex justify-center gap-2 mb-4">
        {sizeOptions.map((size) => (
          <button
            key={size}
            className="px-2 py-1 text-sm border border-gray-600 rounded hover:bg-teal-400 hover:text-black transition"
          >
            {size}
          </button>
        ))}
      </div>

      <button className="w-full px-3 py-2 bg-teal-500 text-black font-medium rounded-md hover:bg-white transition">
        Read More
      </button>
    </div>
  );
};

// === Main Shop Page ===
const ShopPage: React.FC = () => {
  const router = useRouter();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(50);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Galaxy sound effect
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/galaxy.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
    if (soundOn) audioRef.current.play();
    else audioRef.current.pause();
  }, [soundOn]);

  // Navbar navigation
  const handleNavClick = (path: string) => {
    router.push(path);
  };

  // Products list
  const products: Product[] = [
    { name: "Long Sleeve Tee", price: 25.0, sizeOptions: ["L", "M", "S"], color: "blue" },
    { name: "V-Neck T-Shirt", price: 10.0, sizeOptions: ["L", "M", "S"], color: "green" },
    { name: "Round Neck Tee", price: 15.0, sizeOptions: ["L", "M", "S"], color: "gray" },
    { name: "Hoodie Classic", price: 30.0, sizeOptions: ["L", "M", "S"], color: "blue" },
    { name: "Sports Jacket", price: 45.0, sizeOptions: ["L", "M", "S"], color: "green" },
    { name: "Graphic Tee", price: 18.0, sizeOptions: ["L", "M", "S"], color: "gray" },
  ];

  // Filter products
  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchColor = selectedColors.length === 0 || selectedColors.includes(p.color);
      const matchPrice = p.price <= maxPrice;
      return matchColor && matchPrice;
    });
  }, [products, selectedColors, maxPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative">
      {/* === Navbar === */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30 text-white text-sm tracking-wide border-b border-gray-700 bg-black/60 backdrop-blur">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick("/")}
        >
          <div className="w-8 h-8 bg-white rounded-full" />
          <span className="font-semibold">OZIRION</span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-3">
          {[
            { label: "Store", path: "/store" },
            { label: "Help", path: "/help" },
            { label: "Shop", path: "/shop" },
          ].map(({ label, path }) => (
            <button
              key={label}
              onClick={() => handleNavClick(path)}
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
            >
              {label.toUpperCase()}
            </button>
          ))}

          <button
            onClick={() => setSoundOn(!soundOn)}
            className="ml-3 opacity-70 hover:opacity-100"
          >
            {soundOn ? "SOUND ON" : "SOUND OFF"}
          </button>
        </div>
      </div>

      {/* === Banner === */}
      <section className="pt-28 pb-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-3 text-teal-400 drop-shadow-md">
          WELCOME TO THE ABNT SHOP
        </h1>
        <p className="text-gray-400 text-base max-w-2xl">
          Explore premium clothing inspired by the world of the ABNT Universe. Discover styles that merge technology, art, and imagination.
        </p>
      </section>

      {/* === Shop Layout === */}
      <div className="p-6 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="md:w-1/6 w-full border border-gray-700 p-4 rounded-xl bg-black/40 backdrop-blur-lg">
          <h4 className="text-lg font-semibold mb-4 text-teal-400 text-center">Filters</h4>

          {/* Color Filter */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-sm">Color</label>
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              {["blue", "green", "gray"].map((color) => (
                <label key={color} className="hover:text-teal-400 transition">
                  <input
                    type="checkbox"
                    className="mr-2 accent-teal-400"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleColor(color)}
                  />
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block mb-2 font-medium text-sm">Max Price</label>
            <input
              type="range"
              min="10"
              max="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full accent-teal-400"
            />
            <span className="text-gray-400 text-xs block mt-1 text-center">
              £10 - £{maxPrice}
            </span>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No products match your filters.
            </p>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm py-6 border-t border-gray-700">
        © 2025 ABNT Universe. All Rights Reserved.
      </footer>
    </div>
  );
};

export default ShopPage;
