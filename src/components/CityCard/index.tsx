import React from 'react'
import { useTheme } from 'styled-components'
import { City } from '../../domain/models/City'
import Text from '../Text'
import { Plus } from 'react-native-feather'

import { Card, Column, RightRow, LeftRow } from './styles'

type Props = {
  city: City
  onClick: Function
}

const CityCard: React.FC<Props> = ({ city, onClick }) => {
  const theme = useTheme()
  return (
    <Card activeOpacity={0.8} onPress={() => onClick(city)}>
      <Column>
        <RightRow>
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
        </RightRow>
      </Column>
      <Column>
        <LeftRow>
          <Plus color={theme.colors.secondary} height={50} width={50} />
        </LeftRow>
      </Column>
    </Card>
  )
}

export default CityCard
