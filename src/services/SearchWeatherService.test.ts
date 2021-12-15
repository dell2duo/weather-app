import { SearchWeatherService } from './SearchWeatherService'

describe('[Integration test]\nTesting city weather service', () => {
  it('should return a city weather unfavorited for string "Divino"', async () => {
    const service = new SearchWeatherService()
    const city = 'Divino'
    const response = await service.search(city, false)

    expect(response).toBeDefined()
    expect(response.favorite).toBe(false)
  })

  it('should return a city weather unfavorited for string "São Paulo"', async () => {
    const service = new SearchWeatherService()
    const city = 'São Paulo'
    const response = await service.search(city, false)

    expect(response).toBeDefined()
    expect(response.favorite).toBe(false)
  })

  it('should return a city weather favorited', async () => {
    const service = new SearchWeatherService()
    const city = 'Divino'

    const response = await service.search(city, true)

    expect(response).toBeDefined()
    expect(response.favorite).toBe(true)
  })

  it('should return the city forecast for the next 5 days with 40 objects', async () => {
    const service = new SearchWeatherService()
    const city = 'São Paulo'

    const forecast = await service.getForecastForDays(city)
    expect(forecast.list).toHaveLength(40)
  })
})
