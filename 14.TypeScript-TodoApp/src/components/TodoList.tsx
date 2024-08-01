import { useDispatch, useSelector } from "react-redux"
import Todo from "./Todo"
import { RootState } from "../redux/store"
import { TodoType } from "../types/Types"
import { loadTodos } from '../redux/todoSlice';
import { useEffect } from "react";

function TodoList() {
  const {todos} = useSelector((state:RootState)=>state.todo)
  const dispatch = useDispatch();

  useEffect(() => {
    // LocalStorage'dan todo'ları yükle
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      dispatch(loadTodos(JSON.parse(storedTodos)));
    }
  }, [dispatch]);

  useEffect(() => {
    // Todo'ları LocalStorage'a kaydet
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div>
        {todos && todos.map((todo:TodoType)=>(
        <Todo key={todo.id} todoProps = {todo}/>
        ))}
    </div>
  )
}

export default TodoList