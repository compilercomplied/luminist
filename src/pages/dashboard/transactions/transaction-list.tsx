import { useEffect, useState } from "react";
import { Page } from "../../../abc/api-models";
import { Button } from "../../../components/button";
import { Transaction } from "../../../models/Transaction";
import {
  getTransactions,
  TransactionListRequest,
} from "../../../services/transaction.api";
import { TransactionItem } from "./transaction-item";

function buildPage(pageNumber: number): Page {
  return new Page(pageNumber);
}

export const TransactionList = () => {
  const [transactions, setTransactions] = useState([] as Transaction[]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const tran = await getTransactions(
        new TransactionListRequest(buildPage(page))
      );

      setTransactions((t) => t.concat(tran));
    })();
  }, [page]);

  const nextPage = () => {
    setPage((p) => p + 1);
  };

  return (
    <div>
      <ul>
        {transactions.map((t) => (
          <TransactionItem {...t} />
        ))}
      </ul>
      <Button text={"load more"} onClick={nextPage} />
    </div>
  );
};
