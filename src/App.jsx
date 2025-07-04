import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./RTK/Features/TODO/todoSlice";

export default function App() {
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoSlice);
  console.log(todos);

  return (
    <div className="p-10 bg-slate-200 m-5 rounded-md">
      <h1 className="text-6xl font-bold text-center my-5">TODOS</h1>
      <p className="text-center my-5 font-bold">
        Number of TODOS: {todos?.todos?.length}
      </p>
      <div>
        <button
          onClick={() => dispatch(fetchTodos())}
          className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group cursor-pointer"
          type="submit"
        >
          Get TODOS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
          >
            <path
              className="fill-gray-800 group-hover:fill-gray-800"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            />
          </svg>
        </button>
      </div>

      {todos.isLoading && (
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mx-auto my-10" />
      )}

      <div className="grid grid-cols-4 gap-5 my-10">
        {todos.todos.map((todo) => (
          <div className="flex flex-col gap-2 w-full text-[10px] sm:text-xs z-50">
            <div className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
              <div className="flex gap-2">
                <div className="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white">done successfully :)</p>
                  <p className="text-gray-500">
                    This is the description section
                  </p>
                </div>
              </div>
              <button className="text-gray-600 hover:bg-white/5 p-1 rounded-md transition-colors ease-linear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
