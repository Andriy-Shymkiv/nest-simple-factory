import { Test, TestingModule } from '@nestjs/testing';
import { HellWorldController } from './helloworld.controller';
import { HellWorldService } from './helloworld.service';

describe('AppController', () => {
  let appController: HellWorldController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HellWorldController],
      providers: [HellWorldService],
    }).compile();

    appController = app.get<HellWorldController>(HellWorldController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
