import { View, Image, Alert } from "react-native"
import { observer } from "mobx-react-lite"
import { useNavigation } from "@react-navigation/native"
import React from "react"

import { Screen } from "../../components"
import { Title } from "./welcome-screen.styled"
import { color } from "../../theme"
import Logo from "./logo.png"
import ProtonSDK from "../../utils/ProtonSDK"
import { useStores } from "../../models"

import Button from "../../components/button"

export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const rootStore = useStores()

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Screen preset="fixed" backgroundColor={color.transparent}>
        <View style={{ flexDirection: "row", marginTop: 25 }}>
          <Image source={Logo} />
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ height: 170 }} />
        <Title>Get a virtual assistant organize like never before</Title>

        <Button
          onPress={async () => {
            try {
              const { auth, accountData } = await ProtonSDK.login()
              console.log("login res", auth, accountData)
              rootStore.setActor(auth.actor)
              rootStore.setPermission(auth.permission)
              rootStore.setName(accountData.name)
              rootStore.setAvatar(accountData.avatar)
              navigation.navigate("subscription")
            } catch (ex) {
              Alert.alert("Error", ex.message)
            }
          }}
          text="Connect Wallet"
        />
      </Screen>
    </View>
  )
})
