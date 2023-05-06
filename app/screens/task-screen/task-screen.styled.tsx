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

export const NewTask = styled(Text)`
  font-family: Circular-Medium;
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #000000;
`

export const AddTask = styled(Text)`
  font-family: Circular-Medium;
  line-height: 21px;
  font-size: 14px;
  font-weight: 500;
  color: #999999;
`

export const Redline = styled(Text)`
  height: 1px;
  border: solid 1px #ff3339;
`

export const Row = styled(View)`
  flex-direction: row;
`
