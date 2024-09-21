import { useState } from "react"
import './todo.css'
import { ToDoClearButton } from "./todoClearButton"
import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"
import { TodoDate } from "./todoDate"

export const Todo = () => {
    const [todos, setTodos] = useState([])

    function addTodo(task){
        setTodos([...todos,  task])
    }

    function handleTaskDelete(id) {
        const deleteTaskIndex = todos.findIndex((todo) => todo.id === id)
        if(deleteTaskIndex === -1) return
        const newTodos  = [...todos]
        newTodos.splice(deleteTaskIndex,1)
        setTodos(newTodos)
    }

    function handleClearTask(){
        setTodos([])
    }

    function handleChecklist(id) {
        const newTodos = todos.map((todo) => 
            {
                if(todo.id === id) return { ...todo , completed: !todo.completed}
                return todo
            })
        setTodos(newTodos)
    }

    return (
        <section className="todo-container">
            <header>
                <h1> TODO LIST</h1>
                <TodoDate />
            </header>
                <TodoForm addTodo={addTodo} todos= {todos}/>
                <section className="myUnOrdList">
                    <ul>
                        {
                            todos.map(
                                (todo) =>
                                    <TodoList key={todo.id} todo={todo} handleTaskDelete={handleTaskDelete} handleChecklist={handleChecklist}/>
                                )
                        }
                    </ul>
                </section>
                <ToDoClearButton handleClearTask= {handleClearTask}/>
        </section>
    )
}