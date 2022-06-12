import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Page } from "../abc/api-models";
import { APIOptions } from "../app/configuration";
import { LS } from "../constants";
import { Transaction } from "../models/Transaction";

export class TransactionListRequest {
  constructor(public page = new Page()) {}
}

const transactionsURI = `${APIOptions.baseURI}/transactions`;

export const getTransactions = async (
  req: TransactionListRequest
): Promise<Transaction[]> => {
  const fullquery = `${transactionsURI}?page.skip=${req.page.skip}&page.number=${req.page.number}`;

  const token = localStorage.getItem(LS.token);

  const headers: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response: AxiosResponse = await axios.get(fullquery, headers);
    if (response.status !== 200) {
      console.log(`Error querying API ${{ response: response.data }}`);
    }

    return response.data as Transaction[];
  } catch (e) {
    throw e;
  }
};
