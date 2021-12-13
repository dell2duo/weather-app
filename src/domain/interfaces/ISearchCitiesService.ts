import { City } from '../models/City'

export interface ISearchCitiesService {
  search(query: string): Promise<City[]>
}
