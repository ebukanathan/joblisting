import React from "react";

function JobCard({ job, selected, setSelected, setFiltered }) {
  const jobMatches = (job) => {
    return job.languages.some((lang) => selected.includes(lang));
  };

  const HandleSelected = (item) => {
    selected.includes(item)
      ? setSelected((prev) => [...prev])
      : setSelected((prev) => [...prev, item]);

    // setFiltered((prev) => (jobMatches(job) ? [...prev, job] : [...prev]));
  };

  return (
    <>
      <div className="bg-white mb-10 divide-y-2  gap-y-2 shadow-xl px-6 py-4 flex  flex-col  items-start md:flex-row justify-between rounded-xl   border-x-green-500 my-6 md:w-full  md:divide-y-0 hover:border-x-DarkCyan  hover:border-l-[10px]  hover:shadow-lg">
        <div className="flex flex-col md:flex-row gap-x-4">
          <div className="w-[50px] h-[50px] -mt-10 mb-4 md:w-[100px] md:h-[100px] md:mt-0">
            <img
              src={job.logo}
              alt=""
              className="w-[100%] h-[100%] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 justify-start items-center">
              <div className="text-DarkCyan text-sm font-bold">
                {job.company}
              </div>
              <div className="flex gap-1">
                {job.new ? (
                  <div className="bg-DarkCyan rounded-xl text-white font-semibold text-sm py-[1px] px-[5px]">
                    NEW
                  </div>
                ) : (
                  ""
                )}
                {job.featured ? (
                  <div className="bg-black rounded-xl text-white font-semibold text-sm py-[1px] px-[5px]">
                    FEATURE
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="text-DarkGrayishCyan font-bold text-lg">
              {job.position}
            </div>
            <div className="flex justify-between text-DarkGrayishCyan">
              <div className="text-sm font-semibold">{job.postedAt}</div>
              <div className="text-sm font-semibold">{job.contract}</div>
              <div className="text-sm font-semibold ">{job.location}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 ">
          {
            <div
              onClick={() => HandleSelected(job.role)}
              className="text-DarkCyan  m-2 bg-[#effafa] hover:bg-DarkCyan hover:text-white  cursor-pointer font-semibold  text-lg px-3 rounded-lg capitalize"
            >
              {job.role}
            </div>
          }
          {
            <div
              onClick={() => HandleSelected(job.level)}
              className="text-DarkCyan bg-[#effafa] hover:bg-DarkCyan hover:text-white  cursor-pointer font-semibold  bg-red-500 text-lg px-3 rounded-lg capitalize"
            >
              {job.level}
            </div>
          }
          {job.languages?.map((lang, index) => (
            <div
              onClick={() => HandleSelected(lang)}
              key={index}
              className="text-DarkCyan bg-[#effafa] hover:bg-DarkCyan hover:text-white  cursor-pointer font-semibold  bg-red-500 text-lg px-3 rounded-lg capitalize"
            >
              {lang}
            </div>
          ))}
          {job.tools?.map((lang, index) => (
            <div
              onClick={() => HandleSelected(lang)}
              key={index}
              className="text-DarkCyan bg-[#effafa] hover:bg-DarkCyan hover:text-white  cursor-pointer font-semibold  bg-red-500 text-lg px-3 rounded-lg capitalize"
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default JobCard;
