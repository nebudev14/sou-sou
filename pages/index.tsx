import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useQuery } from "../hooks/trpc";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const { data: nearbyData } = useQuery([
    "location.get-nearby",
    { address: "Central Park" }
  ])

  console.log(nearbyData)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sage-blue">
      {status === "unauthenticated" ? (
        <>
          <button
            className="px-4 py-3 mb-4 text-2xl text-sage-blue duration-200 bg-baby-pink rounded-xl hover:bg-light-coral hover:text-cream"
            onClick={() => signIn("google")}
          >
            Sign Up!
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl">Welcome, {session?.user?.name}</h1>
          <Link href="/map" className="text-gray-900 hover:text-gray-900 focus:text-gray-900 my-1.5">
            <button
                className="px-4 py-3 my-4 text-2xl text-sage-blue duration-200 bg-baby-pink rounded-xl hover:bg-light-coral hover:text-cream"
              >
                Get Started!
              </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
