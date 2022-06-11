import { Page } from "../abc/api-models";
import { Transaction } from "../models/Transaction";

export class TransactionListRequest {
  constructor(public page = new Page()) {}
}

const tranNumber = Math.round((1.2 - Math.random()) * 100);
console.log(tranNumber);

const transactions: Transaction[] = Array.from(Array(tranNumber).keys()).map(
  (n) => <Transaction>{ description: `Transaction number: ${n + 1}` }
);
export const getTransactions = async (
  req: TransactionListRequest
): Promise<Transaction[]> => {
  const lowerBound = 0;
  const upperBound = transactions.length;

  const lowerConstraint =
    lowerBound > (req.page.skip - 1) * req.page.take
      ? lowerBound
      : (req.page.skip - 1) * req.page.take;

  const upperConstraint =
    upperBound < req.page.skip * req.page.take
      ? upperBound
      : req.page.skip * req.page.take;

  const value = transactions.slice(lowerConstraint, upperConstraint);

  // fake delay
  await new Promise((r) => setTimeout(r, Math.random() * 1000));

  return value;
};
