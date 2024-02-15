import { useDispatch } from "react-redux";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  //tamamladın degeri false ise true true ise false ccevir
  const toggleIsdone = () => {
    //Todo oblesinin is_done degerinni tersine cevir
    const updated = { ...todo, is_done: !todo.is_done };

    //store güncelle
    dispatch({
      type: "UPDATE",
      payload: updated,
    });
  };
  return (
    <div className="border shadow shadow-lg p-4 my-5 ">
      <h5>{todo.text} </h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor "}</h6>
      <p>{todo.created_at} </p>
      <button className="btn btn-primary">Düzenle</button>
      {/* Tamamlandı butonuna tıklanınca  */}
      <button onClick={toggleIsdone} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamlandı"}
      </button>
      <button
        onClick={() =>
          dispatch({
            //sil butonuna basınca todonun silinmesi icin
            //emir gönderdik todo silmek
            type: "DELETE",
            payload: todo.id,
          })
        }
        className="btn btn-danger"
      >
        Sil
      </button>
    </div>
  );
};

export default TodoCard;
