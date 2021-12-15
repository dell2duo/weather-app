import React from 'react'
import { useTheme } from 'styled-components/native'
import { ForecastApiModel } from '../../domain/models/CityForecastApiModel'
import { DateConverter } from '../../util/DateConverter'
import { Card } from '../CityCard/styles'
import { ColumnLeft, ColumnRight, Row } from '../CityWeatherCard/styles'
import Text from '../Text'

import { FeelsLikeRow } from './styles'

type Props = {
  dayForecast: ForecastApiModel
}

const WeatherCard: React.FC<Props> = ({ dayForecast }) => {
  const theme = useTheme()
  return (
    <Card activeOpacity={1}>
      <ColumnLeft>
        <Row>
          <Text
            font={theme.fonts.black900}
            fontSize={theme.fontSizes.weatherCard}
            color={theme.colors.secondary}
            lineHeight={26}
            numberOfLines={2}
          >
            {DateConverter.getDayName(dayForecast.dt)}
          </Text>
          <Text
            fontSize={theme.fontSizes.country}
            color={theme.colors.secondary}
            lineHeight={16}
          >
            {DateConverter.getDayNumber(dayForecast.dt)} de{' '}
            {DateConverter.getMonthName(dayForecast.dt)}
          </Text>
        </Row>
        <Row>
          <Text
            font={theme.fonts.extraBold800}
            fontSize={theme.fontSizes.description}
            color={theme.colors.primary}
          >
            {dayForecast.weather[0].description}
          </Text>
          <Text
            font={theme.fonts.bold700}
            fontSize={theme.fontSizes.description}
            color={theme.colors.secondary}
          >
            {Math.round(dayForecast.main.temp_min)}º -{' '}
            {Math.round(dayForecast.main.temp_max)}º
          </Text>
        </Row>
      </ColumnLeft>
      <ColumnRight>
        <Row>
          <Text
            font={theme.fonts.light300}
            fontSize={theme.fontSizes.degrees}
            color={theme.colors.primary}
            lineHeight={56}
          >
            {DateConverter.getCurrentTempByDayPeriod(dayForecast.main.temp)}º
          </Text>
        </Row>
        <FeelsLikeRow>
          <Text color={theme.colors.feelsLike} lineHeight={24}>
            Sensação
          </Text>
          <Text
            font={theme.fonts.light300}
            fontSize={theme.fontSizes.searchBar}
            color={theme.colors.primary}
            lineHeight={24}
          >
            {DateConverter.getCurrentFeelLikeTempByDayPeriod(
              dayForecast.main.feels_like,
            )}
            º
          </Text>
        </FeelsLikeRow>
      </ColumnRight>
    </Card>
  )
}

export default WeatherCard
