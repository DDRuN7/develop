import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditForm from "./EditForm"; 
function Todo({ todo, deletTodo, switchCompleted, switchEdit,editTodo }) {
    return (todo.isEdit ? <EditForm todo={todo} editTodo={editTodo} switchEdit={switchEdit} /> : <div className={`todo  ${todo.isCompleted ? 'completed' : ''}`}>
        <p onClick={() => switchCompleted(todo.id)}>{todo.content}</p>
        <div>
            <MdEdit onClick={() => switchEdit(todo.id)} style={{ cursor: 'pointer' }} />
            <MdDeleteOutline onClick={() => deletTodo(todo.id)}
                style={{ cursor: 'pointer', marginLeft: '5px' }} />
        </div>

    </div>)
}


export default Todo