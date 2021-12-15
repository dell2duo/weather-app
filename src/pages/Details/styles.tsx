import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.primary};
`
export const TextContainer = styled.Text`
  padding: 0 ${(props) => props.theme.spacing.x4}px;
`
export const ForecastList = styled.FlatList`
  padding: 0 ${(props) => props.theme.spacing.x4}px;
  margin-top: ${(props) => props.theme.spacing.x5}px;
`
