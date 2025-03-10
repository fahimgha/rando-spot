"use client";
import Map from "./components/map/map";

export default function Home() {
  return (
    <div
      className="flex flex-col lg:h-lvh lg:flex-row gap-2"
      style={{
        height: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Map />
    </div>
  );
}
