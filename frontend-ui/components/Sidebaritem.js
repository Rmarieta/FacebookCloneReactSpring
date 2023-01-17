import React from "react";

const Sidebaritem = ({ Icon, value }) => {
  return (
    <div className="flex items-center space-x-2 py-3 pl-5  hover:bg-[#303031] rounded-xl cursor-pointer ">
      {value === "See more" ? (
        <Icon className="h-7 w-7 text-blue-500 bg-[#242526] rounded-full p-1" />
      ) : (
        <Icon className="h-7 w-7 text-blue-500" />
      )}

      <p className="pl-2 hidden sm:inline-flex font-medium">{value}</p>
    </div>
  );
};

export default Sidebaritem;
