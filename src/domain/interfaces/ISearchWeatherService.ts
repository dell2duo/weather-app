import { CityWeather } from '../models/CityWeather'

export interface ISearchWeatherService {
  search(city: string, favorite: boolean): Promise<CityWeather | null>
}
