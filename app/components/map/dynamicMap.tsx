"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngBoundsLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

// Correction des icônes Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const europeBounds: LatLngBoundsLiteral = [
  [71, -25],
  [35, 45],
];

const center: LatLngExpression = [46.603354, 1.8883335];

interface DynamicMapProps {
  data?: any;
}

export default function DynamicMap({ data }: DynamicMapProps) {
  const [map, setMap] = useState<L.Map | null>(null);

  const handleMarkerClick = () => {
    console.log("zoom location");
  };

  if (!data?.tour?.[0]) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <MapContainer
          style={{ width: "100%", height: "100%" }}
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

  const tour = data.tour[0];

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <MapContainer
        ref={setMap}
        style={{ width: "100%", height: "100%" }}
        className="map"
        center={[tour.startingPoint.lat, tour.startingPoint.lon]}
        zoom={6}
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
        {tour.startingPoint && (
          <>
            {/* Marqueur de départ */}
            <Marker
              position={[tour.startingPoint.lat, tour.startingPoint.lon]}
              icon={L.icon({
                iconUrl:
                  "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
                shadowUrl:
                  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41],
              })}
              eventHandlers={{
                click: handleMarkerClick,
              }}
            ></Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}
