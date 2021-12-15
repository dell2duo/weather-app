import axios, { AxiosRequestConfig } from 'axios'
import { ISearchWeatherService } from '../domain/interfaces/ISearchWeatherService'
import { CityForecast } from '../domain/models/CityForecast'
import { CityForecastApiModel } from '../domain/models/CityForecastApiModel'
import { CityWeather } from '../domain/models/CityWeather'
import { CityWeatherApiModel } from '../domain/models/CityWeatherApiModel'
import { keys } from '../keys/ApiKeys'

export class SearchWeatherService implements ISearchWeatherService {
  public unitSystem: string = 'metric'

  async search(city: string, favorite: boolean): Promise<CityWeather> {
    var options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      params: {
        q: city,
        units: this.unitSystem,
        lang: 'pt',
        appid: '78271d9b1f9ce8c048e6c6f179b6cb2e',
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': keys.RAPIDAPI_OPENWEATHER_API_KEY,
      },
    }

    try {
      const { data } = await axios.request<CityWeatherApiModel>(options)
      return new CityWeather(data, favorite)
    } catch (error) {
      throw new Error('Could not find a weather for this city')
    }
  }

  async getForecastForDays(city: string): Promise<CityForecast> {
    var options: AxiosRequestConfig = {
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/forecast`,
      params: {
        q: city,
        lang: 'pt',
        units: this.unitSystem,
        mode: 'json',
        appid: keys.OPENWEATHER_API_KEY,
      },
    }

    try {
      const { data } = await axios.request<CityForecastApiModel>(options)
      return new CityForecast(data)
    } catch (error) {
      throw new Error('Could not find a weather for this city')
    }
  }
}
