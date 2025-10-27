import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Shirt, Book, Key, LucideIcon } from 'lucide-react';

/* ----------------------------------
    1. Types & Interfaces
---------------------------------- */

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    shape: 'shirt' | 'book' | 'keychain' | string;
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
const MAX_PRODUCT_PRICE: number = 20.00;
const MIN_PRODUCT_PRICE: number = 0.00;

const PRODUCT_CATEGORIES: Category[] = [
    { id: 'all', name: 'All Artifacts', icon: Shirt },
    { id: 'tee-shirts', name: 'Apparel', icon: Shirt },
    { id: 'books', name: 'Digital Media', icon: Book },
    { id: 'keychains', name: 'Utility Gear', icon: Key },
];

const PRODUCTS: Product[] = [
    { id: 1, name: "Data Stream Tee", category: "tee-shirts", price: 12.50, shape: "shirt" },
    { id: 2, name: "World47 Ledger V3", category: "books", price: 8.90, shape: "book" },
    { id: 3, name: "ABN Quantum Keyring", category: "keychains", price: 4.25, shape: "keychain" },
    { id: 4, name: "Glitchware Hoodie", category: "tee-shirts", price: 18.00, shape: "shirt" },
    { id: 5, name: "Code Nexus E-book", category: "books", price: 7.00, shape: "book" },
    { id: 6, name: "Cipher Key Chain", category: "keychains", price: 5.50, shape: "keychain" },
    { id: 7, name: "Neural Network Tee", category: "tee-shirts", price: 13.75, shape: "shirt" },
    { id: 8, name: "The Singularity Report", category: "books", price: 9.99, shape: "book" },
    { id: 9, name: "Vaporwave Charm", category: "keychains", price: 3.90, shape: "keychain" },
];

/* ----------------------------------
    3. Custom Price Range Slider Component
---------------------------------- */

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ minVal, maxVal, setMinVal, setMaxVal, minGlobal, maxGlobal, step }) => {
    const rangeRef = useRef<HTMLDivElement>(null);

    // Calculate the percentage position of min and max values
    const minPercent = ((minVal - minGlobal) / (maxGlobal - minGlobal)) * 100;
    const maxPercent = ((maxVal - minGlobal) / (maxGlobal - minGlobal)) * 100;

    // Apply inline style for the track fill
    useEffect(() => {
        if (rangeRef.current) {
            rangeRef.current.style.left = `${minPercent}%`;
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minPercent, maxPercent]);

    // Handlers
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setMinVal(Math.min(value, maxVal - step)); // Ensure min is always less than max
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setMaxVal(Math.max(value, minVal + step)); // Ensure max is always greater than min
    };

    return (
        <div className="relative w-full h-12 flex items-center">
            {/* Displayed Range (Cyan Fill) */}
            <div className="absolute h-1 bg-cyan-500 rounded-full" ref={rangeRef} />

            {/* Background Track */}
            <div className="absolute w-full h-1 bg-cyan-900 rounded-full" />
            
            {/* Min Price Slider (Must be first for proper z-index stacking) */}
            <input
                type="range"
                min={minGlobal}
                max={maxGlobal}
                step={step}
                value={minVal}
                onChange={handleMinChange}
                className="pointer-events-none absolute w-full appearance-none bg-transparent h-1 z-30"
                style={{
                    // This custom CSS targets the thumb and track for our aesthetic
                    '--thumb-color': 'rgb(0, 255, 255)',
                    '--track-color': 'rgba(0, 0, 0, 0.0)',
                } as React.CSSProperties}
            />

            {/* Max Price Slider */}
            <input
                type="range"
                min={minGlobal}
                max={maxGlobal}
                step={step}
                value={maxVal}
                onChange={handleMaxChange}
                className="pointer-events-none absolute w-full appearance-none bg-transparent h-1 z-30"
                style={{
                    '--thumb-color': 'rgb(0, 255, 255)',
                    '--track-color': 'rgba(0, 0, 0, 0.0)',
                } as React.CSSProperties}
            />

            {/* Custom Range Slider Styles (for cross-browser compatibility and aesthetic) */}
            <style jsx global>{`
                input[type=range] {
                    height: 10px; /* Adjust height for easier clicking */
                    -webkit-appearance: none;
                }
                
                /* Thumb Styles (Cyan Circle with Glow) */
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    pointer-events: all;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: var(--thumb-color, #0ff);
                    cursor: grab;
                    border: 2px solid #00050a;
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 5px rgba(0, 0, 0, 0.5);
                    margin-top: -6px; /* Center with track */
                    transition: transform 0.1s ease;
                }
                
                input[type=range]::-webkit-slider-thumb:active {
                    transform: scale(1.1);
                    cursor: grabbing;
                }

                /* Hide default track */
                input[type=range]::-webkit-slider-runnable-track {
                    background: transparent;
                    height: 1px;
                }

                /* Fix for Firefox */
                input[type=range]::-moz-range-thumb {
                    pointer-events: all;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: var(--thumb-color, #0ff);
                    cursor: grab;
                    border: 2px solid #00050a;
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 5px rgba(0, 0, 0, 0.5);
                }
                input[type=range]::-moz-range-track {
                    background: transparent;
                }
            `}</style>
        </div>
    );
};

