import React from "react";
import { getMinDate, getTodayDate } from "../../../utils/date";
import SelectWrapper from "./SelectWrapper.js";

const NewExpense = (props) => {
    const [showForm, setShowForm] = React.useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const expenseName = formData.get('expense-name');
        const expenseAmount = formData.get('expense-amount');
        const expenseDate = formData.get('expense-date');
        const expenseCategory = formData.get('expense-category');
        alert(expenseCategory);


        props.setExpenses((prev) => {
            return [
                ...prev,
                {
                    name: expenseName,
                    amount: expenseAmount,
                    date: expenseDate,
                    category: expenseCategory
                }
            ];
        });

        //submit form and probably validte inputs from the backend

       
        // clear form fields
        e.target.reset();
    }

    return (
        <div>
            <button className="btn bg-blue-capri ml-0" onClick={() => setShowForm((prev) => !prev)}>{showForm ? "close" : "Add Expense"}</button>
            {
                showForm && (
                    <form style={{ maxWidth: "500px" }} onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
                        <input name="expense-name" type='text' placeholder='Expense Name' required/>
                        <input name="expense-amount" type='number' placeholder='Amount' required/>
                        <input name="expense-date" type="date" min={getMinDate()} max={getTodayDate()} required/>
                        <SelectWrapper />
                        <button style={{
                            margin: 0,
                            fontSize: '1.2rem',
                        }} className="btn bg-blue-france" type='submit'>Add</button>
                    </form>
                )
            }
        </div>
    );
}

export default NewExpense;