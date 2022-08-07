import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export const Nav: React.FC = () => {
  const { data: session } = useSession();
  
  return (
    <div className="flex items-center px-6 py-3 border-b-2 border-gray-400">
      <h1 className="mr-auto text-xl">{session?.user?.name}</h1>
      <button onClick={() => signOut()}>
      <BiLogOut className="text-4xl text-red-500 duration-200 hover:text-red-600 " />
      </button>
    </div>
  );
}