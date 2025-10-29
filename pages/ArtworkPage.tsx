/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Image, Aperture, Blocks, LucideIcon, Maximize } from "lucide-react";
import Header from "../components/header"; // ✅ Corrected Import Location

/* ----------------------------------
    1. Types & Interfaces
---------------------------------- */

interface ArtPiece {
  id: number;
  name: string;
  category: string;
  price: number;
  shape: "frame" | "sculpture" | "hologram" | string;
}

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface PurchaseStatus {
  id: number | null;
  success: boolean;
  message: string;
}

interface Product3DViewProps {
  shape: string;
  id: number;
}

interface PriceRangeSliderProps {
  minVal: number;
  maxVal: number;
  setMinVal: (val: number) => void;
  setMaxVal: (val: number) => void;
  minGlobal: number;
  maxGlobal: number;
  step: number;
}

/* ----------------------------------
    2. Data & Configuration
---------------------------------- */

const ABN_BALANCE: number = 98.55;
const MAX_PRODUCT_PRICE: number = 50.0;
const MIN_PRODUCT_PRICE: number = 1.0;

const PRODUCT_CATEGORIES: Category[] = [
  { id: "all", name: "All Artworks", icon: Image },
  { id: "abstract", name: "Abstract Glitches", icon: Blocks },
  { id: "generative", name: "Generative Code", icon: Maximize },
  { id: "photography", name: "Neo-Photography", icon: Aperture },
];

const PRODUCTS: ArtPiece[] = [
  { id: 101, name: "Pixel Sunset #47", category: "photography", price: 35.5, shape: "frame" },
  { id: 102, name: "Fractal Core 01", category: "generative", price: 18.99, shape: "sculpture" },
  { id: 103, name: "Neon Labyrinth", category: "abstract", price: 42.0, shape: "hologram" },
  { id: 104, name: "Street Echoes", category: "photography", price: 28.75, shape: "frame" },
  { id: 105, name: "Data Bloom", category: "generative", price: 49.9, shape: "sculpture" },
  { id: 106, name: "Chromatic Void", category: "abstract", price: 15.25, shape: "hologram" },
  { id: 107, name: "Urban Decay Filter", category: "photography", price: 31.0, shape: "frame" },
  { id: 108, name: "Infinite Loop", category: "generative", price: 22.5, shape: "sculpture" },
  { id: 109, name: "The ABN Whisper", category: "abstract", price: 10.99, shape: "hologram" },
];

/* ----------------------------------
    3. Price Range Slider
---------------------------------- */

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  minGlobal,
  maxGlobal,
  step,
}) => {
  const rangeRef = useRef<HTMLDivElement>(null);
  const minPercent = ((minVal - minGlobal) / (maxGlobal - minGlobal)) * 100;
  const maxPercent = ((maxVal - minGlobal) / (maxGlobal - minGlobal)) * 100;

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minPercent, maxPercent]);

  return (
    <div className="relative w-full h-12 flex items-center">
      <div className="absolute h-1 bg-cyan-500 rounded-full" ref={rangeRef} />
      <div className="absolute w-full h-1 bg-cyan-900 rounded-full" />
      <input
        type="range"
        min={minGlobal}
        max={maxGlobal}
        step={step}
        value={minVal}
        onChange={(e) => setMinVal(Math.min(parseFloat(e.target.value), maxVal - step))}
        className="pointer-events-none absolute w-full appearance-none bg-transparent h-1 z-30"
      />
      <input
        type="range"
        min={minGlobal}
        max={maxGlobal}
        step={step}
        value={maxVal}
        onChange={(e) => setMaxVal(Math.max(parseFloat(e.target.value), minVal + step))}
        className="pointer-events-none absolute w-full appearance-none bg-transparent h-1 z-30"
      />
    </div>
  );
};

/* ----------------------------------
    4. Three.js Product 3D View
---------------------------------- */

const createProductModel = (shape: string): THREE.Mesh => {
  let geometry: THREE.BufferGeometry;
  let material: THREE.Material;

  switch (shape) {
    case "frame":
      geometry = new THREE.PlaneGeometry(2.0, 1.5);
      material = new THREE.MeshBasicMaterial({ color: 0x5500aa, side: THREE.DoubleSide });
      break;
    case "sculpture":
      geometry = new THREE.IcosahedronGeometry(1.0, 0);
      material = new THREE.MeshPhongMaterial({
        color: 0xffaa00,
        specular: 0xffffff,
        shininess: 100,
      });
      break;
    case "hologram":
      geometry = new THREE.SphereGeometry(1.2, 32, 32);
      material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      });
      break;
    default:
      geometry = new THREE.BoxGeometry(1, 1, 1);
      material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  }

  return new THREE.Mesh(geometry, material);
};

const Product3DView: React.FC<Product3DViewProps> = ({ shape, id }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1631);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(200, 200);
    renderer.setPixelRatio(window.devicePixelRatio);

    const ambientLight = new THREE.AmbientLight(0x404040, 4);
    const pointLight = new THREE.PointLight(0x00ffff, 6, 100);
    pointLight.position.set(2, 2, 2);
    scene.add(ambientLight, pointLight);

    const model = createProductModel(shape);
    scene.add(model);

    const animate = () => {
      model.rotation.y += 0.01;
      model.rotation.z += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      scene.traverse((object) => {
        if ((object as THREE.Mesh).isMesh) {
          (object as THREE.Mesh).geometry.dispose();
          ((object as THREE.Mesh).material as THREE.Material).dispose();
        }
      });
    };
  }, [shape, id]);

  return (
    <div className="flex justify-center items-center w-full h-48 bg-black/20 rounded-t-xl border-b border-cyan-700/50 relative overflow-hidden">
      <canvas ref={canvasRef} width="200" height="200" className="w-full h-full object-contain" />
    </div>
  );
};

