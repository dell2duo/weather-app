import React from 'react'
import { View } from 'react-native'
import { ChevronLeft } from 'react-native-feather'
import { useTheme } from 'styled-components/native'
import Text from '../Text'

import { Container, BackButton } from './styles'

type Props = {
  title: string
  onPress?: () => void
}

const Header: React.FC<Props> = ({ title, onPress }) => {
  const theme = useTheme()

  return (
    <Container>
      <BackButton onPress={onPress}>
        <ChevronLeft color={theme.colors.tertiary} height={40} width={40} />
      </BackButton>
      <Text fontSize={theme.fontSizes.header}>{title}</Text>
    </Container>
  )
}

export default Header
