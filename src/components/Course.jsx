/* eslint-disable react/prop-types */
import { LuDollarSign } from "react-icons/lu";
import { GoBook } from "react-icons/go";

const Course = ({ course }) => {
  const { photo, name, description, price, credit } = course;
  return (
    <div>
      <div className="flex flex-col justify-between rounded-xl bg-white p-[16px]">
        <div>
          <img src={photo} className="mb-[16px]" alt="" />
          <h3 className="mb-[12px] text-[18px] font-semibold text-[#1C1B1B]">
            {name}
          </h3>
          <p className="mb-[16px] text-[14px] font-normal text-[#1c1b1b99]">
            {description}
          </p>
          <div className="mb-[24px] flex justify-between">
            <div className="flex items-center gap-[12px]">
              <LuDollarSign className="text-[24px]" />
              <p className="text-[16px] font-medium text-[#1c1b1b99]">
                Price : {price}
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <GoBook className="text-[24px]" />
              <p className="text-[16px] font-medium text-[#1c1b1b99]">
                Credit : {credit} hr
              </p>
            </div>
          </div>
        </div>
        <button className="rounded-lg bg-[#2F80ED] py-[9px] text-[18px] font-semibold text-white">
          Select
        </button>
      </div>
    </div>
  );
};

export default Course;
