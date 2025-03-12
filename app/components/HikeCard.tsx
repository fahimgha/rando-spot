import Image from "next/image";

interface HikeCardProps {
  title: string;
  // description: string;
  imageUrl: string;
  distance: number;
  duration: number;
}

export const HikeCard = ({
  title,
  // description,
  distance,
  duration,
  imageUrl,
}: HikeCardProps) => {
  const fullImageUrl = imageUrl
    ? `https://img.oastatic.com/img2/${imageUrl}/max/0.jpg`
    : undefined;

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2  z-[1000] w-[500px]  bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative flex flex-row items-center m-1 h-full w-full">
        {/* Conteneur de l'image avec taille fixe */}
        <div className="relative w-[150px] h-[100px] flex items-center justify-center">
          {fullImageUrl ? (
            <Image
              src={fullImageUrl}
              alt={title}
              width={150}
              height={100}
              className="rounded object-cover w-[150px] h-[100px]"
            />
          ) : (
            <div className="w-[150px] h-[100px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Aucune image</span>
            </div>
          )}
        </div>

        {/* Conteneur du texte */}
        <div className="relative flex-1 px-3 h-full flex flex-col">
          <h2 className="text-lg text-black font-bold mb-1">{title}</h2>
          <div className="flex gap-4 text-xs text-black/90">
            <span>📍 {`${(distance / 1000 || 0).toFixed(1)} km`}</span>
            <span>⏱️ {`${hours}h${minutes} m`}</span>
          </div>
          {/* <p className="text-sm text-black/90">{description}</p> */}
        </div>
      </div>
    </div>
  );
};