/* ----------------------------------
    5. Main App Component (Header Integrated)
---------------------------------- */

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [abnBalance, setAbnBalance] = useState<number>(ABN_BALANCE);
  const [purchaseStatus, setPurchaseStatus] = useState<PurchaseStatus | null>(null);
  const [minPriceFilter, setMinPriceFilter] = useState<number>(MIN_PRODUCT_PRICE);
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(MAX_PRODUCT_PRICE);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        (selectedCategory === "all" || p.category === selectedCategory) &&
        p.price >= minPriceFilter &&
        p.price <= maxPriceFilter
    );
  }, [selectedCategory, minPriceFilter, maxPriceFilter]);

  const handleBuy = useCallback(
    (product: ArtPiece) => {
      if (abnBalance >= product.price) {
        setAbnBalance((prev) => prev - product.price);
        setPurchaseStatus({
          id: product.id,
          success: true,
          message: `NFT acquired. ${product.price.toFixed(2)} ABN debited.`,
        });
      } else {
        setPurchaseStatus({
          id: product.id,
          success: false,
          message: "Insufficient ABN funds. Cannot bid.",
        });
      }
    },
    [abnBalance]
  );

  useEffect(() => {
    if (purchaseStatus) {
      const timer = setTimeout(() => setPurchaseStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [purchaseStatus]);

  return (
    <div className="relative min-h-screen bg-[#00050a] text-cyan-200 overflow-hidden">
      {/* ✅ Header placed on top of all content */}
      <Header />

      <section className="relative min-h-screen w-full p-6 md:p-12 overflow-y-auto">
        
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"></div>
        <div
          className="absolute inset-0 bg-repeat opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(cyan 1px, transparent 1px), radial-gradient(cyan 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
          }}
        ></div>

        {/* Wallet Info */}
        <div className="flex justify-between items-center border-b border-cyan-500/40 pb-4 mb-8 relative z-10">
          <h1 className="text-3xl font-mono text-[#66fff0]">NEO-KYOTO DIGITAL GALLERY</h1>
          <div className="text-lg font-bold">
            WALLET: <span className="text-2xl text-green-400">{abnBalance.toFixed(2)}</span> ABN
          </div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 flex flex-col lg:flex-row gap-6 p-4 bg-cyan-900/20 rounded-xl shadow-inner border border-cyan-700/50 relative z-10"
        >
          {/* Category Buttons */}
          <nav className="flex flex-wrap gap-3 lg:w-2/3">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono transition ${
                    isActive
                      ? "bg-[#66fff0] text-[#001f3f]"
                      : "border border-cyan-500/50 text-cyan-200 hover:bg-cyan-800/50"
                  }`}
                >
                  <Icon size={16} /> {cat.name}
                </button>
              );
            })}
          </nav>

          {/* Price Filter */}
          <div className="lg:w-1/3 p-2 lg:border-l border-t lg:border-t-0 border-cyan-700/50">
            <p className="text-sm font-mono text-cyan-300 mb-2">
              BID RANGE: {minPriceFilter.toFixed(2)}–{maxPriceFilter.toFixed(2)} ABN
            </p>
            <PriceRangeSlider
              minVal={minPriceFilter}
              maxVal={maxPriceFilter}
              setMinVal={setMinPriceFilter}
              setMaxVal={setMaxPriceFilter}
              minGlobal={MIN_PRODUCT_PRICE}
              maxGlobal={MAX_PRODUCT_PRICE}
              step={0.01}
            />
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
          {filteredProducts.map((p) => (
            <motion.div
              key={p.id}
              className="bg-gray-900/60 rounded-xl border border-cyan-500/50 hover:border-[#66fff0]/80 transition flex flex-col overflow-hidden"
            >
              <Product3DView shape={p.shape} id={p.id} />
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs text-cyan-400 opacity-70 mb-1">{p.category.toUpperCase()}</span>
                <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                <div className="flex justify-between mt-auto pt-3 border-t border-cyan-700/50">
                  <p className="text-2xl text-green-400 font-extrabold">
                    {p.price.toFixed(2)} <span className="text-base text-green-300/70">ABN</span>
                  </p>
                  <motion.button
                    onClick={() => handleBuy(p)}
                    whileTap={{ scale: 0.9 }}
                    disabled={abnBalance < p.price}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold shadow ${
                      abnBalance >= p.price
                        ? "bg-purple-600 hover:bg-purple-500 text-white"
                        : "bg-red-900/50 text-red-300 cursor-not-allowed"
                    }`}
                  >
                    {abnBalance >= p.price ? "MINT NFT" : "WALLET LOW"}
                  </motion.button>
                </div>

                {purchaseStatus && purchaseStatus.id === p.id && (
                  <p
                    className={`mt-2 text-xs text-center font-mono p-1 rounded ${
                      purchaseStatus.success ? "bg-green-900/70 text-green-300" : "bg-red-900/70 text-red-300"
                    }`}
                  >
                    {purchaseStatus.message}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center text-xs opacity-50 font-mono relative z-10">
          *3D models represent digital artifact types. All transactions are final on the ABN ledger.
        </p>
      </section>
    </div>
  );
};

export default App;