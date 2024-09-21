/* eslint-disable react/prop-types */
import { useState } from "react"

export  const TodoForm = ({addTodo, todos}) => {
    const [task, setTask] =  useState({id: '', content: '', completed: false})

    function handleSubmit(e){
        e.preventDefault()
        if(!task) return
        if(todos.findIndex((todo) => todo.content === task.content) !== -1) {
            setTask({id: '', content: '', completed: false})
            return
        }
        addTodo(task)
        setTask({id: '', content: '', completed: false})
    }

    return (
        <section className="form">
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="enter a task"
        value={task.content}
        onChange={(e) => setTask({content: e.target.value, id: e.target.value, completed: false})}
        className="todo-input"
        />
        <button type="submit"> Add Task</button>
        </form>
    </section>
    )
}