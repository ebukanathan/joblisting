import React from "react";

function JobCard({ job, selected, setSelected, setFiltered }) {
  const jobMatches = (job) => {
    return job.languages.some((lang) => selected.includes(lang));
  };

  const HandleSelected = (item) => {
    selected.includes(item)
      ? setSelected((prev) => [...prev])
      : setSelected((prev) => [...prev, item]);

    setFiltered((prev) => (jobMatches(job) ? [...prev, job] : [...prev]));
  };

  return (
    <>
      <div className="w-3/4 border-[0.5px] transition-transform duration-800 ease-in-out border-green-500  px-6 py-4 flex  flex-col md:flex-row justify-between rounded-xl   border-x-green-500 my-3 md:w-full  hover:border-x-green-500  hover:border-l-[10px]  hover:shadow-lg">
        <div className="flex flex-col md:flex-row gap-x-4">
          <div className="w-[100px] h-[100px]">
            <img
              src={job.logo}
              alt=""
              className="w-[100%] h-[100%] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 justify-start items-center">
              <div className="text-sm font-bold">{job.company}</div>
              <div className="flex gap-1">
                {job.new ? (
                  <div className="bg-red-500 rounded-xl text-white font-bold text-md py-[1px] px-[5px]">
                    NEW
                  </div>
                ) : (
                  ""
                )}
                {job.featured ? (
                  <div className="bg-yellow-500 rounded-xl text-white font-bold text-md py-[1px] px-[5px]">
                    FEATURE
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="font-bold text-lg">{job.position}</div>
            <div className="flex justify-between">
              <div className="text-sm font-semibold">{job.position}</div>
              <div className="text-sm font-semibold">{job.postedAt}</div>
              <div className="text-sm font-semibold ">{job.location}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {job.languages?.map((lang, index) => (
            <div
              onClick={() => HandleSelected(lang)}
              key={index}
              className="font-semibold  bg-red-500 text-lg px-3 rounded-lg capitalize"
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
