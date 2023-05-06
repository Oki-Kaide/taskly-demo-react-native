import React from "react"
import { View, Text } from "react-native"
import styled from "styled-components"

export const Title = styled(Text)`
  font-family: Circular-Bold;
  margin: 0 11px 40px 0;
  font-size: 34px;
  line-height: 44px;
  font-weight: bold;
  font-style: normal;
  color: black;
  margin-bottom: 10px;
`

export const Description = styled(Text)`
  font-family: Circular-Medium;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #999999;
`

export const ItemText = styled(Description)`
  color: #000000;
  margin-left: 13px;
  margin-bottom: 15px;
`

export const Row = styled(View)`
  flex-direction: row;
`
