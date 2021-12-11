import { City } from '../models/City'

export interface IStore {
  getCities(): Promise<Array<City>>
  highlightCity(city: string): Promise<void>
}
