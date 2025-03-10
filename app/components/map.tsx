import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/app/components/dynamicMap"), {
  ssr: false,
});
export default function Map() {
  return (
    <div className="relative">
      <div className="absolute flex justify-center w-full top-4 z-[1000]">
        <button className="p-2 px-4 text-center bg-[#f4ede4]/80 backdrop-blur-sm rounded-lg shadow-lg cursor-pointer">
          Randonnée aléatoire
        </button>
      </div>

      <DynamicMap />
    </div>
  );
}
