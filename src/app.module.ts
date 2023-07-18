import { Module } from '@nestjs/common';
import { HellWorldController } from './helloworld/helloworld.controller';
import { HellWorldService } from './helloworld/helloworld.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [HellWorldController, CatsController],
  providers: [HellWorldService, CatsService],
})
export class AppModule {}
