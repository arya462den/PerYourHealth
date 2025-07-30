import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Expense added: $${amount}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Amount:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
