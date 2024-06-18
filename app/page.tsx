'use client';
import Image from 'next/image';
import Balance from './components/Balance';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import { useState } from 'react';
import { Transaction } from './types/types';
import IncomeExpenses from './components/IncomeExpenses';

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <div className=' bg-white flex flex-col items-center p-12'>
      <h1 className='text-4xl font-bold text-center text-slate-500'>
        Expense Tracker
      </h1>
      <Balance />
      <IncomeExpenses transactions={transactions} />
      <History />
      <AddTransaction  />
    </div>
  );
}
