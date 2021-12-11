import { City } from '../models/City'

export interface ISearchCityService {
  search(city: string): Promise<City>
}
