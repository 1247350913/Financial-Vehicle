import React, { useState }  from 'react';
import Account from './Account';
import Asset from './Asset';
import Expense from './Expense';
import Income from './Income';

const SystemParams = () => {

  const [addAccount, setAddAccount] = useState(false);
  const [addAsset, setAddAsset] = useState(false);
  const [addExpense, setAddExpense] = useState(false);
  const [addIncome, setAddIncome] = useState(false);

  const handleAddAccount = () => {
    setAddAccount(true);
  };

  const handleAddAsset = () => {
    setAddAsset(true);
  };

  const handleAddExpense = () => {
    setAddExpense(true);
  };

  const handleAddIncome = () => {
    setAddIncome(true);
  };

  return (
    <div>
      <h1>System Parameters</h1>
      <p>Accounts</p>
      <button onClick={handleAddAccount}>Add Account</button>
      {addAccount && <Account/>}
      <p>Assets</p>
      <button onClick={handleAddAsset}>Add Asset</button>
      {addAsset && <Asset/>}
      <p>Expenses</p>
      <button onClick={handleAddExpense}>Add Expense</button>
      {addExpense && <Expense/>}
      <p>Incomes</p>
      <button onClick={handleAddIncome}>Add Income</button>
      {addIncome && <Income/>}
    </div>
  );
};

export default SystemParams;