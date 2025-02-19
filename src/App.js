import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // !Deleting this way in react does not work
    /* 
        //let index = todos.indexOf(todo);
        //todos.splice(index, 1);
    */

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={false} />
        <Routes>
          <Route path="/React-TodosList" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>}>
          </Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
