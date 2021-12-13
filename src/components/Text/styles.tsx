import styled from 'styled-components/native'
import { Props } from '.'

export const ReactText = styled.Text<Props>`
  font-family: ${(props) => props.font ?? props.theme.fonts.regular400};
  font-size: ${(props) =>
    props.fontSize ?? props.theme.fontSizes.searchResult}px;
  color: ${(props) => props.color ?? props.theme.colors.fontSecondary};
  ${(props) => (props.lineHeight ? `line-height: ${props.lineHeight}px` : null)}
`
