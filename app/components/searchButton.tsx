export default function ButtonSearch({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="p-2 px-4 text-center bg-[#f4ede4]/80 backdrop-blur-sm rounded-lg shadow-lg cursor-pointer hover:bg-[#f4ede4]/90"
      onClick={onClick}
    >
      Trouve ma Rando
    </button>
  );
}
