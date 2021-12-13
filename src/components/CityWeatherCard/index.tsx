import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { CityWeather } from '../../domain/models/CityWeather'
import { Heart } from 'react-native-feather'
import Text from '../Text'

import { ColumnRight, ColumnLeft, Row } from './styles'
import { Card } from '../CityCard/styles'

type Props = {
  city: CityWeather
  favoriteCity: Function
}

const CityWeatherCard: React.FC<Props> = ({ city, favoriteCity }) => {
  const theme = useTheme()
  return (
    <Card activeOpacity={0.8}>
      <ColumnLeft>
        <Row>
          <Text
            font={theme.fonts.black900}
            fontSize={theme.fontSizes.weatherCard}
            color={theme.colors.secondary}
            lineHeight={26}
            numberOfLines={2}
          >
            {city.name}
          </Text>
          <Text
            font={theme.fonts.regular400}
            fontSize={theme.fontSizes.country}
            color={theme.colors.secondary}
            lineHeight={16}
          >
            {city.country}
          </Text>
        </Row>
        <Row>
          <Text
            font={theme.fonts.extraBold800}
            fontSize={theme.fontSizes.description}
            color={theme.colors.primary}
          >
            {city.description}
          </Text>
          <Text
            font={theme.fonts.bold700}
            fontSize={theme.fontSizes.description}
            color={theme.colors.secondary}
          >
            {Math.round(city.minTemperature)}º -{' '}
            {Math.round(city.maxTemperature)}º
          </Text>
        </Row>
      </ColumnLeft>
      <ColumnRight>
        <Row>
          <Text
            font={theme.fonts.light300}
            fontSize={theme.fontSizes.degrees}
            color={theme.colors.primary}
          >
            {Math.round(city.temperature)}º
          </Text>
        </Row>
        <Row>
          <TouchableOpacity onPress={() => favoriteCity(city)}>
            <Heart
              color={
                city.favorite ? theme.colors.favorite : theme.colors.unfavorite
              }
            />
          </TouchableOpacity>
        </Row>
      </ColumnRight>
    </Card>
  )
}

export default CityWeatherCard
