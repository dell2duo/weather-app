type Country = {
  id: string
  name: string
  geonameId: string
}

export class CityApiModel {
  public id: string
  public name: string
  public country: Country

  constructor(city: any) {
    this.id = city.id
    this.name = city.name
    this.country = city.country
  }
}
