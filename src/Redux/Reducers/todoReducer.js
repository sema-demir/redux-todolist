const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      //yeni todoyu eskilerin arasına ekle
      const tempTodos = state.todos.concat(action.payload);
      return {
        todos: tempTodos, //state i güncelle
      };

    case "delete_todo":
      return state;

    default:
      return state;
  }
};
export default todoReducer;
