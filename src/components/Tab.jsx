import React from "react";

function Tab({ tabname, onClick }) {
  return (
    <div className="relative w-[100px] md:w-[125px] px-1 py-1  rounded-lg  bg-LightGrayishCyan text-DarkCyan m-2 flex gap-2 justify-between items-center">
      <div className=" text-sm font-semibold md:text-lg">{tabname}</div>
      <div
        className="absolute rounded-r-lg font-bold text-xl flex items-center  h-[100%] right-0  px-2 bg-DarkCyan text-white hover:bg-VeryDarkGrayishCyan cursor-pointer"
        onClick={onClick}
      >
        X
      </div>
    </div>
  );
}

export default Tab;
