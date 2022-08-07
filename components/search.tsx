import { AiOutlineSearch } from "react-icons/ai";

export const Search: React.FC = () => {
  return (
    <div className="absolute z-50 flex flex-row items-center justify-center mt-8">
      <input
        className="p-3 text-xl border border-gray-300 rounded-l-lg shadow-xl outline-none bg-slate-50"
        autoComplete="off"
      />
      <button className="h-full p-3 text-2xl text-white bg-pink-600 rounded-r-lg shadow-xl">
        <AiOutlineSearch />
      </button>
    </div>
  );
};
