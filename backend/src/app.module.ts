import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilterDataModule } from './filter-data/filter-data.module';
import { NeuralNetworkModule } from './neural-network/neural-network.module';

@Module({
  imports: [FilterDataModule, NeuralNetworkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
