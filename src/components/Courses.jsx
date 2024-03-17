/* eslint-disable react/prop-types */
import Course from "./Course";

const Courses = ({ courses }) => {
  return (
    <div className="grid gap-[24px] lg:grid-cols-3">
      {courses.map((course, idx) => (
        <Course course={course} key={idx}></Course>
      ))}
    </div>
  );
};

export default Courses;
