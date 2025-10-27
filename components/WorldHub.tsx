"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function WorldHub() {
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-sm border-b border-cyan-500 z-10">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-widest">WORLD 47</h1>
        <nav className="space-x-6 text-gray-300">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">About</a>
          <a href="#" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
      </header>

      {/* World Map Rectangle Container */}
      <div className="relative w-[90vw] h-[60vh] border-4 border-cyan-500 rounded-2xl shadow-[0_0_30px_#00ffff] overflow-hidden flex items-center justify-center mt-20">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 155,
          }}
          width={900}
          height={450}
          style={{
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at center, #00152e, #000)",
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const name = geo.properties.name || "Unknown";
                    const tooltip = document.getElementById("country-name");
                    if (tooltip) tooltip.innerText = name;
                  }}
                  onMouseLeave={() => {
                    const tooltip = document.getElementById("country-name");
                    if (tooltip) tooltip.innerText = "";
                  }}
                  style={{
                    default: {
                      fill: "#003366", // inner deep blue
                      stroke: "#00ffff", // neon cyan border
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#2563eb", // bright blue hover
                      stroke: "#00ffff",
                      strokeWidth: 0.8,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>

        {/* Tooltip */}
        <div
          id="country-name"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-cyan-400 font-semibold text-lg pointer-events-none"
        ></div>
      </div>
    </section>
  );
}
