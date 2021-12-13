import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  background: ${(props) => props.theme.colors.quinary};
  margin: 0 ${(props) => props.theme.spacing.x4}px;
  margin-top: ${(props) => props.theme.spacing.x6}px;
  border-radius: ${(props) => props.theme.borderRadius.x3}px;
  padding-left: ${(props) => props.theme.spacing.x4}px;
  padding-right: ${(props) => props.theme.spacing.x4}px;
`
export const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.regular400};
  font-size: ${(props) => props.theme.fontSizes.searchBar}px;
  color: ${(props) => props.theme.colors.placeholder};
  margin-left: ${(props) =>
    props.value?.length! > 0
      ? props.theme.spacing.x2
      : props.theme.spacing.none}px;
`
export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`
