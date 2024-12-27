import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ center, zoom }) {
    return (
        <MapContainer style={{ height: "100vh", width: "100vw" }} center={center} zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />
        </MapContainer>
    );
}

export default MapView;
