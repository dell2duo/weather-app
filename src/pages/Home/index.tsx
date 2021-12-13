import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import CitySearch from '../../components/CitySearch'
import ListCities from '../../components/ListCities'
import ListCitiesWeather from '../../components/ListCitiesWeather'
import { WeatherContext } from '../../context/WeatherContext'
import { City } from '../../domain/models/City'
import { CityWeather } from '../../domain/models/CityWeather'
import { SearchCitiesService } from '../../services/SearchCitiesService'
import { SearchWeatherService } from '../../services/SearchWeatherService'

import { Container } from './styles'

const Home: React.FC = () => {
  const {
    cities,
    favoriteCity: updateFavorite,
    getCities,
    removeCity,
    saveCity,
  } = useContext(WeatherContext)!
  const cityWeatherService = new SearchWeatherService()
  const searchCitiesService = new SearchCitiesService()
  const [search, setSearch] = useState<string>('')
  const [searchResultCities, setSearchResultCities] = useState<City[]>([])
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([])

  useEffect(() => {
    const init = async () => {
      const savedCities = (await getCities()) || ([] as City[])
      const parsedCities = await parseCityArrToCityWeatherArr(savedCities)
      setCitiesWeather(parsedCities)
    }
    init()
  }, [])

  useEffect(() => {
    if (search.length === 0) {
      setSearchResultCities([])
    }
  }, [search])

  const addCity = async (city: City): Promise<void> => {
    if (citiesWeather.find((c) => c.name === city.name)) {
      return
    }
    await saveCity(city)
    const parsedCities = await parseCityArrToCityWeatherArr([city])
    setCitiesWeather([...citiesWeather, ...parsedCities])
  }

  const favoriteCity = async (city: CityWeather): Promise<void> => {
    const updatedFavoriteCities = citiesWeather
    updatedFavoriteCities.find((c) => {
      if (c.name === city.name) {
        c.favorite = !c.favorite
      }
    })
    await updateFavorite(
      new City(city.name, city.country, city.favorite, city.id.toString()),
    )
    setCitiesWeather(updatedFavoriteCities)
  }

  const parseCityArrToCityWeatherArr = async (
    cities: City[],
  ): Promise<CityWeather[]> => {
    const promises = cities.map((city) => {
      return cityWeatherService.search(city.name, city.favorite)
    })

    try {
      const cityWeatherArr = await Promise.all(promises)
      return cityWeatherArr
    } catch (error) {
      return []
    }
  }

  const searchCities = async (search: string): Promise<void> => {
    var cities = await searchCitiesService.search(search)
    cities = cities.filter(
      (city) => !citiesWeather.find((c) => c.id.toString() === city.id),
    )
    setSearchResultCities(cities)
  }

  return (
    <Container>
      <CitySearch
        search={search}
        onChange={setSearch}
        onSearch={searchCities}
        placeholder="Procurar cidade..."
      />
      {search ? (
        <ListCities cities={searchResultCities} onClick={addCity} />
      ) : (
        <ListCitiesWeather cities={citiesWeather} favoriteCity={favoriteCity} />
      )}
    </Container>
  )
}

export default Home
