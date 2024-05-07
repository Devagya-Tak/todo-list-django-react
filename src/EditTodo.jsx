import './App.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTodoStore } from './store'

const EditTodo = () => {
    const { todoID } = useParams()
    const [todoTitle, setTodoTitle] = useState('')
    const [todoDesc, setTodoDesc] = useState('')
    const editTodo = useTodoStore(state => state.editTodo)
    const todos = useTodoStore(state => state.todos)

    useEffect(() => {
        // Find the todo by ID
        const todo = todos.find(todo => todo.id == todoID);
        // If the todo exists, set the title and description
        if (todo) {
            setTodoTitle(todo.todo_title);
            setTodoDesc(todo.todo_desc);
        } else {
            // Handle the case where todo is not found
            console.log(`Todo with ID ${todoID} not found.`);
            // Optionally, you can redirect the user or display an error message
        }
    }, [todoID, todos]);


    const handleEdit = () => {
        editTodo(todoID, todoTitle, todoDesc);
    }

    return (
        <>
            <div className="fuddu">
                <div className="container ml">
                    <h1 className="title">Todo App</h1>
                    <div className="form-container">
                        <input
                            type="text"
                            value={todoTitle}
                            onChange={(e) => setTodoTitle(e.target.value)}
                            placeholder="Todo Title"
                            className="input"
                            required
                        />
                        <input
                            type="text"
                            value={todoDesc}
                            onChange={(e) => setTodoDesc(e.target.value)}
                            placeholder="Todo Description"
                            className="input"
                            required
                        />
                        <Link to={'/'}>

                        <button type="button" onClick={handleEdit} className="button">Edit Todo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTodo
