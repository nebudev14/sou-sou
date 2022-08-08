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
          <h1 className="text-5xl text-golden-yellow">welcome to sou-sou!</h1>
          <p className="text-cream"> where you'll find "all the places you'll go"</p>
          <button
            className="px-4 py-3 mb-4 mt-6 text-xl text-sage-blue duration-200 bg-baby-pink rounded-xl hover:bg-light-coral hover:text-cream"
            onClick={() => signIn("google")}
          >
            Sign Up!
          </button>
        </>
      ) : (
        <>
          <h1 className="text-5xl text-golden-yellow">{session?.user?.name}, welcome to the party!</h1>
          <p className="text-cream"> where you'll find "all the places you'll go"</p>
          <Link href="/map" className="text-gray-900 hover:text-gray-900 focus:text-gray-900 my-1.5">
            <button
                className="px-4 py-3 mt-6 text-xl text-sage-blue duration-200 bg-baby-pink rounded-xl hover:bg-light-coral hover:text-cream"
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
