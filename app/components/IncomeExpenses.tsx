import React from 'react';

function Income() {
  return (
    <div className='border shadow-2xl flex gap-4 place-items-center p-8 rounded text-2xl [&_h4]:font-bold mb-6'>
      <section className='flex flex-col place-items-center'>
        <h4>Income</h4>
        <p className=''>KSH 15000</p>
      </section>
      <section className='flex flex-col place-items-center'>
        <h4>expenses</h4>
        <p className=''>KSH 1000</p>
      </section>
    
    </div>
  );
}

export default Income;
