import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 mr-2 max-w-xl md:min-w-[220px] lg:min-w-[250px] xl:min-w-[350px]">
      <div className="flex items-center text-[#b1b3b8] mb-3">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-[#3a3b3c] cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-[#3a3b3c] cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-[#3a3b3c] cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts source="/user.svg" name="Will Peter" status="Online" />
      <Contacts source="/user.svg" name="John Jones" status="Offline" />
      <Contacts source="/user.svg" name="Phil Madders" status="Online" />
      <Contacts source="/user.svg" name="Peter Parker" status="Online" />
      <Contacts source="/user.svg" name="Jake Walker" status="Online" />
      <Contacts source="/user.svg" name="Boris Hilton" status="Offline" />
      <Contacts source="/user.svg" name="Jodie Monroe" status="Online" />
      <Contacts source="/user.svg" name="Bill Miller" status="Online" />
    </div>
  );
};

export default RightSidebar;
