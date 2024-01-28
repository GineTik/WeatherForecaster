import { Injectable } from '@nestjs/common';
import { Station } from "../../../common/dto/filter-data/station";
import { TimeFrameDto } from '../../../common/dto/neural-network/time-frame-dto';

@Injectable()
export class FilterDataService {
  getAvailableStations(): Station[] {
    return [
      {
        name: "Khmelnytskyi",
        code: "33429",
        country: "UA",
      },
      {
        name: "Kiev",
        code: "33345",
        country: "UA",
      },
      {
        name: "Amsterdam",
        code: "06240",
        country: "NL",
      }
    ];
  }

  getAvailableTimeFrames(): TimeFrameDto {
    return {
      from: new Date(),
      to: new Date()
    };
  }
}
