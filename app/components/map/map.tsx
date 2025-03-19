import dynamic from "next/dynamic";
import ButtonSearch from "@/app/components/searchButton";
import NavBar from "@/app/components/navbar";
import { useEffect, useState } from "react";
import { outdoorActiveApi } from "@/app/services/outdoorActiveApi";
import { HikeCard } from "@/app/components/HikeCard";

const DynamicMap = dynamic(() => import("@/app/components/map/dynamicMap"), {
  ssr: false,
});

export default function Map() {
  const [result, setResult] = useState<any[]>([]);
  const [hikeData, setHikeData] = useState<any>();
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedCountryId) {
      fetchGetHikesByCountryId(selectedCountryId);
    }
  }, [selectedCountryId]);

  const fetchGetHikesByCountryId = async (countryId: number) => {
    console.log("selectedCountryId", countryId);

    if (countryId === 1) {
      try {
        const data = await outdoorActiveApi.getHikesInEurope();
        setResult(data);
      } catch (error) {
        console.error("Erreur:", error);
      }
    } else {
      try {
        const data = await outdoorActiveApi.getHikesByCountryId(countryId);
        setResult(data);
      } catch (error) {
        console.error("Erreur:", error);
      }
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
      <NavBar
        onSelectCountry={(country) => setSelectedCountryId(country.id)}
        getRandomHike={getRandomHike}
      />
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
