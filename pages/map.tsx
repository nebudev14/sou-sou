import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { MapView } from "../components/map";
import { Search } from "../components/search";
import { useQuery } from "../hooks/trpc";
import { useAtom } from "jotai";
import {
  addPeopleAtom,
  createGroupAtom,
  selectedGroupAtom,
} from "../server/atoms";
import { CreateGroupModal } from "../components/modals/create-group-modal";
import { BsCheckLg } from "react-icons/Bs";
import { AddUserModal } from "../components/modals/add-people";
import { User, Location } from "@prisma/client";

const Map: NextPage = () => {
  const { data: userData } = useSession();

  const { data: groupData } = useQuery([
    "group.get-by-user",
    { id: userData?.user?.id as string },
  ]);

  const [groupIsOpen, setGroupIsOpen] = useAtom(createGroupAtom);
  const [, setPeopleIsOpen] = useAtom(addPeopleAtom);
  const [selectedGroup, setSelectedGroup] = useAtom(selectedGroupAtom);
  console.log(selectedGroup);

  return (
    <div className="grid h-screen grid-cols-2 overflow-hidden">
      <div className="flex flex-col items-start justify-start text-center border-r-2 border-black">
        <div className="px-4">
          <Search />
        </div>
        <MapView />
      </div>
      <div className="py-6 text-center bg-sage-blue">
        <h1 className="mt-8 mb-8 text-3xl text-baby-pink">YOUR HANGOUTS</h1>
        <div className="grid h-screen grid-rows-2">
          <div className="grid grid-cols-2">
            <div className="mb-4 border-r-2 border-cream ">
              <div className="flex flex-row items-center justify-center border-b-2 border-cream">
                <h1 className=" text-golden-yellow text-2xl mr-4 p-2.5 ">
                  GROUPS
                </h1>
                <button
                  className="px-2.5 py-1.5 text-white rounded-xl bg-golden-yellow"
                  onClick={() => setGroupIsOpen(true)}
                >
                  +
                </button>
              </div>
              {groupData?.map((group, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center py-4 text-2xl duration-200 border-b-2 text-p-2 text-cream border-cream hover:cursor-pointer hover:text-sage-blue hover:bg-baby-pink"
                  onClick={() => setSelectedGroup(group)}
                >
                  <h1 className="mr-6" key={i}>
                    {group.name}
                  </h1>
                  {group === selectedGroup ? (
                    <BsCheckLg className="text-xl" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mb-4 border-r-2 border-cream ">
              <div className="flex flex-row items-center justify-center border-b-2 border-cream">
                <h1 className=" text-golden-yellow text-2xl mr-4 p-2.5 ">
                  PEOPLE
                </h1>
                <button
                  className="px-2.5 py-1.5 text-white rounded-xl bg-golden-yellow"
                  onClick={() => setPeopleIsOpen(true)}
                >
                  +
                </button>
              </div>
              {selectedGroup?.users?.map((user: User, i: any) => (
                <div
                  key={i}
                  className="flex items-center justify-center py-4 text-2xl duration-200 border-b-2 text-p-2 text-cream border-cream hover:cursor-pointer hover:text-sage-blue hover:bg-baby-pink"
                >
                  <h1 className="mr-6" key={i}>
                    {user?.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="mt-8 mb-6 text-2xl text-golden-yellow">PLACES</h1>
            <div className="flex items-center justify-start">
              
            </div>
          </div>
        </div>
      </div>
      <CreateGroupModal />
      <AddUserModal />
    </div>
  );
};

export default Map;
