import { Test, TestingModule } from '@nestjs/testing';
import { FilterDataController } from './filter-data.controller';
import { FilterDataService } from './filter-data.service';

describe('FilterDataController', () => {
  let controller: FilterDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilterDataController],
      providers: [FilterDataService],
    }).compile();

    controller = module.get<FilterDataController>(FilterDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
