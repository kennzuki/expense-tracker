import React from 'react';
import { IncomeExpensesProps } from '../types/types';

const IncomeExpenses:React.FC<IncomeExpensesProps>=({transactions})=> {
  const amounts = transactions.map(transactions => transactions.amount)
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense= amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className='border shadow-2xl flex gap-4 place-items-center p-8 rounded text-2xl [&_h4]:font-bold mb-6'>
      <section className='flex flex-col place-items-center'>
        <h4>Income</h4>
        <p className=''>${income}</p>
      </section>
      <section className='flex flex-col place-items-center'>
        <h4>expenses</h4>
        <p className=''>${expense}</p>
      </section>
    
    </div>
  );
}

export default IncomeExpenses;
