import { useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';
import FetchApi from './components/FetchApi';
import FormsInReact from './components/FormsInReact';
import PasswordChecker from './components/PasswordChecker';
import Counter from './components/Counter';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return ( [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
      )
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <FetchApi />
      <FormsInReact />
      <PasswordChecker />
      <Counter />
    </>
  );
}

export default App;