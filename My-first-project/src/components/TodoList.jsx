
export const TodoList = ({ todos, setTodos}) => {
    const completeTodo = ({target}) => {
        const completeTodos = todos.map(todo =>{
        if (todo.id === target.id){
            todo.done = !todo.done
            return todo;
        }
        return todo;
    })
        setTodos(completeTodos);
    }


  return (
    <div>
        {
            (todos.length === 0) 
            ?
            (<li className="alert alert-info">no hay todo </li>)
            :
            (
                setTodos.map(todo => (
                    <li key={todo.id}
                    className={`d-flex justify-content-between mb-2 alert ${(todo.done) ? 'alert-success' : 'alert-warning'}`}
                    >
                        <samp> { todo.desc } </samp>
                        <button className={`btn btn-sm ${(todo.done) ? 'btn-succes': 'btn-warning'}`}
                        id={todo.id} 
                        onClick={ completeTodo }
                        > 
                        { (todo.done)? 'complete' : 'completar' }
                        </button>
                    </li>
                ))
            )
        }
    </div>
  )
}
