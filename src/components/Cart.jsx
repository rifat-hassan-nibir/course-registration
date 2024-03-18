/* eslint-disable react/prop-types */
const Cart = ({ selectedCourses }) => {
  return (
    <div className="col-span-1 rounded-xl bg-white p-[24px]">
      <h3 className="text-[18px] font-bold text-[#2F80ED]">
        Credit Hour Remaining 7 hr
      </h3>
      <hr className="my-[16px]" />
      <h3 className="mb-[21px] text-[20px] font-bold text-[#1C1B1B]">
        Course Name
      </h3>
      <ul className="mb-[20px] text-[14px] text-[#1c1b1b99]">
        {selectedCourses.map((course, idx) => (
          <li key={idx}>
            {idx + 1} {course.name}{" "}
          </li>
        ))}
      </ul>
      <hr className="my-[16px]" />
      <h3 className="text-[16px] font-medium text-[#1c1b1bcc]">
        Total Credit Hour :{" "}
        {selectedCourses.reduce(
          (sum, singleCourse) => sum + singleCourse.credit,
          0,
        )}
      </h3>
      <hr className="my-[16px]" />
      <h3 className="text-[16px] font-semibold text-[#1c1b1bcc]">
        Total Price :{" "}
        {selectedCourses.reduce(
          (sum, singleCourse) => sum + singleCourse.price,
          0,
        )}{" "}
        USD
      </h3>
    </div>
  );
};

export default Cart;
