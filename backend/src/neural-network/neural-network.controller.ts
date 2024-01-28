import { Body, Controller, Get } from '@nestjs/common';
import { NeuralNetworkService } from './neural-network.service';
import { ForecastInputDto } from '../../../common/dto/neural-network/forecast-input-dto';
import { ForecastDto } from '../../../common/dto/neural-network/forecast-dto';

@Controller('nn')
export class NeuralNetworkController {
  constructor(private readonly neuralNetworkService: NeuralNetworkService) {}

  @Get("forecast")
  getForecast(@Body() forecastInput: ForecastInputDto) {
    return {} as ForecastDto;
  }
}
