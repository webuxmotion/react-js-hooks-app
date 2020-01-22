import React, { Component, useState } from 'react';
import { Amount } from './Amount';
import { Controls } from './Controls';
import "./styles.css";

function App() {
  const [amount, setAmount] = useState(0);

  function deposit(value) {
    setAmount(amount + value);
  }

  function withdraw(value) {
    const newAmount = amount - value;
    setAmount(newAmount < 0 ? 0 : newAmount);
  }

  return (
    <div className="app-container">
      <Amount value={amount} />
      <div className="separator" />
      <Controls onDeposit={deposit} onWithdraw={withdraw} />
    </div>
  )
}

export { App };