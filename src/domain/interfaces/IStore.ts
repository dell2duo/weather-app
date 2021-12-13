import { City } from '../models/City'

export interface IStore {
  getCities(): Promise<City[]>
  removeCity(city: City): Promise<void>
  saveCity(city: City): Promise<void>
  favoriteCity(city: City): Promise<void>
}
