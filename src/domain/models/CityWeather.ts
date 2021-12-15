import { CityWeatherApiModel } from './CityWeatherApiModel'

export class CityWeather {
  public id: number
  public name: string
  public country: string
  public temperature: number
  public maxTemperature: number
  public minTemperature: number
  public feelsLike: number
  public humidity: number
  public description: string
  public favorite: boolean

  constructor(cityWeatherApiModel: CityWeatherApiModel, favorite?: boolean) {
    this.id = cityWeatherApiModel.id
    this.name = cityWeatherApiModel.name
    this.country = cityWeatherApiModel.sys.country
    this.temperature = cityWeatherApiModel.main.temp
    this.maxTemperature = cityWeatherApiModel.main.temp_max
    this.minTemperature = cityWeatherApiModel.main.temp_min
    this.feelsLike = cityWeatherApiModel.main.feels_like
    this.humidity = cityWeatherApiModel.main.humidity
    this.description = cityWeatherApiModel.weather[0].description
    this.favorite = favorite ?? false
  }
}
