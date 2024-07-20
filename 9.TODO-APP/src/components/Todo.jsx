import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import '../App.css'
import { useState } from "react";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editTable, setEditTable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditTable(false);
    }

    return (
        <div className="todo-item">
            <div>
                {
                    editTable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="todo-input" type="text" /> : content
                }
            </div>
            <div>
                <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
                {
                    editTable ? <FaCircleCheck className="todo-icons" onClick={updateTodo} /> : <FaEdit className="todo-icons" onClick={() => setEditTable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo
