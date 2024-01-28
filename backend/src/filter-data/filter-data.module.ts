import { Module } from '@nestjs/common';
import { FilterDataService } from './filter-data.service';
import { FilterDataController } from './filter-data.controller';

@Module({
  controllers: [FilterDataController],
  providers: [FilterDataService],
})
export class FilterDataModule {}
