import React from 'react';
import Budget from './Budget';
import Expense from './Expense';

const DashBoard = () => {
    return (
        <div style={{paddingBottom: "10em"}} className='container flow-content'>
            <Budget />

            <Expense />
        </div>
    );
}

export default DashBoard;