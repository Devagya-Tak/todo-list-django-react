import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import EditTodo from './EditTodo.jsx'

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
  }, {
    path: 'todos/:todoID',
    element: <EditTodo/>
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
