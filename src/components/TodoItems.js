import React from 'react'

const TodoItems = ({ todos, toggleTodo }) => {


    const handleTodoClick = () => {
        toggleTodo(id);
    }

    const { id, task, completed } = todos;
    return (
        <div>
            <li><input
                type="checkbox"
                checked={completed}
                onChange={handleTodoClick}
                name="" id="" />{task}</li>
        </div>
    )
}

export default TodoItems
