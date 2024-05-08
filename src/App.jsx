import React, { useEffect, useState } from 'react';
import { useTodoStore } from './store';
import './App.css';
import { Link } from 'react-router-dom';
// Import Navbar if you intend to use it
// import Navbar from './components/Navbar';

const App = () => {
  const todos = useTodoStore(state => state.todos);
  const loading = useTodoStore(state => state.loading);
  const fetchTodos = useTodoStore(state => state.fetchTodos);
  const addTodo = useTodoStore(state => state.addTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDesc, setTodoDesc] = useState('No description provided');

  const handleAdd = () => {
    addTodo(todoTitle, todoDesc);
    setTodoTitle('');
    setTodoDesc('');
  }

  const handleDelete = (id) => {
    deleteTodo(id);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {/* Uncomment the following line if you intend to use Navbar */}
      {/* <Navbar /> */}
      <div className="fuddu">
        <div className="container ml">
          <h1 className="title">Your Toodos</h1>
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
            <button onClick={handleAdd} className="button">Add Todo</button>
          </div>
          <div className='todos'>
            {
              loading ? <span className="loader"></span> :
              todos.map(todo => (
                <div key={todo.id} className="todo">
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <input type="checkbox" name="" id="" style={{marginTop: '5px'}} />
                    <h2 className="todo-title">{todo.todo_title}</h2>
                  </div>
                  <p className="todo-desc">{todo.todo_desc}</p>
                  <Link to={`todos/${todo.id}`}>
                    <button style={{marginRight: '5px'}}>Update</button>
                  </Link>
                  <button onClick={() => { handleDelete(todo.id) }}>Delete</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
