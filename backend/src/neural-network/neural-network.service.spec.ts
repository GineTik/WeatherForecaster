import { Test, TestingModule } from '@nestjs/testing';
import { NeuralNetworkService } from './neural-network.service';

describe('NeuralNetworkService', () => {
  let service: NeuralNetworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeuralNetworkService],
    }).compile();

    service = module.get<NeuralNetworkService>(NeuralNetworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
