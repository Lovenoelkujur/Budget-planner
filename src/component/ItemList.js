import React, { useContext } from 'react'
import "./ItemList.css"
import { Context } from '../screen/Main'

const ItemList = () => {

    const {expenseData} = useContext(Context)

  return (
    <div>
        <h1 className='title'>Expenses</h1>

        <div className='list'>
            {/* {expenseData.map(expense => <span>{expense.title} {expense.price}</span>)} */}

            {expenseData.map(expense => <p>{expense.title} - {expense.price}rs</p>)}
        </div>
        
    </div>
  )
}

export default ItemList