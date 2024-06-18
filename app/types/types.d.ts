'use client'

export interface Transaction{
    id: number,
    text: string,
    amount:number
}

export interface IncomeExpensesProps {
    transactions: Transaction[];
  }