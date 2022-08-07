import { NextPage } from "next";
import { MapView } from "../components/map";

const Map: NextPage = () => {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="text-center border-r-4 border-white">
        <MapView />
      </div>
      <div className="px-4 py-6 text-center border-r-4 border-white">
        <h1 className="mb-8 text-3xl">YOUR HANGOUTS</h1>
        <div className="grid h-screen grid-rows-2">
          <div className="grid grid-cols-2">
            <div className="border-r-2 border-black ">GROUPS</div>
            <div>PEOPLE</div>
          </div>
          <div className="mt-8">PLACES</div>
        </div>
      </div>
    </div>
  );
};

export default Map;
