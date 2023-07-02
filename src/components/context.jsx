import { createContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const todoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTitle.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Math.round(Math.random() * 200),
          title: inputTitle,
          desc: inputDescription,
        },
      ]);

      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todos,
          {
            id: Math.random(),
            title: inputTitle,
            desc: inputDescription,
          },
        ])
      );
      setInputTitle("");
      setInputDescription("");
      toast.success("Tarea creada !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Inserte un título para crear la tarea", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleDelete = (e) => {
    const newTodos = todos.filter((todo) => todo.id !== e.id);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(newTodos);

    toast.warn("Tarea eliminada !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleDeleteAll = () => {
    localStorage.setItem("todos", JSON.stringify([]));
    setTodos([]);
    toast.info("Todas las tareas eliminadas !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        setTodos,
        handleDelete,
        handleDeleteAll,
        handleSubmit,
        inputTitle,
        setInputTitle,
        inputDescription,
        setInputDescription,
      }}
    >
      <ToastContainer />
      {children}
    </todoContext.Provider>
  );
}
