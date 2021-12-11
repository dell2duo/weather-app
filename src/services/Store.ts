import { IStore } from '../domain/interfaces/IStore'
import { City } from '../domain/models/City'

export class Store implements IStore {
  getCities(): Promise<City[]> {
    throw new Error('Method not implemented.')
  }
  highlightCity(city: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
