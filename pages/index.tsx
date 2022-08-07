import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const userData = useSession();

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <button
        className="bg-pink-600 px-4 py-3 rounded-xl text-2xl hover:bg-pink-800 duration-200 mb-4"
        onClick={() => signIn("google")}
      >
        Sign up!
      </button>
      {userData?.data?.user?.name}
    </div>
  );
};

export default Home;
