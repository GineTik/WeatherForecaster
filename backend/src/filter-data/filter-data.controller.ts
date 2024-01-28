import { Controller, Get } from '@nestjs/common';
import { FilterDataService } from './filter-data.service';

@Controller('filter-data')
export class FilterDataController {
  constructor(private readonly filterDataService: FilterDataService) {}

  @Get("stations")
  getAvailableStations() {
    return this.filterDataService.getAvailableStations();
  }

  @Get("time-frame")
  getAvailableTimeFrames() {
    return this.filterDataService.getAvailableTimeFrames();
  }
}
