import Image from "next/image";
import React from "react";

const Contacts = ({ name, source, status }) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-2 hover:bg-[#303031] rounded-lg">
      <Image
        src={source}
        alt="Contact"
        height={35}
        width={35}
        className="cursor-pointer rounded-full"
      />
      {status === "Online" ? (
        <div className="bg-green-500 h-3 w-3 rounded-full relative top-3 right-5 border-2"></div>
      ) : (
        <div className="transparent h-3 w-3 rounded-full relative top-3 right-5 border-none"></div>
      )}

      <p className="hidden sm:inline-flex font-medium relative right-4">
        {name}
      </p>
    </div>
  );
};

export default Contacts;
