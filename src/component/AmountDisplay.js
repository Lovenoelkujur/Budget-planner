import React, { useContext } from 'react'
import "./AmountDisplay.css"
import { Context } from '../screen/Main';

const AmountDisplay = () => {

    const {totalExpense} = useContext(Context)

    const budget = 2000;

  return (
    <div className='budget-container'>
        <h1>My Budget Planner</h1>
        <div className='cart-holder'>
            <div className='cart c1'>Budget: Rs{budget}</div>
            <div className='cart c2'>Remaining: Rs{budget - totalExpense}</div>
            <div className='cart c3'>Amount spent: Rs{totalExpense}</div>
        </div>
    </div>
  )
}

export default AmountDisplay