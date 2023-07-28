//import React, { useState } from "react";
import ExpanseDate from './ExpanseDate.js';
import "./ExpanceItem.css";
import Card from "../UI/Card.js";
function ExpanceItem(props) {
  
  
  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date}></ExpanseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}
export default ExpanceItem;