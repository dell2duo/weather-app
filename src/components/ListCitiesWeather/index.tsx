import React, { Fragment, useState } from 'react'
import { FlatList, Switch } from 'react-native'
import { CityWeather } from '../../domain/models/CityWeather'
import CityWeatherCard from '../CityWeatherCard'

import { Container } from './styles'

type Props = {
  cities: CityWeather[]
  favoriteCity: Function
  onPress: Function
  switchValue: boolean
  setSwitchValue: () => void
}

const ListCitiesWeather: React.FC<Props> = ({
  cities,
  favoriteCity,
  onPress,
  switchValue,
  setSwitchValue,
}) => {
  return (
    <Container>
      {cities.length > 0 ? (
        <Fragment>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={switchValue ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setSwitchValue}
            value={switchValue}
          />
          <FlatList
            data={cities}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CityWeatherCard
                city={item}
                favoriteCity={favoriteCity}
                onPress={onPress}
              />
            )}
          />
        </Fragment>
      ) : null}
    </Container>
  )
}

export default ListCitiesWeather
