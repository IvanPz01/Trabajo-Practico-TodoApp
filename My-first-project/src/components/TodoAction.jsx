
export const TodoAction = ({todos, setTodos, setTodosList, todoList}) => {
    const inputChange = ({target}) => {
        setTodos(target.value)
      };

      const addTodo = ({key}) => {
        if (key === 13) {
          setTodosList([
            ...todoList,
            {
              id: new Date().getTime(),
              desc: todos,
              done: false,
            },
          ])
        }
      }

  return (
                <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              name="todos"
              // Evento cuando cambia el valor del input
              onChange={inputChange}
              value={todos}
              // Evento cuando presiona tecla Enter en ASCII
              onKeyUpCapture={addTodo}
            />
  )
}
