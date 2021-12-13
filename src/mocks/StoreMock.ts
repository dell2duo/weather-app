import { IStore } from '../domain/interfaces/IStore'
import { City } from '../domain/models/City'

export class StoreMock implements IStore {
  constructor(private cities: City[]) {}

  async removeCity(city: City): Promise<void> {
    this.cities = this.cities.filter((c) => c.name !== city.name)
  }

  async saveCity(city: City): Promise<void> {
    var uniqueElement = true
    this.cities.forEach((c) => {
      if (c.name === city.name) {
        uniqueElement = false
      }
    })

    if (uniqueElement) {
      this.cities.push(city)
    }
  }

  async getCities(): Promise<City[]> {
    return this.cities
  }

  async favoriteCity(city: City): Promise<void> {
    this.cities = this.cities.map((c) => {
      if (c.name === city.name) {
        c.favorite = !c.favorite
      }
      return c
    })
  }
}
