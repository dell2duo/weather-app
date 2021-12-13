import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin: 0 ${(props) => props.theme.spacing.x5}px;
  margin-top: ${(props) => props.theme.spacing.x6}px;
`
export const StyledFlatList = styled.FlatList`
  margin-top: ${(props) => props.theme.spacing.x4}px;
`
