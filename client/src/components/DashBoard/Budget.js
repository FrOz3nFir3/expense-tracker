import React from 'react';
import { getCurrentMonthName } from '../../utils/date';

const Budget = () => {
    // derive this from backend
    const [currentBudget, setCurrentBudget] = React.useState(0);
    const [currentExpense, setCurrentExpense] = React.useState(0);
    const [budgetEdit, setBudgetEdit] = React.useState(false);

    const currentMonth = getCurrentMonthName();
    return (
        // show border red if budget is negative
        <div className='inline-block p-1 border-green flow-content'>
            <h2>Budget Overview</h2>

            <div>
                Your Current Budget is: 

                <span className='inline-block mx-1'>
                    { 
                        budgetEdit ?
                            <input type={"number"}/>
                            : <strong className='text-base'>₹ {currentExpense}</strong>
                    }
                </span>
            </div>

            <div className='flex text-center'>

                <div>
                    Expense of <strong>{currentMonth}</strong> Month:
                    <strong className='block text-lg'>₹ {currentExpense}</strong>
                </div>

                <div>
                    Remaining Budget of <strong>{currentMonth}</strong> Month:
                    <strong className='block text-lg'>₹ {currentBudget}</strong>
                </div>
            </div>
        </div>
    );
}

export default Budget;