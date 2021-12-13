import axios, { AxiosRequestConfig } from 'axios'
import { ISearchWeatherService } from '../domain/interfaces/ISearchWeatherService'
import { CityWeather } from '../domain/models/CityWeather'
import { keys } from '../keys/ApiKeys'

export class SearchWeatherService implements ISearchWeatherService {
  async search(city: string, favorite: boolean): Promise<CityWeather> {
    try {
      var options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: city,
          lat: '0',
          lon: '0',
          lang: 'pt',
          units: 'metric',
          mode: 'json',
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': keys.SPOTT_WEATHER_API_KEY,
        },
      }

      const { data } = await axios.request<CityWeatherApiModel>(options)
      return new CityWeather(data, favorite)
    } catch (error) {
      throw new Error('Could not find a weather for this city')
    }
  }
}
