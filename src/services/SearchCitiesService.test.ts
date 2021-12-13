import { City } from '../domain/models/City'
import { SearchCitiesService } from './SearchCitiesService'

test('should return a list of cities', async () => {
  const service = new SearchCitiesService()

  const cities = await service.search('sao')

  expect(cities.length).toBeGreaterThan(0)
})
