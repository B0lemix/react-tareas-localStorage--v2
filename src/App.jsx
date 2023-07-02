import "./App.css";
import InputToDo from "./components/InputToDo";
import ToDo from "./components/ToDo";

function App() {
  return (
    <>
      <div className="bg-gray-200 w-full md:px-0 h-screen flex items-center justify-center">
        <div className="  bg-[#F4F5FA] w-11/12 h-5/6 border border-gray-200  flex flex-col items-center  justify-center px-4 md:px-8 lg:px-24 rounded-xl shadow-2xl">
          <div className=" text-center ">
            <h1 className="p-4 ml-8 font-semibold text-5xl">Tareas</h1>

            <InputToDo />
            <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          </div>
          <div className="relative w-full flex flex-col  items-center text-center overflow-auto ">
            <ToDo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