/* ----------------------------------
    4. Three.js Component
    (Renders the revolving 3D model)
---------------------------------- */

// Helper to create the 3D geometries based on the product shape
const createProductModel = (shape: string): THREE.Mesh => {
    let geometry: THREE.BufferGeometry;
    let material = new THREE.MeshPhongMaterial({ 
        color: 0x00ffff, 
        specular: 0x66ffcc, 
        shininess: 80,
        wireframe: false,
    });

    switch (shape) {
        case 'shirt':
            geometry = new THREE.BoxGeometry(1.5, 2.0, 0.2);
            material.color.setHex(0x008080); 
            material.shininess = 20;
            break;
        case 'book':
            geometry = new THREE.BoxGeometry(1.8, 1.2, 0.3);
            material.color.setHex(0x5500aa); 
            break;
        case 'keychain':
            geometry = new THREE.TorusKnotGeometry(0.5, 0.15, 60, 10);
            material.color.setHex(0xffaa00); 
            material.specular.setHex(0xffffff); 
            material.shininess = 150;
            break;
        default:
            geometry = new THREE.BoxGeometry(1, 1, 1);
            break;
    }
    
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

const Product3DView: React.FC<Product3DViewProps> = ({ shape, id }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cleanupRef = useRef<{ scene: THREE.Scene | null, renderer: THREE.WebGLRenderer | null, frameId: number | null }>({ scene: null, renderer: null, frameId: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a1631);

        // Camera
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); 
        camera.position.z = 2.5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(200, 200); 
        renderer.setPixelRatio(window.devicePixelRatio);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 4); 
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0x00ffff, 10, 100);
        pointLight.position.set(2, 2, 2);
        scene.add(pointLight);

        // Product Model
        const productModel = createProductModel(shape);
        scene.add(productModel);

        // Animation Loop
        const animate = () => {
            cleanupRef.current.frameId = requestAnimationFrame(animate);

            // Rotation
            productModel.rotation.y += 0.01;
            productModel.rotation.x += 0.005;

            renderer.render(scene, camera);
        };

        animate();

        // Save references for cleanup
        cleanupRef.current.scene = scene;
        cleanupRef.current.renderer = renderer;

        // Cleanup function
        return () => {
            if (cleanupRef.current.frameId !== null) {
                cancelAnimationFrame(cleanupRef.current.frameId);
            }
            if (cleanupRef.current.renderer) {
                cleanupRef.current.renderer.dispose();
            }
            if (cleanupRef.current.scene) {
                 cleanupRef.current.scene.traverse((object) => {
                    if ((object as THREE.Mesh).isMesh) {
                        (object as THREE.Mesh).geometry.dispose();
                        (object as THREE.Mesh).material.dispose();
                    }
                });
            }
        };
    }, [shape, id]);

    return (
        <div className="flex justify-center items-center w-full h-48 bg-black/20 rounded-t-xl border-b border-cyan-700/50 relative overflow-hidden">
            <canvas ref={canvasRef} width="200" height="200" className="w-full h-full object-contain" />
            <div className="absolute inset-0 border-4 border-cyan-500/0 hover:border-cyan-500/20 transition-all duration-300 pointer-events-none" style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.05)' }}></div>
        </div>
    );
};

/* ----------------------------------
    5. Main Store Application
---------------------------------- */

