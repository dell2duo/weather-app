import axios, { AxiosRequestConfig } from 'axios'
import { ISearchCitiesService } from '../domain/interfaces/ISearchCitiesService'
import { CityApiModel } from '../domain/models/CityApiModel'
import { City } from '../domain/models/City'
import { keys } from '../keys/ApiKeys'

export class SearchCitiesService implements ISearchCitiesService {
  async search(city: string): Promise<City[]> {
    var options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://spott.p.rapidapi.com/places/autocomplete',
      params: { limit: '10', skip: '0', q: city, type: 'CITY' },
      headers: {
        'x-rapidapi-host': 'spott.p.rapidapi.com',
        'x-rapidapi-key': keys.RAPIDAPI_SPOTT_API_KEY,
      },
    }

    try {
      const { data } = await axios.request<CityApiModel[]>(options)
      return data.map((city) => {
        return new City(city?.name, city?.country?.name, false, city?.id)
      })
    } catch (error) {
      throw new Error("Can't search for cities")
    }
  }
}
