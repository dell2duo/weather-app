type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

type Sys = {
  country: string
  sunrise: number
  sunset: number
}

class CityWeatherApiModel {
  public id: number
  public name: string
  public main: Main
  public weather: Weather[]
  public sys: Sys

  constructor(data: any) {
    this.id = data.id
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
    this.sys = data.sys
  }
}
