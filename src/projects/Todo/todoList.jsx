/* eslint-disable react/prop-types */
import { MdCheck } from "react-icons/md"
import { MdDeleteForever } from "react-icons/md"

export const TodoList = ({todo, handleTaskDelete, handleChecklist}) => {
    return (
            <li className="todo-item" key={todo.id}>
                <span className={todo.completed ? "checkList" : "notCheckList"}>{todo.content}</span>
                <button className="check-btn" onClick={() => handleChecklist(todo.id)}>
                    <MdCheck/>
                </button>
                <button className="delete-btn" onClick={() => handleTaskDelete(todo.id)}>
                    <MdDeleteForever/>
                </button>
            </li>
        )
}