import SearchButton from "@/app/components/searchButton";
import { useState } from "react";

// Définition des types
interface Place {
  id: number;
  name: string;
}

interface NavbarProps {
  onSelectCountry?: (country: Place) => void;
  getRandomHike: (countryId?: number) => void; // Ajout de getRandomHike
}

export default function Navbar({
  onSelectCountry,
  getRandomHike,
}: NavbarProps) {
  const [selectedCountry, setSelectedCountry] = useState<Place | null>(null);

  // Liste des pays avec leurs IDs
  const places: Place[] = [
    { id: 1009601, name: "France" },
    { id: 1037953, name: "Suisse" },
    { id: 1022089, name: "Allemagne" },
    { id: 1, name: "Pas de filtre" },
  ];

  // Fonction pour gérer la sélection d'un pays
  const handleCountrySelect = (country: Place): void => {
    setSelectedCountry(country);
    if (onSelectCountry) {
      onSelectCountry(country);
    }
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-[1000]">
      <div className="relative bg-white/90 w-64 rounded-r-lg shadow-lg border-r border-t border-b border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-4 border-b border-gray-100 bg-green-50">
          <h2 className="text-gray-800 font-bold text-left text-xl mb-1">
            Rando spot
          </h2>
          <h3 className="text-gray-700 text-left text-base">
            Sélectionner un pays
          </h3>
        </div>

        <ul className="text-left max-h-64 overflow-y-auto">
          {places.map((place) => (
            <li
              key={place.id}
              className={`px-3 py-1 text-sm hover:bg-green-50 hover:text-green-700 cursor-pointer transition-colors duration-200 flex items-center ${
                selectedCountry && selectedCountry.id === place.id
                  ? "bg-green-100 text-green-700 font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => handleCountrySelect(place)}
            >
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-green-200"></span>
              {place.name}
            </li>
          ))}
        </ul>

        <div className="p-3 border-t border-gray-100 bg-gray-50">
          <SearchButton
            onClick={() => selectedCountry && getRandomHike(selectedCountry.id)}
          />
        </div>
      </div>
    </div>
  );
}
