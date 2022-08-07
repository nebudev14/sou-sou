import { NextPage } from "next";
import { MapView } from "../components/map";

const Map: NextPage = () => {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="text-center border-r-4 border-white">
        <MapView />
      </div>
      <div className="text-center border-r-4 border-white">
        WOOOOO
      </div>
    </div>
  );
}

export default Map;