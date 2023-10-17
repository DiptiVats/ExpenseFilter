import React, { useState } from "react";
import ExpanseItem from "./ExpanseItem.js";
//import Card from "./UI/Card.js";
import "./Expanese.css";
import ExpensesFilter from "./ExpensesFilter.js";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 && <p>No expense found !</p>}

      {filteredExpenses.length !== 0 &&
        filteredExpenses.map((expense) => (
          <ExpanseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
};
export default Expenses;
