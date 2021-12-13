import React from 'react'
import { TextProps } from 'react-native'

import { ReactText } from './styles'

export interface Props extends TextProps {
  font?: string
  fontSize?: number
  color?: string
  lineHeight?: number
}

const Text: React.FC<Props> = ({ children, ...rest }) => {
  return <ReactText {...rest}>{children}</ReactText>
}

export default Text
