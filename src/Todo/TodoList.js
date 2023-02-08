import React from "react";
import TodoItem from "../components/TodoItem";
import './TodoList.css'

const TodoList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <p className='expenses-list__fallback'>No expenses found</p>
    }

    return (
        <ul className='expenses-list'>
            {
                props.filteredExpenses.map((expense) => {
                    return <TodoItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></TodoItem>
                })
            }
        </ul>
    )
}
export default TodoList