import { useSelector } from "react-redux";

const ListTodos = () => {
  //store da ilgli verinni tututldugu reducera abone ol
  const state = useSelector((store) => store.todoReducer);

  return (
    <div>
      {state.todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
};

export default ListTodos;
