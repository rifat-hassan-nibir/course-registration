import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Courses from "./components/Courses";
import Header from "./components/Header";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container mx-auto max-w-[1440px] px-[15px] pb-[50px] pt-[25px] lg:px-0 lg:pb-[100px] lg:pt-[50px]">
      <Header></Header>
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-3">
          <Courses courses={courses}></Courses>
        </div>
        <div className="col-span-1 lg:col-span-1">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
