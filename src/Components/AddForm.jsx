import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const AddForm = () => {
  //dispatch kurulum
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    //sayfanın yenilenmesini engelle
    e.preventDefault();

    //Store kaydedilecek veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };
    //console.log(newTodo);
  };
  //reducera aksiyonu ilet

  dispatch({
    type: "ADD_TODO",
    payload: newTodo,
  });

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        type="text"
        placeholder="örn: Redux Calış"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
