import Image from "next/image";
import Balance from "./components/Balance";
import History from "./components/History";
import Income from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";

export default function Home() {
  return (
    <div className=" bg-white flex flex-col items-center p-12">
      <h1 className="text-4xl font-bold text-center text-slate-500">Expense Tracker</h1>
      <Balance />
      <Income/>
      <History />
      <AddTransaction/>
    </div>

  );
}