const App: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [abnBalance, setAbnBalance] = useState<number>(ABN_BALANCE);
    const [purchaseStatus, setPurchaseStatus] = useState<PurchaseStatus | null>(null);

    // Price Filter State
    const [minPriceFilter, setMinPriceFilter] = useState<number>(MIN_PRODUCT_PRICE);
    const [maxPriceFilter, setMaxPriceFilter] = useState<number>(MAX_PRODUCT_PRICE);

    // Filter products based on selected category AND price range
    const filteredProducts: Product[] = useMemo(() => {
        return PRODUCTS.filter((p: Product) => {
            const categoryMatch: boolean = selectedCategory === 'all' || p.category === selectedCategory;
            const priceMatch: boolean = p.price >= minPriceFilter && p.price <= maxPriceFilter;
            return categoryMatch && priceMatch;
        });
    }, [selectedCategory, minPriceFilter, maxPriceFilter]);

    // Clear status after a short delay
    useEffect(() => {
        if (purchaseStatus) {
            const timer = setTimeout(() => setPurchaseStatus(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [purchaseStatus]);

    // Handle Buy action (simulated)
    const handleBuy = useCallback((product: Product) => {
        if (abnBalance >= product.price) {
            setAbnBalance(prev => prev - product.price);
            setPurchaseStatus({ id: product.id, success: true, message: `Acquisition successful. ${product.price.toFixed(2)} ABN debited.` });
        } else {
            setPurchaseStatus({ id: product.id, success: false, message: "Insufficient ABN funds. Transaction aborted." });
        }
    }, [abnBalance]);

    // Card styling variants
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section className="relative min-h-screen w-full p-6 md:p-12 overflow-y-auto bg-[#00050a] text-cyan-200">
            {/* Background Consistency (absolute) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"></div>
            <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(cyan 1px, transparent 1px), radial-gradient(cyan 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>
            
            <motion.header 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-12 border-b border-cyan-500/50 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10"
            >
                <h1 className="text-4xl font-mono tracking-wider text-[#66fff0] drop-shadow-lg mb-2 md:mb-0">
                    WORLD47 ARTIFACT EXCHANGE
                </h1>
                <div className="text-lg font-bold">
                    BALANCE: <span className="text-2xl text-green-400">{abnBalance.toFixed(2)}</span> ABN
                </div>
            </motion.header>

            {/* Combined Filtering Panel: Categories + Price */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-10 flex flex-col lg:flex-row gap-6 p-4 bg-cyan-900/20 rounded-xl shadow-inner border border-cyan-700/50 relative z-10"
            >
                {/* 1. Category Filter Navigation (Left Side) */}
                <nav className="flex flex-wrap gap-3 lg:w-2/3">
                    {PRODUCT_CATEGORIES.map((cat: Category) => {
                        const isActive = selectedCategory === cat.id;
                        const Icon = cat.icon;
                        return (
                            <motion.button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-2 px-4 py-2 text-sm font-mono rounded-full transition-all duration-300 ease-in-out
                                    ${isActive 
                                        ? 'bg-[#66fff0] text-[#001f3f] font-bold shadow-cyan' 
                                        : 'bg-transparent text-cyan-200 border border-cyan-500/50 hover:bg-cyan-800/50'
                                    }`}
                            >
                                <Icon size={16} />
                                {cat.name}
                            </motion.button>
                        );
                    })}
                </nav>

                {/* 2. Price Filter (Right Side) */}
                <div className="lg:w-1/3 p-2 lg:border-l border-t lg:border-t-0 border-cyan-700/50 flex flex-col justify-center">
                    <p className="text-sm font-mono tracking-wider text-cyan-300">
                        PRICE RANGE (ABN): <span className="text-white font-bold">{minPriceFilter.toFixed(2)}</span> - <span className="text-white font-bold">{maxPriceFilter.toFixed(2)}</span>
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
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {filteredProducts.map((product: Product) => (
                    <motion.div
                        key={product.id}
                        variants={cardVariants}
                        layout 
                        className="bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-2xl border border-cyan-500/50 hover:border-[#66fff0]/80 transition-all duration-300 flex flex-col overflow-hidden"
                    >
                        {/* 3D Visualizer Area */}
                        <Product3DView shape={product.shape} id={product.id} />

                        {/* Product Details */}
                        <div className="p-4 flex flex-col flex-grow">
                            <span className="text-xs font-mono text-cyan-400 opacity-70 mb-1">{product.category.toUpperCase().replace('-', ' ')}</span>
                            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>

                            {/* Price */}
                            <div className="flex items-end justify-between mt-auto pt-3 border-t border-cyan-700/50">
                                <p className="text-2xl font-mono text-green-400 font-extrabold">
                                    {product.price.toFixed(2)} <span className="text-base font-normal opacity-70">ABN</span>
                                </p>
                                
                                {/* Buy Button */}
                                <motion.button
                                    onClick={() => handleBuy(product)}
                                    whileTap={{ scale: 0.9 }}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg
                                        ${abnBalance >= product.price 
                                            ? 'bg-green-600 hover:bg-green-500 text-white' 
                                            : 'bg-red-900/50 text-red-300 cursor-not-allowed'
                                        }`}
                                    disabled={abnBalance < product.price}
                                >
                                    {abnBalance >= product.price ? 'ACQUIRE' : 'LOCKOUT'}
                                </motion.button>
                            </div>

                             {/* Purchase Status Feedback */}
                            {purchaseStatus && purchaseStatus.id === product.id && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`mt-2 text-xs text-center font-mono p-1 rounded ${purchaseStatus.success ? 'bg-green-900/70 text-green-300' : 'bg-red-900/70 text-red-300'}`}
                                >
                                    {purchaseStatus.message}
                                </motion.p>
                            )}

                        </div>
                    </motion.div>
                ))}
                {filteredProducts.length === 0 && (
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full text-center py-10 text-xl font-mono opacity-50 border-2 border-dashed border-cyan-700/50 rounded-xl"
                    >
                        No artifacts found matching the current filtration parameters.
                    </motion.div>
                )}
            </motion.div>

            {/* Note about 3D */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 text-center text-xs opacity-50 font-mono relative z-10"
            >
                *3D models rendered using Three.js. Artifacts rotate on Y-axis for dimensional inspection.
            </motion.p>
        </section>
    );
};

export default App;
