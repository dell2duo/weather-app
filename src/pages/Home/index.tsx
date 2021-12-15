import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import CitySearch from '../../components/CitySearch'
import ListCities from '../../components/ListCities'
import ListCitiesWeather from '../../components/ListCitiesWeather'
import { UserConfigContext } from '../../context/UserConfigContext'
import { WeatherContext } from '../../context/WeatherContext'
import { City } from '../../domain/models/City'
import { CityWeather } from '../../domain/models/CityWeather'
import { SearchCitiesService } from '../../services/SearchCitiesService'
import { SearchWeatherService } from '../../services/SearchWeatherService'
import { RootStackParamList } from '../../types/RootStackParamList'

import { Container } from './styles'

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const Home: React.FC = () => {
  const navigation = useNavigation<homeScreenProp>()
  const { unitSystem, changeUnitSystem } = useContext(UserConfigContext)
  const {
    cities,
    favoriteCity: updateFavorite,
    getCities,
    saveCity,
  } = useContext(WeatherContext)
  const cityWeatherService = new SearchWeatherService()
  const searchCitiesService = new SearchCitiesService()
  const [search, setSearch] = useState<string>('')
  const [searchResultCities, setSearchResultCities] = useState<City[]>([])
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([])
  const [switchValue, setSwitchValue] = useState<boolean>(
    unitSystem === 'metric',
  )

  const start = useCallback(async (citiesArr: City[]): Promise<void> => {
    const citiesWeatherArr = await parseCityArrToCityWeatherArr(citiesArr)
    setCitiesWeather(citiesWeatherArr)
  }, [])

  useEffect(() => {
    cityWeatherService.unitSystem = unitSystem
    start(cities)
  }, [start])

  useEffect(() => {
    if (search.length === 0) {
      setSearchResultCities([])
    }
  }, [search])

  useEffect(() => {
    getCities()
  }, [cities])

  const updateUnitSystem = () => {
    cityWeatherService.unitSystem = switchValue ? 'imperial' : 'metric'
    changeUnitSystem(switchValue ? 'imperial' : 'metric')
    getCities().then((savedCities) => {
      parseCityArrToCityWeatherArr(savedCities).then((parsedCities) => {
        setCitiesWeather(parsedCities)
      })
    })
    setSwitchValue(!switchValue)
  }

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
    var foundCities = await searchCitiesService.search(search)
    foundCities = foundCities.filter(
      (city) => !citiesWeather.find((c) => c.id.toString() === city.id),
    )
    if (foundCities.length === 0) {
      setSearch('Cidade não encontrada')
      return
    }
    setSearchResultCities(foundCities)
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
        <ListCitiesWeather
          cities={citiesWeather}
          favoriteCity={favoriteCity}
          onPress={navigation.navigate}
          switchValue={switchValue}
          setSwitchValue={() => updateUnitSystem()}
        />
      )}
    </Container>
  )
}

export default Home
