import { ISearchCityService } from '../domain/interfaces/ISearchCityService'
import { City } from '../domain/models/City'

export class SearchCityService implements ISearchCityService {
  search(city: string): Promise<City> {
    throw new Error('Method not implemented.')
  }
}
