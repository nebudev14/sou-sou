import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Nav: React.FC = () => {
  const { data: session } = useSession();
  

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b-2 border-gray-400 bg-golden-yellow">
      <h1 className="text-xl ">{session?.user?.name}</h1>
      <Link href="/" className="text-gray-900 hover:text-gray-900 focus:text-gray-900 my-1.5">
        <img src="/sou-sou logo.png" className="h-14 hover:cursor-pointer" alt="sou-sou logo"/>
      </Link>
      <button onClick={() => signOut()}>
        <BiLogOut className="text-4xl text-red-500 duration-200 hover:text-red-600 " />
      </button>
    </div>
  );
};
