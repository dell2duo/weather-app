export class City {
  public id?: string
  public name: string
  public country: string
  public favorite: boolean

  constructor(name: string, country: string, favorite: boolean, id?: string) {
    this.name = name
    this.country = country
    this.favorite = favorite
    this.id = id
  }
}
