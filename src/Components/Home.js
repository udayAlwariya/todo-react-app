import { Todos } from './Todos';
import { FloatingButton } from './FloatingButton';
import React, { useState } from 'react';

export const Home = () => {
  let initTodos = [];
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', '[]');
  } else {
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    let updatedTodos = todos.filter((e) => {
      return e !== todo;
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const onDone = (todo) => {
    let updatedTodos = [];
    for (var i = 0; i < todos.length; i++) {
      if (todos[i] === todo) {
        todo.isDone = !todo.isDone;
        updatedTodos.push(todo);
      } else {
        updatedTodos.push(todos[i]);
      }
    }
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const onAdd = (todo) => {
    console.log(todo);
    let updatedTodos = [todo, ...todos];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const [todos, setTodos] = useState(initTodos);

  return (
    <>
      <Todos
        title='Todo List'
        todos={todos}
        onDelete={onDelete}
        onDone={onDone}
        onAdd={onAdd}
      />
      <FloatingButton icon="⏰" path="timer"/>
    </>
  );
};
