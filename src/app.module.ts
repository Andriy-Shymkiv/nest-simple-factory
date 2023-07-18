import { Module } from '@nestjs/common';
import { HellWorldController } from './helloworld/helloworld.controller';
import { HellWorldService } from './helloworld/helloworld.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { TransactionsController } from './transactions/transactions.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { TransactionsService } from './cats/transactions.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [HellWorldController, CatsController, TransactionsController],
  providers: [HellWorldService, CatsService, TransactionsService],
})
export class AppModule {}
