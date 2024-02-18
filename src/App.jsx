import { useEffect } from "react";
import AddForm from "./Components/AddForm";
import ListTodos from "./Components/ListTodos";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodos } from "./Redux/todoActions";

axios.defaults.baseURL = "http://localhost:3050";

const App = () => {
  //apiden verileri al emri verdik
  const dispatch = useDispatch();
  //apiden todo verilerini al ve store aktar
  useEffect(() => {
    axios.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);
  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          REDUX <span className="text-warning">CRUD</span>
        </h2>

        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
