// src/components/MapComponent.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Esto es necesario para los estilos de Leaflet

// Componente del mapa
const MapComponent = () => {
  const center = [20.6593, -103.3496]; // Coordenadas de la universidad, cámbialas si es necesario
  const zoom = 16; // Nivel de zoom

  // Definir el icono para el marcador
  const icon = new L.Icon({
    iconUrl: "/MIM_2.png", // Ruta a tu imagen de logo en public/
    iconSize: [40, 40], // Tamaño del icono
    iconAnchor: [20, 40], // Donde se "ancla" el icono
    popupAnchor: [0, -40], // Donde aparece el popup
  });

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "400px" }} // Estilos para el mapa
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Mapa de OpenStreetMap
      />
      <Marker position={center} icon={icon}>
        <Popup>
          Universidad Marista
          <br />
          Ubicación de la universidad.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
