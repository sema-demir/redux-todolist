import { useDispatch } from "react-redux";
import { v4 } from "uuid";

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

    // reducera aksiyonu ilet
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

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
