"use client";
import Map from "./components/map";

export default function Home() {
  return (
    <div
      className="flex flex-col lg:h-lvh lg:flex-row gap-2 p-4"
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
