import React from 'react'
import TodoItems from './TodoItems';

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <div>
            <ul>
                {
                    todos.map((todo) => (
                        <TodoItems todos={todo} key={todo.id} toggleTodo={toggleTodo} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList
