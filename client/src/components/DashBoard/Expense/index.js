import React from 'react';
import NewExpense from './NewExpense';
import ExpenseList from './ExpenseList';

const Expense = () => {
    // probably have this in redux so that it can be shared with other components like budget
    const [expenses, setExpenses] = React.useState([]);

    return (
        <div>
            <NewExpense setExpenses={setExpenses}/>

            <h1>Expense</h1>

            <ExpenseList items={expenses}/>
        </div>
    );
}

export default Expense;