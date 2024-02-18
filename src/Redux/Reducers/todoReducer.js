import { ActionTypes } from "../actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //type ı add todo olan aksiyon tetiklenirse
    case ActionTypes.ADD:
      // yeni todoyu eksilerin arasına ekle
      const tempTodos = state.todos.concat(action.payload);

      // state'i güncelle
      return {
        todos: tempTodos,
      };

    //type delete olan aksiyon tetiklenirse
    case ActionTypes.DELETE:
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);
      //type SET olan aksiyon tetiklenirse
      //state in son degeri
      return {
        todos: filtred,
      };
    case ActionTypes.UPDATE:
      //DİZİDEKİ ESKİ TODO  ile action un payloadıyla gelen todoyo yerdeğiştir
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      //reducerde tutulan todos u günclle
      return { todos: updated };

    //type set olana aksiyon tetiklenirse
    case ActionTypes.SET:
      return { todos: action.payload };

    //varolan state i koru

    default:
      return state;
  }
};

export default todoReducer;
