import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Search, X } from 'react-native-feather'
import { useTheme } from 'styled-components/native'

import { Container, Input, Column } from './styles'

type Props = {
  search: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  onSearch: Function
  placeholder?: string
}

const CitySearch: React.FC<Props> = ({
  search,
  onChange,
  placeholder,
  onSearch,
}) => {
  const theme = useTheme()

  return (
    <Container>
      <Column>
        {search.length > 0 && (
          <TouchableOpacity onPress={() => onChange('')}>
            <X color={theme.colors.placeholder} height={24} />
          </TouchableOpacity>
        )}
        <Input
          value={search}
          onChangeText={(value) => onChange(value)}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.placeholder}
        />
      </Column>
      <TouchableOpacity onPress={() => onSearch(search)}>
        <Search color={theme.colors.placeholder} height={24} />
      </TouchableOpacity>
    </Container>
  )
}

export default CitySearch
