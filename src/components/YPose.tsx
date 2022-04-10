import React from "react";

type YPoseProps = {
  ypose: string;
};

const YPose = ({ ypose }: YPoseProps) => {
  return (
    <div className="text-xl shadow-lg rounded-lg min-h-[22rem] max-h-[22rem]">
      <div className="py-4 font-semibold bg-slate-300 rounded-t-lg">
        Yoga Position
      </div>
      <div className="p-4 h-50 flex items-center text-center">
        <img src={ypose} alt="pose" className="max-h-[16rem]" />
      </div>
    </div>
  );
};

export default YPose;
