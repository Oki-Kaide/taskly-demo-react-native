import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

import styled from "styled-components"

export const ButtonOutside = styled(TouchableOpacity)`
  background: red;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 24px;
  background-color: #ff3339;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ButtonText = styled(Text)`
  font-family: Circular-Bold;
  font-size: 16px;
  color: #ffffff;
`

interface ButtonProps {
  onPress: () => any
  leftText?: string
  rightText?: string
  text?: string
}

const Button: React.FC<ButtonProps> = ({ onPress, leftText, rightText, text }) => {
  return (
    <ButtonOutside onPress={onPress}>
      {text ? <ButtonText>{text}</ButtonText> : null}
      {leftText ? <ButtonText>{leftText}</ButtonText> : null}
      {leftText ? <View style={{ flex: 1 }} /> : null}
      {rightText ? <ButtonText>{rightText}</ButtonText> : null}
    </ButtonOutside>
  )
}

export default Button
