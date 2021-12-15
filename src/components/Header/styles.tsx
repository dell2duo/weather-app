import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.spacing.x4}px
    ${(props) => props.theme.spacing.x2}px;
`
export const BackButton = styled.TouchableOpacity`
  margin-right: ${(props) => props.theme.spacing.x2}px;
`
