import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DUNE_QUERY_URL } from 'src/common/constants';

@Injectable()
export class TransactionsService {
  public transactionsHistory: any = null; // here should be data from database
  async getDunaTransactions(): Promise<void> {
    try {
      // first need to execute query to get actual transactions from dune service
      // because without execution we will get old data
      // @todo: execute query with `axios.post()`
      const { data } = await axios.get(DUNE_QUERY_URL, {
        headers: { 'X-Dune-Api-Key': process.env.DUNE_API_KEY ?? '' },
      });
      this.transactionsHistory = data.result.rows;
      console.log('Transactions fetched successfully:', this.transactionsHistory);
    } catch (error: any) {
      console.error('Error fetching transactions:', error.message);
    }
  }
}
