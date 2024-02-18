import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../Redux/actionTypes";
import { addTodo } from "../Redux/todoActions";
import axios from "axios";

const AddForm = () => {
  // dispacth kurulum
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //sayfanın yenilenmesini engelle
    e.preventDefault();

    //store a kaydedilecek veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };
    //console.log(newTodo);

    //veriyi apiye gönder Api ya veri göndermek
    //için post istegi attım

    axios
      .post("/todos", newTodo)
      // reducera aksiyonu ilet
      .then(() => dispatch(addTodo(newTodo)));

    //formu temizle
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="örn: typescript projesi yap"
        type="text"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
