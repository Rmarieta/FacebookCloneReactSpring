import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineHome, HiOutlineSearch } from "react-icons/hi";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineShop, AiFillMessage, AiFillBell } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useSession, signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

const Header = () => {
  const { data: session } = useSession();
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = (e) => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      <div className="bg-[#242526] flex items-center p-2 shadow-md top-0 sticky z-50 h-16 border-b-[1px] border-[#3a3b3c]">
        {/* LEFT */}
        <div className="flex min-w-fit pl-3">
          {/* LOGO */}
          <Image
            src="/fb_centered.png"
            alt="FB logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-[#3a3b3c] text-gray-500">
            <HiOutlineSearch className="text-gray-400" size={20} />
            <input
              className="hidden lx:inline-flex bg-transparent focus:outline-none w-[188px]"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        {/* CENTER */}
        <div className="flex flex-grow justify-center mx-2">
          <div className="flex items-center space-x-2">
            <div className="border-b-blue-500 border-b-4">
              <div className="text-blue-500 flex items-center h-14 px-4 md:px-12 rounded-lg  cursor-pointer">
                <HiOutlineHome className="mx-auto" size={25} />
              </div>
            </div>

            <div className="text-[#b9bbbe] flex items-center h-14 px-4 md:px-12 rounded-lg hover:bg-[#3a3b3c] cursor-pointer">
              <RiFlag2Line className="mx-auto" size={25} />
            </div>
            <div className="text-[#b9bbbe] flex items-center h-14 px-4 md:px-12 rounded-lg hover:bg-[#3a3b3c] cursor-pointer">
              <MdOutlineOndemandVideo className="mx-auto" size={25} />
            </div>
            <div className="text-[#b9bbbe] flex items-center h-14 px-4 md:px-12 rounded-lg hover:bg-[#3a3b3c] cursor-pointer">
              <AiOutlineShop className="mx-auto" size={25} />
            </div>
            <div className="text-[#b9bbbe] flex items-center h-14 px-4 md:px-12 rounded-lg hover:bg-[#3a3b3c] cursor-pointer">
              <IoGameControllerOutline className="mx-auto" size={25} />
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="pr-3 flex items-center justify-end min-w-fit space-x-2">
          <CgMenuGridO
            size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-[#3a3b3c] text-[#b9bbbe] rounded-full p-2 cursor-pointer hover:bg-[#4e4f50]"
          />
          <AiFillMessage
            size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-[#3a3b3c] text-[#b9bbbe] rounded-full p-2 cursor-pointer hover:bg-[#4e4f50]"
          />
          <AiFillBell
            size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-[#3a3b3c] text-[#b9bbbe] rounded-full p-2 cursor-pointer hover:bg-[#4e4f50]"
          />
          <MdOutlineExpandMore
            size={20}
            className="hidden lg:inline-flex h-10 w-10 bg-[#3a3b3c] text-[#b9bbbe] rounded-full p-2 cursor-pointer hover:bg-[#4e4f50]"
          />
          <Image
            onClick={toggleLogout}
            alt="User"
            src={session?.user.image}
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
      {showLogout && (
        <div className="z-50 absolute right-0 bg-[#242526] text-white rounded-b-lg border-[#3a3b3c] border-2 border-t-0">
          <div className="flex items-center space-x-5 py-3 px-10 hover:bg-[#3a3b3c] cursor-pointer">
            <Image
              alt="User"
              src={session?.user.image}
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
            <p className=" font-medium">{session?.user.name}</p>
          </div>
          <hr className="w-[90%] mx-auto  text-[#b9bbbe]"></hr>
          <div
            onClick={signOut}
            className="flex items-center space-x-5 py-3 px-10 hover:bg-[#3a3b3c] rounded-b-lg cursor-pointer"
          >
            <TbLogout className="text-[#e7e9ec]" size={40} />
            <p className=" font-medium">Logout</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
