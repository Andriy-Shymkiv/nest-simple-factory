import { Controller, Get } from '@nestjs/common';
import { HellWorldService } from './helloworld.service';

@Controller('/')
export class HellWorldController {
  constructor(private readonly helloWorldService: HellWorldService) {}

  @Get()
  getHello(): string {
    return this.helloWorldService.getHello();
  }
}
