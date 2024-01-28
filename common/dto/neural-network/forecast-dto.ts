export class ForecastDto {
    temperatureAvg: number;
    temperatureMin: number;
    temperatureMax: number;
    date: Date;
    snow: number;
    windDirection: number;
    windSpeed: number;
    peakWindGust: number;
    dewPoint: number;
    relativeHumidity: number;
    oneHourPrecipitationTotal: number;
    seaLevelAirPressure: number;
    oneHourSunshineTotal: number;
    weatherConditionCode: number;
}