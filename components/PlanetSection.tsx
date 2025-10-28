"use client";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import * as THREE from "three";


/* ------------------------------
   LOADER COMPONENT (click-to-start)
   ------------------------------ */
function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = async () => {
    setHasStarted(true);
    const video = videoRef.current;
    const audio = audioRef.current;

    try {
      if (video) {
        video.muted = false;
        await video.play();
      }
      if (audio) {
        await audio.play();
      }
    } catch (err) {
      console.warn("Playback failed:", err);
    }
  };

  const handleVideoEnd = () => {
    // Start fade out
    setIsVisible(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Complete transition after fade duration
    setTimeout(onComplete, 800);
  };

  // Adjusted variants for a dark fade
  const loaderVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      variants={loaderVariants}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/web-loader.mp4"
        playsInline
        onEnded={handleVideoEnd}
      />

      {/* background audio */}
      <audio ref={audioRef} src="/loader-audio.mp3" preload="auto" />

      {/* Click to enter button */}
      {!hasStarted && (
        <motion.button
          onClick={handleStart}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-50 px-10 py-4 text-xl font-semibold tracking-wider text-cyan-300 border border-cyan-500/40 rounded-l bg-black/40 backdrop-blur-lg hover:bg-cyan-500/20 hover:text-cyan-100 transition-all duration-300 pointer-events-auto"
        >
          CLICK TO ENTER{" "}
          <span className="text-cyan-400 font-bold">WORLD 47</span>
        </motion.button>
      )}

      {/* Force a black overlay during fade out */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      {/* Button glow effect */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 16px rgba(0, 255, 255, 0.35);
          }
          50% {
            text-shadow: 0 0 36px rgba(0, 255, 255, 0.9);
          }
        }
        button span {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}
/* ------------------------------
   Types & Animation Variants
   ------------------------------ */
type Band = { name: number; value: number };

const panelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.3, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

/* ------------------------------
   Reusable UI pieces
   ------------------------------ */

const StaggeredBox: React.FC<React.PropsWithChildren<{ className: string }>> = ({ children, className }) => {
  return (
    <motion.div className={`glass-panel ${className}`} variants={panelVariants}>
      <motion.div className="h-full w-full" variants={contentVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------
   THREE.js Shader & Mesh Components
   ------------------------------ */

function NeonGlow({ isDragging }: { isDragging: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const dragColor = useMemo(() => new THREE.Color("#ff00ff"), []);
  const idleColor = useMemo(() => new THREE.Color("#00ffff"), []);
  const glowUniform = useMemo(() => ({ value: idleColor.clone() }), [idleColor]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.elapsedTime;
      const targetColor = isDragging ? dragColor : idleColor;
      const currentColor = materialRef.current.uniforms.glowColor.value as THREE.Color;
      currentColor.lerp(targetColor, 0.05);
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[0.67, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{ time: { value: 0 }, glowColor: glowUniform }}
        vertexShader={`
            varying vec3 vNormal;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            }
        `}
        fragmentShader={`
            uniform float time;
            uniform vec3 glowColor;
            varying vec3 vNormal;
            void main() {
                float falloff = pow(1.0 - dot(vNormal, vec3(0.0,0.0,1.0)), 3.0);
                float coronaPulse = sin(time * 0.8) * 0.2 + 1.0;
                float intensity = pow(falloff * coronaPulse, 3.5);
                vec3 color = glowColor;
                gl_FragColor = vec4(color * intensity, intensity * 0.2);
            }
        `}
        transparent
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function GlobeSphere({ texture, isDragging }: { texture: THREE.Texture | null; isDragging: boolean }) {
  const globeRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (globeRef.current && !isDragging) globeRef.current.rotation.y += 0.0008;
  });

  return (
    <group ref={globeRef}>
      <mesh>
        <sphereGeometry args={[0.62, 64, 64]} />
        {/* <<<<<< CHANGED HERE: use meshBasicMaterial to display true colors (ignores lights) >>>>>> */}
        <meshBasicMaterial map={texture || null} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <NeonGlow isDragging={isDragging} />
    </group>
  );
}

function WindLayer({ texture }: { texture: THREE.Texture | null }) {
  const meshRef = useRef<THREE.Mesh | null>(null);
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.0003;
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.80, 64, 64]} />
      <meshBasicMaterial map={texture} transparent opacity={0.3} side={THREE.DoubleSide} depthWrite={false} />
    </mesh>
  );
}

/* ------------------------------
   Network Mesh
   ------------------------------ */

function NetworkMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const lineOpacity = 0.15;

  const [points] = useState(() =>
    Array.from({ length: 70 }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 2
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.002
      ),
    }))
  );

  const lineGeom = useMemo(() => new THREE.BufferGeometry(), []);

  const material = useMemo(() => {
    const shaderMat = new THREE.ShaderMaterial({
      uniforms: {
        colorLeft: { value: new THREE.Color("#d9d9d9") },
        colorRight: { value: new THREE.Color("#f5f5f5") },
        opacity: { value: lineOpacity },
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 colorLeft;
        uniform vec3 colorRight;
        uniform float opacity;
        varying vec3 vPosition;
        void main() {
          float t = smoothstep(-3.0, 3.0, vPosition.x);
          vec3 c = mix(colorLeft, colorRight, t);
          gl_FragColor = vec4(c, opacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    return shaderMat;
  }, [lineOpacity]);

  useFrame(() => {
    const positions: number[] = [];

    points.forEach((p) => {
      p.position.add(p.velocity);
      ["x", "y", "z"].forEach((axis) => {
        if (Math.abs((p.position as any)[axis]) > 3)
          (p.velocity as any)[axis] *= -1;
      });
    });

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].position.distanceTo(points[j].position);
        if (dist < 1.0) {
          positions.push(
            points[i].position.x,
            points[i].position.y,
            points[i].position.z,
            points[j].position.x,
            points[j].position.y,
            points[j].position.z
          );
        }
      }
    }

    lineGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    lineGeom.computeBoundingSphere();

    if (groupRef.current) groupRef.current.rotation.y += 0.0004;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeom} material={material} />
    </group>
  );
}
/* ------------------------------
   Ticker & Typing Console
   ------------------------------ */

const Ticker = ({ animation }: { animation: { initial: any; animate: any } }) => {
  const tickerText =
    "ALERT: CORE TEMP ELEVATED BY +0.02% | SYSTEM LOG: INTRUSION ATTEMPT BLOCKED | NETWORK TRAFFIC: PEAK UTILIZATION 98.7% | SECTOR 4-B ONLINE | PREPARE FOR DATA SYNCHRONIZATION...";
  const tickerVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } },
    },
  };

  return (
    <motion.div className="absolute bottom-16 left-0 right-0 z-40 h-8 overflow-hidden pointer-events-auto" {...animation}>
      <div className="h-full w-full bg-[#00121a]/30 backdrop-blur-sm border-t border-b border-cyan-500/40 flex items-center">
        <motion.div className="whitespace-nowrap text-sm font-mono tracking-wider opacity-80" variants={tickerVariants} animate="animate">
          <span className="text-[#00ffff] font-bold mr-12">[TICKER]</span>
          {tickerText}
          <span className="text-[#00ffff] font-bold ml-12">[TICKER]</span>
          {tickerText}
        </motion.div>
      </div>
    </motion.div>
  );
};

