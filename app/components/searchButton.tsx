export default function ButtonSearch({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
      onClick={onClick}
    >
      Trouve ma Rando
    </button>
  );
}
