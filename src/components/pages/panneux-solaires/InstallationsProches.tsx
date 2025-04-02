"use client";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://france-geojson.gregoiredavid.fr/repo/regions.geojson"; // GeoJSON for France regions

const FranceMap = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);

    return (
        <div style={{ width: "100%", height: "80vh" }}> 
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000, // Decrease scale to make the map smaller
                    center: [2.5, 46.5], // Center map on France
                }}
                width={600} // Adjust map width
                height={500} // Adjust map height
                style={{ width: "100%", height: "100%" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            // Adjust position of Corsica and other territories
                            const isCorsica = geo.properties.nom === "Corse";
                            const transform = isCorsica ? "translate(-50, -300) scale(1.2)" : "none";

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => setSelectedRegion(geo.properties.nom)}
                                    style={{
                                        default: { fill: "#2c6fed", outline: "none" },
                                        hover: { fill: "#f4a261", outline: "none" },
                                        pressed: { fill: "#e76f51", outline: "none" },
                                    }}
                                    transform={transform} // Apply transformation
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
            {selectedRegion && <h3>Selected Region: {selectedRegion}</h3>}
        </div>
    );
};

export default FranceMap;
