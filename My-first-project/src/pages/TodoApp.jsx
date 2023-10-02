import { useState } from "react"
import { TodoList } from "../components/todoList"
import { TodoAction } from "../components/TodoAction"


export const TodoApp = () => {
  const [todoList, setTodosList] = useState([])
  const [todos, setTodos] = useState("")


    // Lógica para almacenar los todos

    // Lógica para añadir un todo


    // Lógica para completar un todo
  
    return (
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <h1>TodoApp</h1>
          </div>
        </div>
  
        {/* TodoFilter */}
        <div className="row mb-3">
          <div className="col d-flex gap-1">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-success">Active</button>
            <button className="btn btn-sm btn-danger">Completed</button>
            <button className="btn btn-sm btn-warning">Clear Completed</button>
          </div>
        </div>
  
        {/* TodoAdd */}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
            <h3>New Todo</h3>
            <TodoAction todos={todos} setTodos={setTodos} todoList={todoList} setTodosList={setTodosList} />
          </div>
  
          {/* TodoList */}
          <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>
            <ul className="list-unstyled">
              {/* TodoList Item */}
              <TodoList  todoList= {todos} setTodosList={setTodos} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
  