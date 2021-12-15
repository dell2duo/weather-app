import React, { Fragment, useState } from 'react'
import { FlatList, Switch } from 'react-native'
import { CityWeather } from '../../domain/models/CityWeather'
import CityWeatherCard from '../CityWeatherCard'
import Text from '../Text'

import { Container } from './styles'

type Props = {
  cities: CityWeather[]
  favoriteCity: Function
  onPress: Function
  switchValue: boolean
  setSwitchValue: () => void
}

/**
 * TODO: Remove hard-coded colors hexadecimal values
 */

const ListCitiesWeather: React.FC<Props> = ({
  cities,
  favoriteCity,
  onPress,
  switchValue,
  setSwitchValue,
}) => {
  const orderedCitiesByFavorite = () =>
    cities.sort((a, b) => {
      if (a.favorite) {
        return -1
      }
      if (!a.name) {
        return 1
      }
      return 0
    })

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
            data={orderedCitiesByFavorite()}
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
      ) : (
        <Text fontSize={24}>
          Parece que você ainda não tem cidades cadastradas 😢
          {'\n'}
          {'\n'}
          Pesquise por uma cidade na barra superior e clique na lupa.
          {'\n'}
          {'\n'}
          Você conseguirá adicionar uma nova cidade ao clicar em qualquer cidade
          encontrada 😉
        </Text>
      )}
    </Container>
  )
}

export default ListCitiesWeather
