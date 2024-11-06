import React from 'react';

// extract this to a separate file also fix the ui
const ExpenseListItem = (props) => {
   return (
    <div className="flex justify-between items-center">
        <div>
            <h2>{props.name}</h2>
            <p>{props.date}</p>
        </div>
        <div>
            <p>{props.amount}</p>
            <p>{props.category}</p>
        </div>
    </div>
   );
}

const ExpenseList = (props) => {
    const items = props.items;

    return <>
        {
            items.map((item) => {
                return <ExpenseListItem key={crypto.randomUUID()} name={item.name} date={item.date} amount={item.amount} category={item.category} />
            })
        }
    </>
}



export default ExpenseList;