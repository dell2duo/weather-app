import React from 'react'
import { useTheme } from 'styled-components/native'
import { City } from '../../domain/models/City'
import CityCard from '../CityCard'
import Text from '../Text'

import { Container, StyledFlatList } from './styles'

type Props = {
  cities: City[]
  onClick: Function
}

const ListCities: React.FC<Props> = ({ cities, onClick }) => {
  const theme = useTheme()
  return (
    <Container>
      {cities.length > 0 ? (
        <Text font={theme.fonts.extraBold800}>Cidades encontradas</Text>
      ) : (
        <Text font={theme.fonts.extraBold800}>
          Clique na lupa para encontrar uma cidade
        </Text>
      )}
      <StyledFlatList<React.ElementType>
        data={cities}
        keyExtractor={(city: City) => city.id?.toString() ?? city.name}
        renderItem={({ item }: { item: City }) => (
          <CityCard city={item} onClick={onClick} />
        )}
      />
    </Container>
  )
}

export default ListCities
