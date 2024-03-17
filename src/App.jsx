import Cart from "./components/Cart";
import Courses from "./components/Courses";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto max-w-[1440px] pb-[100px] pt-[50px]">
      <Header></Header>
      <div className="grid grid-cols-4 gap-[24px]">
        <div className="col-span-3">
          <Courses></Courses>
        </div>
        <div className="col-span-1">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
