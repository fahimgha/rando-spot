import Image from "next/image";

interface HikeCardProps {
  title: string;
  description: string;
  difficulty: number;
  imageUrl?: string;
  distance?: string;
  duration?: string;
  elevation?: string;
}
export default function HikeCard({
  title,
  description,
  difficulty,
}: HikeCardProps) {
  return (
    <div className="absolute w-1/5 top-28 left-4 z-[1000] bg-[#f4ede4]/80 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="relative h-48 rounded-t-lg overflow-hidden">
        {/* <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-opacity duration-300"
        /> */}
        <div className="absolute top-2 right-2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Difficulté: {difficulty}/5
          </span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {/* <div className="flex gap-4 mb-3 text-sm text-gray-600">
          <span>📍 {distance}</span>
          <span>⏱️ {duration}</span>
          <span>📈 {elevation}</span>
        </div> */}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
