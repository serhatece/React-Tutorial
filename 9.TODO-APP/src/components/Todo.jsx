import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'


function Todo({ todo }) {

    const { id, content } = todo;

    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
            border: '1px solid lightgray', padding: '10px', marginTop: '10px'
        }}>
            <div>
                {content}
            </div>
            <div>
                <IoIosRemoveCircle className="todo-icons" />
                <FaEdit className="todo-icons" />
            </div>
        </div>
    )
}

export default Todo