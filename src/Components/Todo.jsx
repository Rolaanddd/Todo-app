import { useState } from "react";
import Stats from "./Stats";

export default function Todo() {
  const [todo, settodo] = useState({ name: "", done: false });

  const yes = true;
  const [todos, settodos] = useState([]);
  const [total, settotal] = useState(0);
  const [c, setc] = useState(0);

  function click(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
    settotal(total + 1);
  }
  function completed(n) {
    const ar = todos.map((todo) => {
      if (todo.name == n.name) {
        todo.done = !todo.done;
        if (todo.done == true) {
          setc(c + 1);
        } else setc(c - 1);
      } else {
        todo.name;
      }
    });
  }
  function deletet(td) {
    settodos(todos.filter((t) => t != td));
    settotal(total - 1);
    if (c > 0) {
      setc(c - 1);
    }
  }

  return (
    <>
      <div className="min-h-[65vh]">
        <div className="grid grid-cols-1  text-xl gap-10 w-full mb-10 justify-items-center ">
          <form className="mt-8 p-4 flex justify-between w-3/5 shadow-lg border-2">
            <input
              className=" border-none outline-none w-full p-2 "
              onChange={(e) => settodo({ name: e.target.value, done: false })}
              type="text"
              placeholder="add task"
              value={todo.name}
            />
            <input
              className="bg-olive text-lpeach p-3 rounded-md hover:cursor-pointer"
              onClick={(e) => click(e)}
              type="submit"
              value="Add"
            />
          </form>
          <div className="w-1/2 ">
            {todos.map((td) => (
              <div key={td.name} className="shadow-md mb-1 border-2 p-4">
                <div className="flex  justify-between items-center p-2 px-5">
                  <h3
                    onClick={() => completed(td)}
                    className={` w-full hover:cursor-pointer p-3 font-semibold ${
                      td.done ? "line-through" : ""
                    }`}
                  >
                    {td.name}
                  </h3>
                  <button
                    onClick={() => deletet(td)}
                    className="bg-bred px-5 p-2 text-lpeach"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full  h-full bg-babyblue text-lpeach ">
        <Stats total={total} c={c} />
      </div>
    </>
  );
}
