import { useContext } from "react";
import Card from "./Card";
import { todoContext } from "./context";

const ToDo = () => {
  const { todos, handleDeleteAll, handleDelete } = useContext(todoContext);

  return (
    <div>
      <ul className="  relative w-full grid grid-flow-row grid-cols-4 gap-24">
        {todos.map((todo) => (
          <Card key={todo.id} handleDelete={handleDelete} todo={todo} />
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="mt-32 p-4 flex justify-center">
          <button
            onClick={handleDeleteAll}
            className=" bg-slate-900 text-white px-4 rounded-full py-3 hover:scale-110 transition-all duration-200 ease-out hover:bg-red-600"
          >
            Borrar todas las tareas
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
