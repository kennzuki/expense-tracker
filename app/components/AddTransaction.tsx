'use client'

function AddTransaction() {
  return (
    <div className='py-8 flex flex-col gap-4'>
      <h3 className='font-bold text-xl underline'>Add Transactions here</h3>
      <form action='' className=''>
        <section className='flex flex-col gap-2'>
          <label htmlFor='' className=''>
            Type of transaction
          </label>
          <input type='text' className='border rounded p-2' placeholder='Enter transaction' />
        </section>
        <section className='flex flex-col gap-2 my-4'>
          <label htmlFor='' className=''>
            Amount in kshs of transaction
          </label>
          <input type='number'  className='border rounded p-2' placeholder='Amount transacted' />
        </section>
        <button className='py-1 px-3 rounded text-white bg-blue-500 w-full'>
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
