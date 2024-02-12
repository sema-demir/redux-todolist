const initialState = {
  userİnfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login_user":
      return state;

    case "logout_user":
      return state;

    default:
      return state;
  }
};
export default userReducer;
