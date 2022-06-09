import { Transaction } from "../models/Transaction";

const transactions: Transaction[] = Array.from(Array(100).keys()).map(
  (n) => <Transaction>{ description: `Transactio number: ${n + 1}` }
);
export const getTransactions = async (): Promise<Transaction[]> => {
  return transactions;
};
