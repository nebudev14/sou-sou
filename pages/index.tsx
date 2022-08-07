import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const userData = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="px-4 py-3 mb-4 text-2xl text-white duration-200 bg-pink-600 rounded-xl hover:bg-pink-800"
        onClick={() => signIn("google")}
      >
        Sign up!
      </button>
      {userData?.data?.user?.name}
    </div>
  );
};

export default Home;
