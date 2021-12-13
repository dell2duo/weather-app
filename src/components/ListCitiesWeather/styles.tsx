import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.secondary};
  margin-top: ${(props) => props.theme.spacing.x4}px;
  border-top-left-radius: ${(props) => props.theme.borderRadius.x3}px;
  border-top-right-radius: ${(props) => props.theme.borderRadius.x3}px;
  padding: 0 ${(props) => props.theme.spacing.x4}px;
  padding-top: ${(props) => props.theme.spacing.x7}px;
`
