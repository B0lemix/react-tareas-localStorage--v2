import React, { useState, useContext } from "react";
import { todoContext } from "./context";

const InputToDo = () => {
  const {
    handleSubmit,
    inputTitle,
    setInputDescription,
    setInputTitle,
    inputDescription,
  } = useContext(todoContext);

  return (
    <div>
      <form className=" w-full h-12 flex flex-row   gap-4 justify-around items-center m-12 ">
        <input
          className=" w-2/6 rounded-lg border text-center border-gray-400 p-2  "
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Título"
        />
        <textarea
          className=" w-3/6 rounded-lg border text-center align-middle border-gray-400 p-2"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="Descripción"
        />

        <button
          className="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600  cursor-pointer hover:scale-105 "
          type="submit"
          onClick={handleSubmit}
        >
          Añadir Tarea
        </button>
      </form>
    </div>
  );
};

export default InputToDo;
