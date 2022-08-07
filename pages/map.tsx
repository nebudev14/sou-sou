import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { MapView } from "../components/map";
import { Search } from "../components/search";
import { useQuery } from "../hooks/trpc";

const Map: NextPage = () => {
  const { data: userData } = useSession();

  const { data: groupData } = useQuery([
    "group.get-by-user",
    { id: userData?.user?.id as string }
  ]);

  // groupData?.at(0)?.users.map
  
  return (
    <div className="grid h-screen grid-cols-2 overflow-hidden">
      <div className="flex flex-col items-start justify-start text-center border-r-2 border-black">
        <div className="px-4">
        <Search />
        </div>
        <MapView />
      </div>
      <div className="px-4 py-6 text-center">
        <h1 className="mb-8 text-3xl">YOUR HANGOUTS</h1>
        <div className="grid h-screen grid-rows-2">
          <div className="grid grid-cols-2">
            <div className="border-r-2 border-black ">
              <h1 className="mb-4">GROUPS</h1>
              {groupData?.map((restaurant, i) => (
                <h1 className="text-4xl" key={i}>{restaurant.name}</h1>
              ))}
            </div>
            <div>PEOPLE</div>
          </div>
          <div className="mt-8">PLACES</div>
        </div>
      </div>
    </div>
  );
};

export default Map;
