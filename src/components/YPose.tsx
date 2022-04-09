import React from "react";

type YPoseProps = {
  ypose: string;
};

const YPose = ({ ypose }: YPoseProps) => {
  return (
    <div className="text-xl shadow-lg rounded-lg min-h-[16rem]">
      <div className="py-4 font-semibold bg-slate-300 rounded-t-lg">
        To catch the pokemon position yourself as
      </div>
      <div className="p-4 h-50 flex items-center text-center">
        <img src={ypose} alt="pose" className="" />
      </div>
    </div>
  );
};

export default YPose;
