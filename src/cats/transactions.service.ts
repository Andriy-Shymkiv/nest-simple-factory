import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TransactionsService {
  public transactionsHistory: any = null; // here should be data from database
  async getDunaTransactions() {
    try {
      // first need to execute query to get actual transactions from dune service
      // because without execution we will get old data
      // @todo: execute query with `axios.post()`
      const { data } = await axios.get(`https://api.dune.com/api/v1/query/2742595/results?api_key=`, {
        headers: { 'X-Dune-Api-Key': 'rwY4AFYAVCLtbn6uzAEcsggkt6X0hdL1' },
      });
      this.transactionsHistory = data.result.rows;
      console.log('Transactions fetched successfully:', this.transactionsHistory);
    } catch (error: any) {
      console.error('Error fetching transactions:', error.message);
    }
  }
}
