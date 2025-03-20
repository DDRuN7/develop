import { useState } from "react"
import { TbEdit, TbEditOff } from "react-icons/tb"
function EditForm({ todo,editTodo,switchEdit}) {
    const [content, setContent] = useState(todo.content);
    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(todo.id, content)
    }
    return (<form className="edit-form " onSubmit={handleSubmit}>
        <input type="text" placeholder="タスクを入力してください"
            value={content} onChange={(e) => setContent(e.target.value)} />
        <div className="edit">
            <button style={{backgroundColor:'transparent',border:'none',color:'white',cursor: 'pointer',width:'20px',height:'20px'}} type="submit"><TbEdit/></button>
            <button onClick={() => switchEdit(todo.id)} style={{backgroundColor:'transparent',color:'white',border:'none',cursor: 'pointer',marginLeft:'5px',width:'20px',height:'20px'}}><TbEditOff/></button>
        </div>

    </form>)
}

export default EditForm