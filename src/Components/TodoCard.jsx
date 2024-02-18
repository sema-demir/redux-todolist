import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionTypes } from "../Redux/actionTypes";
import { deleteTodo, updateTodo } from "../Redux/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  //tamamladın degeri false ise true true ise false ccevir
  const toggleIsdone = () => {
    //Todo oblesinin is_done degerinni tersine cevir
    const updated = { ...todo, is_done: !todo.is_done };

    //API daki todo yu güncelle
    axios
      .put(`/todos${updated.id}`, updated)
      .then(() => dispatch(updateTodo(updated)));
  };
  //silme fonksiyonunu tetikler
  const handleDelete = () => {
    //apiden sil
    axios.delete(`/todos/${todo.id}`)
    .then(() => dispatch(deleteTodo(todo.id))

      //sil butonuna basınca todonun silinmesi icin
      //emir gönderdik todo siler
    );
  };
  return (
    <div className="border shadow shadow-lg p-4 my-5 ">
      <h5>{todo.text} </h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor "}</h6>
      <p>{todo.created_at} </p>

      {/* düzenle butonuna tıklanıldıgında İsopen degerini tersine cekmek */}
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Düzenle
      </button>

      {/* Tamamlandı butonuna tıklanınca  */}
      <button onClick={toggleIsdone} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamlandı"}
      </button>

      {/* Sil butonuna tıklayınca todoyo silecek */}
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {/*Düzenle butonuna tıklanınca modal acılması için 
    isopen degeri true ise modal bas */}

      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
