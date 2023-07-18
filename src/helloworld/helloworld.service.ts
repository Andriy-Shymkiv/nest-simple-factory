import { Injectable } from '@nestjs/common';

@Injectable()
export class HellWorldService {
  getHello(): string {
    return 'Hello World!';
  }
}
