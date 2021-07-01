import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  } 
  
  const addTodo = (title, desc) => {
     console.log("I am adding this todo", title, desc);
  }

  const [todos, setTodos] = useState([
    {
        sno: 1,
        title: "Go to the market",
        desc: "You need to go to the market to get this job done"
    },
    {
        sno: 2,
        title: "Go to the gym",
        desc: "You need to go to the gym for exercising"
    },
    {
        sno: 3,
        title: "Go to the school",
        desc: "You need to go to the school for studying"
    }
]);

  return (
    <>
    <Header title="My Todos List" searchBar={false} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos}  onDelete={onDelete} />
    <Footer />
    </>
  );
}

export default App;
