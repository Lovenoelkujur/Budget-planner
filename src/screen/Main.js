import React, { useState, createContext } from 'react'
import "./Main.css"
import AmountDisplay from '../component/AmountDisplay'
import ItemList from '../component/ItemList'
import AddExpense from '../component/AddExpense'

export const Context = createContext()

const Main = () => {

    const [totalExpense, setTotalExpense] = useState(0);
    const [expenseData, setExpenseData] = useState([]);

  return (

    <Context.Provider value={{totalExpense, setTotalExpense, expenseData, setExpenseData}}>
        <div>
            <AmountDisplay></AmountDisplay>
            <br/>
            <hr/>
            <br/>
            <ItemList></ItemList>
            <br/>
            <hr/>
            <br/>
            <AddExpense></AddExpense>
        </div>
    </Context.Provider>
    
  )
}

export default Main