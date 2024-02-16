import { useDispatch } from "react-redux";
import { ActionTypes } from "../Redux/actionTypes";
import { updateTodo } from "../Redux/todoActions";

const Modal = ({ close, todo }) => {
  //dispatch kurulumu yap
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //inputtaki degeri al
    const text = e.target[1].value;

    //todo nesnesinin yeni degerinin atamak için
    const updated = { ...todo, text: text };
    // console.log(updated);

    //store güncelle
    dispatch(updateTodo(updated));

    //modalı kapat
    close();
  };
  return (
    <div className="modal d-block bg-black bg-opacity-50 text-dark">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Todoyu Güncelle</h1>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input
              defaultvalue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              İptal
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
