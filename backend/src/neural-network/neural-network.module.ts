import { Module } from '@nestjs/common';
import { NeuralNetworkService } from './neural-network.service';
import { NeuralNetworkController } from './neural-network.controller';

@Module({
  controllers: [NeuralNetworkController],
  providers: [NeuralNetworkService],
})
export class NeuralNetworkModule {}
