import { NextPage } from "next"; 
import { useSession } from "next-auth/react";
import { useQuery } from "../hooks/trpc";

const Userpage: NextPage = () => {
  
  const groups = [
    {
      name: "mcdonalds"
    },
    {
      name: "wendys"
    },
    {
      name: "burgerking"
    },
    {
      name: "askdlfcjml"
    },
    
  ];

  const { data: userData } = useSession();

  const { data: groupData } = useQuery([
    "group.get-by-user",
    { id: userData?.user?.id as string }
  ]);

  
  return (
    <div>
      <div className="h-screen grid grid-cols-2">
        <div className="text-center bg-cream">
          <div>
            <input 
            type="text" 
            className="text-center form-control rounded font-normal mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm  w-1/2 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white" 
            id="address" 
            placeholder="123 Example Street"></input>
          </div>
          <div className="">
            map stuff
          </div>
        </div>

        <div className="text-center bg-sage-blue">
          <h1 className="mt-8 mb-8 text-baby-pink text-3xl">
            YOUR HANGOUTS
          </h1>

          <div className="grid h-screen grid-rows-3">
            <div className="grid grid-cols-2">
              <div className="border-r-2 border-cream">
                <h1 className="text-golden-yellow text-2xl p-2.5">GROUPS</h1>
                {groupData?.map((group, i) => (
                  <h1 className="p-2 text-4xl text-cream border-b-2 border-cream hover:bg-baby-pinnk hover:text-sage-blue" 
                      key={i}>{group.name}</h1>
                ))}
              </div>
              
              <div>
                <h2 className="text-golden-yellow text-2xl">
                PEOPLE
                </h2>
                <div className="grid p-2.5">
                  <div className="text-cream border-b-2 border-t-2 p-2 border-cream">
                    person 1
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-golden-yellow text-2xl">
                PLACES
              </h2>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Userpage;