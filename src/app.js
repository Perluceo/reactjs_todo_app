import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';


let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Start Vetting Process', done: true },
  { id: 1, title: 'Create NextJS app', done: false },
  { id: 2, title: 'Create Profile', done: false },
  { id: 3, title: 'Create Resume', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
