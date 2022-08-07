import { AiOutlineSearch } from "react-icons/ai";
import { selectedAddressAtom } from "../server/atoms";
import { useAtom } from "jotai";
import { useRef } from "react";

export const Search: React.FC = () => {
  const [, setAddress] = useAtom(selectedAddressAtom);
  const addressRef = useRef<HTMLInputElement>(null);

  return (
    <div className="absolute z-50 flex flex-row items-center justify-center mt-8">
      <input
        className="p-3 border border-gray-300 rounded-l-lg shadow-xl outline-none bg-slate-50"
        autoComplete="off"
        ref={addressRef}
      />
      <button
        className="h-full p-3 text-2xl text-white border border-gray-300 rounded-r-lg shadow-xl bg-light-coral"
        onClick={() => {
          setAddress(addressRef?.current?.value as string)
        }}
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};
