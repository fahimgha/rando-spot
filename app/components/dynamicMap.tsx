"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngBoundsLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";

const europeBounds: LatLngBoundsLiteral = [
  [71, -25],
  [35, 45],
];

const center: LatLngExpression = [46.603354, 1.888334];

export default function DynamicMap() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <MapContainer
        className="map"
        center={center}
        zoom={5}
        minZoom={4}
        maxZoom={20}
        maxBounds={europeBounds}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
