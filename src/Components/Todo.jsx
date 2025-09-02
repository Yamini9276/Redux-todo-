import { useDispatch, useSelector } from "react-redux";
import Addform from "./Addform";
import { deleteTask, markDone } from "../features/Todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleDone = (id) => {
    dispatch(markDone(id));
  };

  return (
    <>
      <Addform />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Todos</h1>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "500px", margin: "auto" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <span style={{textDecoration: todo.isDone ? "line-through" : "none"}}>{todo.task}</span> &nbsp;&nbsp;
            <div>
              <button
                onClick={() => handleDone(todo.id)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "none",
                  backgroundColor: "#4caf50",
                  color: "white",
                  borderRadius: "3px",
                  cursor: "pointer"
                }}
              >
                Done
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  backgroundColor: "#f44336",
                  color: "white",
                  borderRadius: "3px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
