"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngBoundsLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const europeBounds: LatLngBoundsLiteral = [
  [71, -25],
  [35, 45],
];
let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [20, 33],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const center: LatLngExpression = [46.603354, 1.888334];

export default function DynamicMap({ data }: { data: any }) {
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
        {data?.tour?.[0] && (
          <Marker
            position={[
              data.tour[0].startingPoint.lat,
              data.tour[0].startingPoint.lon,
            ]}
          >
            <Popup>
              {data.tour[0].title || "Aucune description disponible"}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
