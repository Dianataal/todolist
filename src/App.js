import React, {useState} from "react";
import './App.css';


import Todo from "./components/Todo";
import NewTodo from "./NewTodo/NewTodo";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
      date: new Date(2023, 0, 10),
      title:'New book',
      price: 30.99
    },
    {
        id: 'e2',
      date: new Date(2023, 0, 10),
      title:'New jeans',
      price: 99.99
    },
      {
          id: 'e3',
          date: new Date(2023, 0, 5),
          title:'New bag',
          price: 199.99
      }
  ]

const App = () => {
    const [expenses, setExpenses] = useState
    (DUMMY_EXPENSES)

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses ) => {
        return [expense, ...previousExpenses]
      })
  }
console.log(expenses)

  return (
      <div className="App">
        <NewTodo onAddExpense={addExpensehandler}></NewTodo>
        <Todo expenses={expenses}></Todo>
      </div>
  );
}

export default App;