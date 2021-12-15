export type CityApiModel = {
  id: number
  name: string
  country: string
}

export type ForecastApiModel = {
  dt: number
  dt_txt: string
  main: {
    temp: number
    temp_min: number
    temp_max: number
    feels_like: number
  }
  weather: {
    description: string
    icon: string
  }[]
}

export class CityForecastApiModel {
  public city: CityApiModel
  public list: ForecastApiModel[]
}
