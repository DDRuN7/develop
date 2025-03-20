import { useState } from "react"
import CreatForm from "./CreatForm"
import Todo from "./Todo"
function TodoWrapper() {

    const [todos, setTodos] = useState([
    ]);
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false,isEdit: false }])
    }
    const editTodo = (id , newContent) => {
        return(setTodos(todos.map(todo => todo.id === id ? { ...todo, isEdit: !todo.isEdit, content: newContent } : todo)))
    }
    const deletTodos = (id) => {
        setTodos(todos.filter((todo) => { return todo.id !== id }))
    }
    const switchCompleted = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo
        }))
    }
    const switchEdit = (id) => {
        return(setTodos(todos.map(todo => todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo)))
    }
    return (<div className="wrapper">
        <h1>タスク</h1>
        <CreatForm addTodo={addTodo} />
        {todos.map((todo) => {
            return <Todo switchEdit={switchEdit} switchCompleted={switchCompleted} todo={todo} key={todo.id} deletTodo={deletTodos} editTodo={editTodo}/>
        })}
    </div>)
}




export default TodoWrapper