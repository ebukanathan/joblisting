import React from "react";

function Tab({ tabname, onClick }) {
  return (
    <div className="w-[90px] px-1 rounded-l bg-green-400 m-2 flex justify-between items-center">
      <div className="font-semibold text-md">{tabname}</div>
      <div
        className="text-white hover:bg-white hover:text-black"
        onClick={onClick}
      >
        x
      </div>
    </div>
  );
}

export default Tab;
