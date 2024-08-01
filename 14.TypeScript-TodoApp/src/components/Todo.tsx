import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps{
  todoProps : TodoType
}

function Todo({todoProps}:TodoProps) {
  const {id,content}=todoProps;
  const dispatch=useDispatch();
  const [editable,setEditable] = useState<boolean>(false);
  const [newTodo,setNewTodo] = useState<string>(content);

  const handleRemoveTodo = ()=>{
    dispatch(removeTodoById(id))
  }

  const handleUpdateTodo = ()=>{
    const payload:TodoType = {
      id : id,
      content : newTodo
    }
    dispatch(updateTodo(payload));
    setEditable(false);
  }

  return (
    <div className="todo">
        {editable ? <input className="new-todo-input" type="text" value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/> : <div>{content}</div>}
        <div>
            <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className="icons"/>
            {editable ? <FaRegCheckCircle className="icons" onClick={handleUpdateTodo}/> : <RiEditCircleLine 
            onClick={()=>setEditable(true)}
            className="icons"/>}
        </div>
    </div>
  )
}

export default Todo