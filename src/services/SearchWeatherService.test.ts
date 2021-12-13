import { SearchWeatherService } from './SearchWeatherService'

describe('[Integration test]\nTesting city weather service', () => {
  it('should return a city weather unfavorited', async () => {
    const service = new SearchWeatherService()
    const city = 'Divino'
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
})
