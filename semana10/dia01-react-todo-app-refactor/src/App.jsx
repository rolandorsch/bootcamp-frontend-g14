import { useState } from "react"

import Header from './components/Header'
import Form from "./components/Form"
import Stats from "./components/Stats"
import TodoList from "./components/TodoList"

function App() {

  const DEFAULT_TODOS = [
    {
      "id": '1',
      "title": "delectus aut autem",
      "completed": true
    },
    {
      "id": '2',
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": '3',
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": '4',
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": '5',
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]

  // TODO: añadir persistencia a este todo app para que las las tareas esten siempre visibles en el navegador una vez creadas. Ayuda, usen localstorage.

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  const handleCompleted = (event) => {
    // console.log(event)
    const isChecked = event.target.checked
    const idSeleted = event.target.dataset.id

    const newTodos = todos.map(todo => {
      if (todo.id === idSeleted) {
        return { ...todo, completed: isChecked }
      }
      return todo
    })

    console.log(newTodos)

    setTodos(newTodos)
  }

  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    console.log(newTodos)

    setTodos(newTodos)
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => todo.completed === false)

    setTodos(newTodos)
  }

  const handleSubmit = (newTodo) => setTodos([...todos, newTodo])

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 rounded-lg bg-yellow-100 border border-yellow-600 p-4 shadow-lg">
        <Header title="TODO APP" /> 

        <Form onSubmit={handleSubmit} />

        <Stats
          todos={todos}
          onClearTodos={handleClearTodos}
        />

        <section className="mt-5">
          <TodoList
            todos={todos}
            onCompleted={handleCompleted}
            onRemoveTodo={handleRemoveTodo}
          />
        </section>
      </main>
    </>
  )
}

export default App
