"use client";
import React, { useState, useRef, ReactElement } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://france-geojson.gregoiredavid.fr/repo/regions.geojson"; // GeoJSON for France regions

export default function FranceMap () :ReactElement {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, name: "", x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null); // Reference for the map container

  return (
    <div ref={mapContainerRef} style={{ width: "425px", height: "425px", position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000, // Adjust scale for size
          center: [2.5, 46.5] // Center map on France
        }}
        width={350}
        height={350}
        style={{ width: "100%", height: "100%" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isCorsica = geo.properties.nom === "Corse";
              const transform = isCorsica ? "translate(-50, -280) scale(1.2)" : "none";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => setSelectedRegion(geo.properties.nom)}
                  onMouseEnter={(event) => {
                    if (!mapContainerRef.current) return;
                    const bounds = mapContainerRef.current.getBoundingClientRect();
                    setTooltip({
                      visible: true,
                      name: geo.properties.nom,
                      x: event.clientX - bounds.left, // Relative to container
                      y: event.clientY - bounds.top  // Relative to container
                    });
                  }}
                  onMouseLeave={() => setTooltip({ visible: false, name: "", x: 0, y: 0 })}
                  style={{
                    default: { fill: "#0B68A4", outline: "none" },
                    hover: { fill: "#fbac18", outline: "none" },
                    pressed: { fill: "#e76f51", outline: "none" }
                  }}
                  transform={transform} // Move Corsica closer
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip for displaying region names */}
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x + 10, // Offset for visibility
            top: tooltip.y + 10,
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "14px",
            pointerEvents: "none",
            whiteSpace: "nowrap"
          }}>
          {tooltip.name}
        </div>
      )}

      {selectedRegion && <h3 className="text-black">Selected Region: {selectedRegion}</h3>}
    </div>
  );
};
