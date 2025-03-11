import Image from "next/image";

interface HikeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  distance: number;
  duration: number;
}

export default function HikeCard({
  title,
  description,
  distance,
  duration,
  imageUrl,
}: HikeCardProps) {
  const fullImageUrl = imageUrl
    ? `https://img.oastatic.com/img2/${imageUrl}/max/0.jpg`
    : undefined;

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return (
    <div className="absolute top-20 left-4 z-[1000] w-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        {fullImageUrl ? (
          <img
            src={fullImageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Aucune image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex gap-4 mb-3 text-sm text-gray-600">
          <span>📍 {`${(distance / 1000 || 0).toFixed(1)} km`}</span>
          <span>⏱️ {`${hours}h${minutes} m`}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
