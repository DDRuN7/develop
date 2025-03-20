import { useState } from "react"

function CreatForm({addTodo}) {

    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(content)
        setContent('')
    }

    return (<form className="creat-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="タスクを入力してください" 
        value={content} onChange={(e) => setContent(e.target.value)}/>
        <button type="submit">加入</button>
    </form>)
}


export default CreatForm