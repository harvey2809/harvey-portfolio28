import { useState } from "react";

const maps = [
  "/maps/map1.jpg",
  "/maps/map2.jpg",
  "/maps/map3.jpg",
  "/maps/map4.jpg",
];

export default function GISSection() {
  const [activeMap, setActiveMap] = useState<string | null>(null);

  return (
    <section className="gis-section">
      <h2>GIS Mapping</h2>

      <div className="carousel">
        {maps.map((map, index) => (
          <div
            key={index}
            className="map-card"
            onClick={() => setActiveMap(map)}
          >
            <img src={map} alt={`map-${index}`} />
          </div>
        ))}
      </div>

      {activeMap && (
        <div className="modal" onClick={() => setActiveMap(null)}>
          <img src={activeMap} className="modal-img" />
        </div>
      )}
    </section>
  );
}