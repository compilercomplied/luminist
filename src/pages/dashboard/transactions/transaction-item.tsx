import { Transaction } from "../../../models/Transaction";

export const TransactionItem = (transaction: Transaction) => {
  return <div>{transaction.description}</div>;
};
