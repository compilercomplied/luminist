import { useEffect, useState } from "react";
import { Transaction } from "../../../models/Transaction";
import { getTransactions } from "../../../services/transaction.api";
import { TransactionItem } from "./transaction-item";

export const TransactionList = () => {
  const [transactions, setTransactions] = useState([] as Transaction[]);

  useEffect(() => {
    (async () => {
      const tran = await getTransactions();

      setTransactions(tran);
    })();
  });

  return (
    <div>
      <ul>
        {transactions.map((t) => (
          <TransactionItem {...t} />
        ))}
      </ul>
    </div>
  );
};
