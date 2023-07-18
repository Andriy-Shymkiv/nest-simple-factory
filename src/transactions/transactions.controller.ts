import { Controller, Get } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TransactionsService } from 'src/cats/transactions.service';

@Controller()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}
  // every 10 seconds
  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    console.log('Running the indexer service...');
    await this.transactionsService.getDunaTransactions();
  }

  @Get('/transactions-history')
  getData() {
    if (this.transactionsService.transactionsHistory) {
      return { data: this.transactionsService.transactionsHistory };
    } else {
      return { error: 'Transactions not available yet. Please try again later.' };
    }
  }
}