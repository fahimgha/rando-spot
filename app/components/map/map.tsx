import dynamic from "next/dynamic";
import ButtonSearch from "@/app/components/searchButton";
import { useEffect, useState } from "react";
import { outdoorActiveApi } from "@/app/services/outdoorActiveApi";
import { HikeCard } from "@/app/components/HikeCard";
const DynamicMap = dynamic(() => import("@/app/components/map/dynamicMap"), {
  ssr: false,
});
export default function Map() {
  const [result, setResult] = useState<string[]>([]);
  const [hikeData, setHikeData] = useState<any>();

  useEffect(() => {
    fetchGetHikesByCountryId();
  }, []);

  const fetchGetHikesByCountryId = async () => {
    try {
      const data = await outdoorActiveApi.getHikesByCountryId("1009601");
      setResult(data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const getRandomHike = async () => {
    try {
      const randomId = result[Math.floor(Math.random() * result.length)];
      const data = await outdoorActiveApi.getHikeById(randomId);
      setHikeData(data);
      console.log("data", data);
    } catch (error) {
      console.error("Erreur lors de la récupération de la randonnée:", error);
    }
  };

  return (
    <div className="relative">
      <div className="absolute flex  top-4 left-1/2 transform -translate-x-1/2  z-[1000]">
        <ButtonSearch onClick={getRandomHike} />
      </div>
      {hikeData && hikeData.tour[0] ? (
        <div className="flex flex-col gap-4">
          <HikeCard
            title={hikeData.tour[0].title}
            // description={hikeData.tour[0]?.shortText}
            imageUrl={hikeData.tour[0].primaryImage.id}
            distance={hikeData.tour[0].length}
            duration={hikeData.tour[0].time.min}
          />
        </div>
      ) : (
        <p className="absolute text-center text-white">Loading...</p>
      )}
      <DynamicMap data={hikeData} />
    </div>
  );
}
