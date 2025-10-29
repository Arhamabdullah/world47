// "use client";
// import React, { useRef, useState, useEffect, Suspense, useMemo } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Stars, Html, useProgress } from "@react-three/drei";
// import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
// import * as THREE from "three";
// import { useRouter } from "next/navigation";

// // 🌍 Planet Component (smaller planet)
// function Planet({ planetRef }) {
//   const texture = useMemo(
//     () => new THREE.TextureLoader().load("/textures/moon.jpg"),
//     []
//   );

//   return (
//     <mesh ref={planetRef}>
//       {/* smaller radius from 4 → 2.8 */}
//       <sphereGeometry args={[2.8, 128, 128]} />
//       <meshStandardMaterial
//         map={texture}
//         metalness={0.2}
//         roughness={0.8}
//         emissive={"#555"}
//         emissiveIntensity={0.25}
//       />
//     </mesh>
//   );
// }

// // 🌌 Main 3D Scene
// function HeroScene({ zoomTarget }) {
//   const planetRef = useRef();
//   const { camera } = useThree();

//   useFrame(() => {
//     // rotate planet
//     if (planetRef.current) {
//       planetRef.current.rotation.y += 0.002;
//     }

//     // smooth zoom control (slightly adjusted for new size)
//     const targetZ = zoomTarget ? 2 : 8;
//     camera.position.lerp(new THREE.Vector3(0, 0, targetZ), 0.05);
//     camera.lookAt(0, 0, 0);
//   });

//   return (
//     <>
//       <ambientLight intensity={0.4} />
//       <directionalLight position={[8, 8, 8]} intensity={2.2} />
//       <Planet planetRef={planetRef} />
//       <Stars radius={200} depth={50} count={8000} factor={4} fade />
//       <EffectComposer>
//         <Bloom intensity={1.2} />
//         <Vignette offset={0.2} darkness={0.6} />
//       </EffectComposer>
//     </>
//   );
// }

// // ⏳ Loader
// function Loader() {
//   const { progress } = useProgress();
//   return (
//     <Html center>
//       <div className="text-white text-xl">Loading {Math.floor(progress)}%</div>
//     </Html>
//   );
// }

// // 🪐 Main Page
// export default function Page() {
//   const router = useRouter();
//   const [zoomTarget, setZoomTarget] = useState(false);
//   const [soundOn, setSoundOn] = useState(false);
//   const audioRef = useRef(null);

//   // 🎵 Galaxy sound
//   useEffect(() => {
//     if (!audioRef.current) {
//       audioRef.current = new Audio("/sounds/galaxy.mp3");
//       audioRef.current.loop = true;
//       audioRef.current.volume = 0.4;
//     }
//     if (soundOn) audioRef.current.play();
//     else audioRef.current.pause();
//   }, [soundOn]);

//   // 🌠 Zoom and Navigate
//   const handleNavClick = (path) => {
//     setZoomTarget(true);
//     setTimeout(() => {
//       router.push(path);
//       setZoomTarget(false);
//     }, 1500);
//   };

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-30 text-white text-sm tracking-wide border-b border-gray-700 bg-black/60 backdrop-blur">
//         {/* Logo */}
//         <div
//           className="flex items-center gap-3 cursor-pointer"
//           onClick={() => handleNavClick("/")}
//         >
//           <div className="w-8 h-8 bg-white rounded-full" />
//           <span className="font-semibold">OZIRION</span>
//         </div>

//         {/* Nav Links */}
//         <div className="flex items-center gap-3">
//           {[
//             { label: "Store", path: "/store" },
//           { label: "Help", path: "/help" },
//             { label: "Shop", path: "/shop" },
//           ].map(({ label, path }) => (
//             <button
//               key={label}
//               onClick={() => handleNavClick(path)}
//               className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
//             >
//               {label.toUpperCase()}
//             </button>
//           ))}

//           <button
//             onClick={() => setSoundOn(!soundOn)}
//             className="ml-3 opacity-70 hover:opacity-100"
//           >
//             {soundOn ? "SOUND ON" : "SOUND OFF"}
//           </button>
//         </div>
//       </div>

//       {/* 3D Scene */}
//       <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
//         <Suspense fallback={<Loader />}>
//           <HeroScene zoomTarget={zoomTarget} />
//         </Suspense>
//       </Canvas>

//       {/* Footer Message */}
//       <div className="absolute bottom-10 w-full text-center text-white text-sm opacity-80 select-none">
//         CLICK A TAB TO TRAVEL ↓
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useRef, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Stars, useTexture } from "@react-three/drei";
// import * as THREE from "three";
// import { motion } from "framer-motion";

// // Example country data (simplified)
// const countryData = {
//   Pakistan: { info: "Details about Pakistan" },
//   India: { info: "Details about India" },
//   // ... other countries
// };

// // Helper: convert 3D point to lat/long and find country
// function pointToCountry(point: THREE.Vector3): string | null {
//   // Convert to lat / lon:
//   const { x, y, z } = point;
//   const r = Math.sqrt(x * x + y * y + z * z);
//   const lat = Math.asin(y / r) * (180 / Math.PI);
//   const lon = Math.atan2(z, x) * (180 / Math.PI);
//   // Now you need a geo map (like a shapefile) to match which country that lat/lon falls in
//   // For now, this is dummy:
//   if (lon > 60 && lat > 10) return "Pakistan";
//   if (lon > 70 && lat < 30) return "India";
//   // etc...
//   return null;
// }

// // === Globe component ===
// const Globe = ({ onClickPosition }: { onClickPosition: (point: THREE.Vector3) => void }) => {
//   const globeRef = useRef<THREE.Mesh>(null);
//   const texture = useTexture("/textures/planet1.jpg");

//   useFrame(() => {
//     if (globeRef.current) {
//       globeRef.current.rotation.y += 0.001;
//     }
//   });

//   return (
//     <mesh
//       ref={globeRef}
//       onClick={(e) => {
//         e.stopPropagation();
//         const intersect = e.point; 
//         onClickPosition(intersect.clone());
//       }}
//     >
//       <sphereGeometry args={[1.2, 64, 64]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };

// // === Main Page ===
// export default function Page() {
//   const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
//   const [countryInfo, setCountryInfo] = useState<string | null>(null);

//   const handleClickOnGlobe = (point: THREE.Vector3) => {
//     const country = pointToCountry(point);
//     if (country) {
//       setSelectedCountry(country);
//       setCountryInfo(countryData[country]?.info || "No data");
//     }
//   };

//   return (
//     <div className="relative w-full h-screen bg-black">
//       <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 3, 5]} intensity={1} />
//         <Stars radius={100} depth={50} count={3000} factor={4} fade />
//         <Globe onClickPosition={handleClickOnGlobe} />
//         <OrbitControls enablePan={false} enableZoom={false} />
//       </Canvas>

//       {selectedCountry && (
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute top-1/2 right-10 -translate-y-1/2 bg-black/80 text-white p-6 rounded-lg border border-red-500 shadow-lg backdrop-blur-lg w-80"
//         >
//           <h2 className="text-xl font-bold mb-2">{selectedCountry}</h2>
//           <p className="text-sm">{countryInfo}</p>
//           <button
//             onClick={() => {
//               setSelectedCountry(null);
//               setCountryInfo(null);
//             }}
//             className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition"
//           >
//             Close
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// }
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import React from "react";
import Header from "../components/Header";        // ✅ make sure file name is Header.tsx
import PlanetSection from "../components/PlanetSection";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Header (now imported) */}
      <Header />

      {/* 3D Planet Section */}
      <PlanetSection />
    </main>
  );
}
