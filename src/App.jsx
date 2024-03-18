import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Courses from "./components/Courses";
import Header from "./components/Header";

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setIsSelectedCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectedCourse = (selectedCourse) => {
    const isSeleceted = selectedCourses.find(
      (selected) => selected.id === selectedCourse.id,
    );
    if (isSeleceted) {
      const afterRemoved = selectedCourses.filter(
        (course) => course.id !== selectedCourse.id,
      );
      setIsSelectedCourses([...afterRemoved]);
    } else {
      setIsSelectedCourses([...selectedCourses, selectedCourse]);
    }
  };

  return (
    <div className="container mx-auto max-w-[1440px] px-[15px] pb-[50px] pt-[25px] lg:px-0 lg:pb-[100px] lg:pt-[50px]">
      <Header></Header>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-3">
          <Courses
            courses={courses}
            handleSelectedCourse={handleSelectedCourse}
          ></Courses>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <Cart selectedCourses={selectedCourses}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
