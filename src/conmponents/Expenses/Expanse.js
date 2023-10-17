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
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpanseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default Expenses;