const TypingConsoleContent = () => {
  const codeLines = [
    "$ user@login: attempting connection to 'World47'",
    "CONNECTION: Status OK. Welcome protocol initiated.",
    "PROTOCOL: Loading community module 'World47.v1.0'",
    "LOG: We're thrilled to have you join our community. ",
    "ACTION: Analyzing user intent (learn, create, connect)...",
    "RESULT: User ready to explore. Use 'help' for guidance.",
    "COMMAND: Jump in, explore, and get started!",
    "LOG: Session 001 established. Time: 23:45:12",
  ];

  const [typedCode, setTypedCode] = useState<string[]>([]);
  const lineIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isTypingRef = useRef(false);

  useEffect(() => {
    if (isTypingRef.current) return;
    isTypingRef.current = true;

    const typeLine = () => {
      if (lineIndexRef.current >= codeLines.length) {
        setTimeout(() => {
          lineIndexRef.current = 0;
          charIndexRef.current = 0;
          setTypedCode([]);
          isTypingRef.current = false;
          typeLine();
        }, 5000);
        return;
      }

      const currentLine = codeLines[lineIndexRef.current];

      if (charIndexRef.current < currentLine.length) {
        setTypedCode((prev) => {
          const newCode = [...prev];
          if (newCode[lineIndexRef.current] === undefined) newCode[lineIndexRef.current] = "";
          newCode[lineIndexRef.current] += currentLine[charIndexRef.current];
          return newCode;
        });
        charIndexRef.current++;
        setTimeout(typeLine, 45 + Math.random() * 60);
      } else {
        lineIndexRef.current++;
        charIndexRef.current = 0;
        setTimeout(typeLine, 1200);
      }
    };

    typeLine();

    return () => {
      isTypingRef.current = false;
    };
  }, []);

  return (
    <div className="p-4 w-64 h-64 font-mono text-xs overflow-hidden flex flex-col justify-end">
      <h3 className="text-xs font-semibold mb-2">NETWORK ACCESS LOG</h3>
      <div className="flex-grow overflow-y-hidden text-cyan-500/80">
        {typedCode.slice(-6).map((line, index) => (
          <div key={index} className={line.startsWith("SHELL") ? "text-green-400" : line.startsWith("ATTEMPT") ? "text-yellow-400" : ""}>
            {line}
            {index === typedCode.slice(-1).length - 1 && charIndexRef.current < codeLines[lineIndexRef.current]?.length && (
              <span className="animate-pulse bg-cyan-500 w-1 h-3 inline-block ml-0.5 align-middle"></span>
            )}
          </div>
        ))}
      </div>
      <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-pulse {
                    animation: pulse 1s infinite;
                }
            `}</style>
    </div>
  );
};

/* ------------------------------
   MAIN APPLICATION
   ------------------------------ */

export default function App(): JSX.Element {
  // Hooks first
  const [isLoaded, setIsLoaded] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // site background audio
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const rafRef = useRef<number | null>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [windTexture, setWindTexture] = useState<THREE.Texture | null>(null);

  // const navPages = [
  //   "World47",
  //   "Community",
  //   "HELP",
  //   "STORE",
  //   "REWARDS",
  //   "SHOP",
  //   "$ABNT CRYPTO",
  //   "APPS",
  //   "VIDEO GAMES",
  //   "Artwork",
  // ];

  const handleSetIsDragging = useCallback((state: boolean) => {
    setIsDragging(state);
  }, []);

  const BANDS_COUNT = 32;
  const [bands, setBands] = useState<Band[]>(
    Array.from({ length: BANDS_COUNT }, (_, i) => ({ name: i, value: 2 }))
  );

  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // load textures
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load("/maa-ki-ankh.png", (tex) => {
      tex.encoding = THREE.sRGBEncoding;
      tex.needsUpdate = true;
      setTexture(tex);
    });
    loader.load("/wind.png", (tex) => {
      tex.encoding = THREE.sRGBEncoding;
      tex.needsUpdate = true;
      setWindTexture(tex);
    });
  }, []);

  // Audio / analyser setup for site audio
  const setupAudio = () => {
    if (!audioRef.current) return;
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(audioRef.current);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    audioCtxRef.current = audioCtx;
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;
  };

  const animateEqualizer = useCallback(() => {
    if (analyserRef.current && dataArrayRef.current) {
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      const step = Math.floor(dataArrayRef.current.length / BANDS_COUNT);

      const newBands: Band[] = Array.from({ length: BANDS_COUNT }, (_, i) => {
        let sum = 0;
        for (let j = 0; j < step; j++) sum += dataArrayRef.current![i * step + j] || 0;
        const averagedValue = sum / step;
        return { name: i, value: averagedValue / 2 };
      });

      setBands((prevBands) =>
        prevBands.map((b, i) => ({ name: i, value: prevBands[i].value * 0.7 + newBands[i].value * 0.3 }))
      );
    }
    rafRef.current = requestAnimationFrame(animateEqualizer);
  }, []);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (audioActive) {
      audioRef.current.pause();
      setAudioActive(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    } else {
      audioRef.current.volume = 0.45;
      audioRef.current.loop = true;
      audioRef.current.play().catch((e) => console.log("Audio play error:", e));
      setAudioActive(true);
      if (!audioCtxRef.current) setupAudio();
      animateEqualizer();
    }
  };

  useEffect(() => {
    if (audioActive) return;
    let id: number;
    const tick = () => {
      setBands(Array.from({ length: BANDS_COUNT }, (_, i) => ({ name: i, value: 2 + Math.abs(Math.sin(Date.now() / 600 + i * 0.8)) * 20 })));
      id = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(id);
  }, [audioActive]);

  const simpleFade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
  };

  // Early return to show loader until complete (all hooks above)
  if (!isLoaded) return <Loader onComplete={handleLoaderComplete} />;

  /* ------------------------------
     MAIN DASHBOARD JSX
     ------------------------------ */
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#00050a] text-cyan-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a599e_0%,_#0a1631_40%,_#211c39_100%)]"></div>

      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 2], fov: 45 }} className="w-full h-full">
          {/* KEEPING YOUR LIGHTS EXACTLY AS IS */}
          <ambientLight intensity={0.8} />
          <pointLight position={[0, 0, 3]} color="#00ffff" intensity={2.2} />
          <pointLight position={[3, 0, 1]} color="#b100ff" intensity={1.6} distance={6} decay={2} />
          <pointLight position={[-3, 0, 1]} color="#0088ff" intensity={1.6} distance={6} decay={2} />
          <NetworkMesh />
          <GlobeSphere texture={texture} isDragging={isDragging} />
          <WindLayer texture={windTexture} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={1.0}
            enableDamping={true}
            dampingFactor={0.1}
            onStart={() => handleSetIsDragging(true)}
            onEnd={() => handleSetIsDragging(false)}
          />
        </Canvas>
      </div>

      {/* Insert external Header component here (header removed from this file) */}
      {/* <Header navPages={navPages} audioActive={audioActive} handleToggle={handleToggle} /> */}

      <div className="absolute inset-0 px-8 flex justify-between items-center z-40 pointer-events-none">
        <motion.div className="flex flex-col gap-4 pointer-events-auto" variants={containerVariants} initial="hidden" animate="visible">
          <StaggeredBox className="p-4 w-64 h-64 flex flex-col">
            <h2 className="text-2xl font-bold mb-2 tracking-wider text-[#66fff0]">ABNT01</h2>
            <div className="flex flex-col justify-start">
              <h3 className="text-sm font-semibold mb-2 mt-2">SYSTEM STATUS</h3>
              <p className="text-sm opacity-80">All systems nominal — monitoring sensors active. Core temperature stable at 72°C.</p>
            </div>
            <div className="mt-2 text-xs flex items-center justify-between opacity-80 border-t border-cyan-500/20 pt-2">
              <span>CPU Utilization</span>
              <span className="text-green-400 font-mono">87.5%</span>
            </div>
          </StaggeredBox>

          <StaggeredBox className="p-4 w-64">
            <h3 className="text-xs font-semibold text-yellow-400">THREAT ASSESSMENT</h3>
            <p className="text-[11px] mt-2 opacity-80">Threat Level: <span className="text-yellow-300">MEDIUM</span>. Proximity: 1.2 AU.</p>
            <div className="mt-3 text-[11px] flex items-center justify-between opacity-80">
              <span>Threat Vector</span>
              <span>Kilo-98</span>
            </div>
          </StaggeredBox>

          <StaggeredBox className="p-3 w-64 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bands}>
                <Bar dataKey="value" fill="#00ffef" isAnimationActive={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 128]} />
              </BarChart>
            </ResponsiveContainer>
          </StaggeredBox>

          <StaggeredBox className="p-3 w-64 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bands}>
                <Line type="monotone" dataKey="value" stroke="#00ffef" strokeWidth={2} dot={false} isAnimationActive={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 128]} />
              </LineChart>
            </ResponsiveContainer>
          </StaggeredBox>

          <StaggeredBox className="p-4 w-64">
            <h3 className="text-xs font-semibold">DATA TRANSFER LOG</h3>
            <p className="text-[11px] mt-2 opacity-80">Last Sync: 21:05:44. Packet Loss: 0.1%</p>
            <div className="mt-3 text-[11px] flex items-center justify-between opacity-80">
              <span>Bandwidth</span>
              <span>1.2 Tb/s</span>
            </div>
          </StaggeredBox>
        </motion.div>

        <motion.div className="flex flex-col gap-4 pointer-events-auto" variants={containerVariants} initial="hidden" animate="visible" transition={{ staggerChildren: 0.15, delayChildren: 1.0 }}>
          <StaggeredBox className="w-64 h-64">
            <TypingConsoleContent />
          </StaggeredBox>

          <StaggeredBox className="p-4 w-64">
            <h3 className="text-xs font-semibold">WEATHER OVERVIEW</h3>
            <p className="text-[11px] mt-2 opacity-80">Atmospheric readings: stable</p>
            <div className="mt-3 text-[11px] flex items-center justify-between opacity-80">
              <span>Pressure</span>
              <span>1012 hPa</span>
            </div>
          </StaggeredBox>

          <StaggeredBox className="p-4 w-64">
            <h3 className="text-xs font-semibold">RESOURCE ALLOCATION</h3>
            <p className="text-[11px] mt-2 opacity-80">Memory Pool: <span className="text-green-300">OPTIMAL</span>. Reserve: 40%</p>
            <div className="mt-3 text-[11px] flex items-center justify-between opacity-80">
              <span>Energy Core</span>
              <span>99%</span>
            </div>
          </StaggeredBox>

          <StaggeredBox className="p-3 w-64 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bands}>
                <Bar dataKey="value" fill="#66fff0" isAnimationActive={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 128]} />
              </BarChart>
            </ResponsiveContainer>
          </StaggeredBox>

          <StaggeredBox className="p-4 w-64">
            <h3 className="text-xs font-semibold">GEO-TELEMETRY</h3>
            <p className="text-[11px] mt-2 opacity-80">Lattice Integrity: 99.9%. Tilt: 0.001°</p>
            <div className="mt-3 text-[11px] flex items-center justify-between opacity-80">
              <span>Target Lock</span>
              <span>Active</span>
            </div>
          </StaggeredBox>
        </motion.div>
      </div>

      <Ticker animation={{ ...simpleFade, transition: { ...simpleFade.animate.transition, delay: 1.8 } }} />

      <motion.div className="absolute bottom-8 left-8 right-8 flex items-center justify-between px-8 z-50 pointer-events-none" {...simpleFade} transition={{ ...simpleFade.animate.transition, delay: 2.0 }}>
        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.95 }} className="glass-panel px-4 py-2 rounded-full pointer-events-auto">1D</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="glass-panel px-4 py-2 rounded-full pointer-events-auto">S/N</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="glass-panel px-4 py-2 rounded-full pointer-events-auto">S/A</motion.button>
        </div>
        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.95 }} className="glass-panel px-4 py-2 rounded-full pointer-events-auto">Views</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="glass-panel px-4 py-2 rounded-full pointer-events-auto">Recalculate</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="glass-panel px-4 py-2 rounded-full pointer-events-auto">N/Waves</motion.button>
        </div>
      </motion.div>

      {/* site background audio element (used by equalizer) */}
      <audio ref={audioRef} src="/sound.mp3" preload="auto" style={{ display: "none" }} />

      <style>{`
            .glass-panel {
                background: rgba(0, 20, 27, 0.4);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 2px solid rgba(0, 255, 255, 0.8);
                box-shadow: 0 0 30px rgba(0, 255, 255, 0.2), 0 6px 15px rgba(0, 0, 0, 0.6);
                border-radius: 12px;
            }
            @media (max-width: 1280px) {
                header nav {
                    display: none;
                }
            }
        `}</style>
    </section>
  );
}
