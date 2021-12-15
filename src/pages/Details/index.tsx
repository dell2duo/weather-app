import { RouteProp, useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { useTheme } from 'styled-components/native'
import Header from '../../components/Header'
import Text from '../../components/Text'
import WeatherCard from '../../components/WeatherCard'
import { UserConfigContext } from '../../context/UserConfigContext'
import { CityForecast } from '../../domain/models/CityForecast'
import { ForecastApiModel } from '../../domain/models/CityForecastApiModel'
import { CityWeather } from '../../domain/models/CityWeather'
import { SearchWeatherService } from '../../services/SearchWeatherService'
import { RootStackParamList } from '../../types/RootStackParamList'

import { Container, ForecastList, TextContainer } from './styles'

type Props = {
  route: RouteProp<{ params: { cityWeather: CityWeather } }, 'params'>
}

type DetailsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>

export const Details: React.FC<Props & DetailsScreenProp> = ({ route }) => {
  const { unitSystem } = useContext(UserConfigContext)
  const navigate = useNavigation<DetailsScreenProp>()
  const { cityWeather } = route.params
  const theme = useTheme()
  const cityWeatherService = new SearchWeatherService()
  const [forecast, setForecast] = React.useState<CityForecast>()

  useEffect(() => {
    const init = async () => {
      cityWeatherService.unitSystem = unitSystem
      const forecast = await cityWeatherService.getForecastForDays(
        cityWeather.name,
      )
      const sliceForecastList = forecast.list.filter((forecastListItem) => {
        if (forecastListItem.dt_txt.includes('12:00:00')) {
          return true
        }
      })
      forecast.list = sliceForecastList
      setForecast(forecast)
    }
    init()
  }, [])

  return (
    <Container>
      <Header
        onPress={() => navigate.goBack()}
        title={forecast?.city?.name ?? 'Carregando...'}
      />
      <TextContainer>
        <Text
          fontSize={theme.fontSizes.searchBar}
          font={theme.fonts.extraBold800}
        >
          Previsão para os próximos dias
        </Text>
      </TextContainer>
      {forecast && (
        <ForecastList<React.ElementType>
          data={forecast.list}
          keyExtractor={(forecastObj: ForecastApiModel) => forecastObj.dt}
          renderItem={({ item }: { item: ForecastApiModel }) => (
            <WeatherCard dayForecast={item} />
          )}
        />
      )}
    </Container>
  )
}
