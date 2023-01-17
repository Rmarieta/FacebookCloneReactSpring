import React from "react";
import Image from "next/image";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import Sidebaritem from "./Sidebaritem";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden lg:inline-flex flex-col py-2 px-2 max-w-xl lg:min-w-[302px] bg-[#18191a] text-[#e4e6ea]">
      <div className="flex items-center space-x-3 py-3 pl-4  hover:bg-[#303031] rounded-xl cursor-pointer">
        <Image
          src={session?.user.image}
          alt="User"
          width={35}
          height={35}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>

      <Sidebaritem Icon={ImUsers} value="Friends" />
      <Sidebaritem Icon={MdGroups} value="Groups" />
      <Sidebaritem Icon={AiOutlineShop} value="Marketlace" />
      <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch" />
      <Sidebaritem Icon={BsStopwatch} value="Memories" />
      <Sidebaritem Icon={MdOutlineExpandMore} value="See more" />
    </div>
  );
};

export default Sidebar;
