import {
  ForecastApiModel,
  CityApiModel,
  CityForecastApiModel,
} from './CityForecastApiModel'

export class CityForecast {
  public city: CityApiModel
  public list: ForecastApiModel[]

  constructor(cityForecastApiModel: CityForecastApiModel) {
    this.city = cityForecastApiModel.city
    this.list = cityForecastApiModel.list
  }
}
