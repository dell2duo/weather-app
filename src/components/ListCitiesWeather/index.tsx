import React from 'react'
import { FlatList } from 'react-native'
import { CityWeather } from '../../domain/models/CityWeather'
import CityWeatherCard from '../CityWeatherCard'

import { Container } from './styles'

type Props = {
  cities: CityWeather[]
  favoriteCity: Function
}

const ListCitiesWeather: React.FC<Props> = ({ cities, favoriteCity }) => {
  return (
    <Container>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CityWeatherCard city={item} favoriteCity={favoriteCity} />
        )}
      />
    </Container>
  )
}

export default ListCitiesWeather
