import React, { useState } from "react";
import data from "../data.json";
import JobCard from "./components/JobCard";
import Tab from "./components/Tab";

function App() {
  const jobs = data;

  const [selected, setSelected] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const HandleDelete = (n) => {
    selected.filter((tab) => tab !== n);

    setSelected((prev) => prev.filter((tab) => tab !== n));
  };

  // const CheckTab = (array) => {
  //   return array.languages.some((tab) => selected.includes(tab));
  // };
  console.log(filtered);
  return (
    <div>
      <div className="bg-cover "></div>
      <div className="flex flex-wrap">
        {selected.map((item, index) => (
          <Tab key={index} tabname={item} onClick={() => HandleDelete(item)} />
        ))}
      </div>
      <div className="w-3/4 mx-auto my-2 ">
        {jobs.map((item, index) => (
          <JobCard
            key={index}
            job={item}
            setSelected={setSelected}
            selected={selected}
            setFiltered={setFiltered}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
