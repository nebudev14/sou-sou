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

  //groupData?.at(0)?.users.map
  
  return (
    <div className="grid h-screen grid-cols-2 overflow-hidden">
      <div className="flex flex-col items-start justify-start text-center border-r-2 border-black">
        <div className="px-4">
        <Search />
        </div>
        <MapView />
      </div>
      <div className="px-4 py-6 text-center bg-sage-blue">
        <h1 className="mt-8 mb-8 text-baby-pink text-3xl">YOUR HANGOUTS</h1>
        <div className="grid h-screen grid-rows-2">
          <div className="grid grid-cols-2">
            <div className="border-r-2 border-cream ">
              <h1 className="mb-4 text-golden-yellow text-2xl p-2.5 border-b-2 border-cream">GROUPS</h1>
              {groupData?.map((group, i) => (
                <h1 className="text-p-2 text-4xl text-cream border-b-2 border-cream hover:bg-baby-pinnk hover:text-sage-blue" 
                key={i}>{group.name}</h1>
              ))}
            </div>
            <div>
              <h1 className="mb-4 text-golden-yellow text-2xl p-2.5 border-b-2 border-cream">PEOPLE</h1>
              {groupData?.map((user, i) => (
                <h1 className="text-p-2 text-4xl text-cream border-b-2 border-cream hover:bg-baby-pinnk hover:text-sage-blue" 
                key={i}>{user.name}</h1>
              ))}
            </div>
          </div>
          <div>
            <h1 className="mt-8 text-golden-yellow text-2xl">PLACES</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
