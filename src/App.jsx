import React, { useState } from "react";
import data from "../data.json";
import JobCard from "./components/JobCard";
import Tab from "./components/Tab";

function App() {
  const jobs = data;

  const [selected, setSelected] = useState([]);
  // const [filtered, setFiltered] = useState([]);

  const HandleDelete = (n) => {
    selected.filter((tab) => tab !== n);
    setSelected((prev) => prev.filter((tab) => tab !== n));
  };
  const HandleClearList = () => {
    setSelected([]);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.languages.some((skill) => selected.includes(skill)) ||
      job.tools.some((tool) => selected.includes(tool)) ||
      selected.includes(job.level) ||
      selected.includes(job.role)
  );

  return (
    <div className="bg-LightGrayishCyan">
      <div className="h-[23vh] bg-DarkCyan mb-20">
        <img
          src="images/bg-header-desktop.svg"
          alt=""
          className="object-cover object-center"
        />
      </div>
      {selected.length > 0 ? (
        <div className=" h-[15vh] absolute top-[15%] left-[17%]  bg-white w-2/3 mx-auto shadow-lg flex  justify-between items-center px-2">
          <div className="w-[80%] flex flex-wrap">
            {selected.map((item, index) => (
              <Tab
                key={index}
                tabname={item}
                onClick={() => HandleDelete(item)}
              />
            ))}
          </div>
          <div
            className="text-DarkCyan text-md font-semibold capitalize underline cursor-pointer"
            onClick={HandleClearList}
          >
            clear
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-3/4 mx-auto my-2 ">
        {filteredJobs.length > 0
          ? filteredJobs.map((item, index) => (
              <JobCard
                key={index}
                job={item}
                setSelected={setSelected}
                selected={selected}
              />
            ))
          : jobs.map((item, index) => (
              <JobCard
                key={index}
                job={item}
                setSelected={setSelected}
                selected={selected}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
