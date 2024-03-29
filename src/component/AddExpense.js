import React, { useRef, useContext } from 'react'
import "./AddExpense.css"
import {Context} from "../screen/Main"

const AddExpense = () => {

  const {setExpenseData, setTotalExpense} = useContext(Context)

  const titleRef = useRef();
  const priceRef = useRef();

  return (
    <div className='expense-container'>
      
      <h1>Add Expenses</h1>

      <div className='input-container'>
          <input ref={titleRef} type='text' placeholder='Item Name'></input>
          <input ref={priceRef} type='number' placeholder='Price'></input>
          
      </div>

      <button
              onClick={() => {
                const title = titleRef.current.value;
                const price = parseInt(priceRef.current.value);

                setExpenseData(prevData => [...prevData, {title, price}])
                setTotalExpense(prevValue => price + prevValue)

                titleRef.current.value = "";
                priceRef.current.value = "";
              }}
          >Add</button>
      
    </div>
  )
}

export default AddExpense