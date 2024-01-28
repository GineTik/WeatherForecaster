import { Test, TestingModule } from '@nestjs/testing';
import { NeuralNetworkController } from './neural-network.controller';
import { NeuralNetworkService } from './neural-network.service';

describe('NeuralNetworkController', () => {
  let controller: NeuralNetworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeuralNetworkController],
      providers: [NeuralNetworkService],
    }).compile();

    controller = module.get<NeuralNetworkController>(NeuralNetworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
