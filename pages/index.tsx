import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useQuery } from "../hooks/trpc";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const { data: locationData } = useQuery([
    "location.get-nearby",
    { address: "" }
  ]);
  
  console.log(locationData)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {status === "unauthenticated" ? (
        <>
          <button
            className="px-4 py-3 mb-4 text-2xl text-white duration-200 bg-pink-600 rounded-xl hover:bg-pink-800"
            onClick={() => signIn("google")}
          >
            Sign up!
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl">Welcome, {session?.user?.name}</h1>
        </>
      )}
    </div>
  );
};

export default Home;
