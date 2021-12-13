import styled from 'styled-components/native'

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${(props) => props.theme.spacing.x4}px
    ${(props) => props.theme.spacing.x4}px;
  background: ${(props) => props.theme.colors.senary};
  margin-bottom: ${(props) => props.theme.spacing.x4}px;
  border-radius: ${(props) => props.theme.borderRadius.x1}px;
  min-height: 115px;
`
export const Column = styled.View`
  flex: 1;
  flex-direction: column;
`
export const RightRow = styled.View`
  flex-direction: column;
`
export const LeftRow = styled.View`
  flex: 1;
  flex-direction: column;
  align-self: flex-end;
  align-items: flex-end;
  justify-content: center;
  width: 34px;
`
